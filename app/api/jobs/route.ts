import { NextResponse } from 'next/server';
import { notifications } from '../notifications/route';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

// Mock in-memory jobs array - initialize with some jobs
export const jobs: any[] = [
  {
    id: '1',
    title: 'Housemaid',
    description: 'Looking for an experienced housemaid for a family residence.',
    location: 'Dubai',
    type: 'Full-time',
    postedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Barista',
    description: 'Experienced barista needed for a busy coffee shop.',
    location: 'Abu Dhabi',
    type: 'Full-time',
    postedAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Beautician',
    description: 'Skilled beautician needed for a luxury spa.',
    location: 'Dubai',
    type: 'Full-time',
    postedAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Lifeguard',
    description: 'Certified lifeguard needed for a private beach resort.',
    location: 'Sharjah',
    type: 'Full-time',
    postedAt: new Date().toISOString(),
  }
];

export async function GET() {
  return NextResponse.json({ jobs });
}

export async function POST(req: Request) {
  try {
    let newJob;
    let imageUrl = '';
    if (req.headers.get('content-type')?.includes('multipart/form-data')) {
      const formData = await req.formData();
      const title = formData.get('title') as string;
      const description = formData.get('description') as string;
      const location = formData.get('location') as string;
      const type = formData.get('type') as string;
      const image = formData.get('image') as File | null;
      if (image) {
        const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
        await mkdir(uploadsDir, { recursive: true });
        const imageBuffer = Buffer.from(await image.arrayBuffer());
        const imageFilename = `${Date.now()}-${image.name.replace(/\s+/g, '-')}`;
        const imagePath = path.join(uploadsDir, imageFilename);
        await writeFile(imagePath, imageBuffer);
        imageUrl = `/uploads/${imageFilename}`;
      }
      newJob = {
        id: Date.now().toString(),
        title,
        description,
        location,
        type,
        postedAt: new Date().toISOString(),
        imageUrl,
      };
    } else {
      const data = await req.json();
      newJob = {
        id: Date.now().toString(),
        ...data,
        postedAt: new Date().toISOString(),
        imageUrl: '',
      };
    }
    jobs.push(newJob);
    notifications.push({
      id: Date.now().toString(),
      message: `New job posted: ${newJob.title}`,
      jobId: newJob.id,
      createdAt: new Date().toISOString(),
      read: false,
    });
    return NextResponse.json({ success: true, job: newJob });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create job' }, { status: 500 });
  }
} 