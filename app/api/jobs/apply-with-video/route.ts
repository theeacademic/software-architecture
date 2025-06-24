import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';

// Mock in-memory applications array (replace with DB in production)
export const applications: any[] = [];

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const jobId = formData.get('jobId') as string;
    const video = formData.get('video') as File;

    if (!jobId || !video) {
      return NextResponse.json({ error: 'Missing jobId or video' }, { status: 400 });
    }

    // Save video to local storage (public/uploads)
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadsDir, { recursive: true });
    const videoBuffer = Buffer.from(await video.arrayBuffer());
    const videoFilename = `${Date.now()}-${video.name.replace(/\s+/g, '-')}`;
    const videoPath = path.join(uploadsDir, videoFilename);
    await writeFile(videoPath, videoBuffer);

    // Store application data (mock)
    const application = {
      id: Date.now().toString(),
      jobId,
      videoUrl: `/uploads/${videoFilename}`,
      appliedAt: new Date().toISOString(),
    };
    applications.push(application);

    // --- EMAIL LOGIC ---
    // Fill in your Gmail address and app password below
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'YOUR_GMAIL_ADDRESS@gmail.com', // <-- FILL THIS IN
        pass: 'YOUR_APP_PASSWORD',            // <-- FILL THIS IN (App Password, not your real password)
      },
    });

    await transporter.sendMail({
      from: 'YOUR_GMAIL_ADDRESS@gmail.com', // <-- FILL THIS IN
      to: 'kellykabui392@gmail.com',
      subject: `New Job Application Video for Job ID: ${jobId}`,
      text: `A new video application has been submitted for job ID: ${jobId}.`,
      attachments: [
        {
          filename: videoFilename,
          path: videoPath,
        },
      ],
    });
    // --- END EMAIL LOGIC ---

    return NextResponse.json({ success: true, application });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process application' }, { status: 500 });
  }
}

export async function GET() {
  // Return all applications (mock, in-memory)
  return NextResponse.json({ applications });
} 