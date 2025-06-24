import { NextResponse } from 'next/server';
import { notifications } from '../notifications/route';

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
    const data = await req.json();
    const newJob = {
      id: Date.now().toString(),
      ...data,
      postedAt: new Date().toISOString(),
    };
    jobs.push(newJob);

    // Push notification for all users (demo)
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