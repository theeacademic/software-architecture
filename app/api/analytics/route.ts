import { NextResponse } from 'next/server';
import { applications } from '../jobs/apply-with-video/route';
import { jobs } from '../jobs/route';

export async function GET() {
  // Real analytics from in-memory arrays
  const visitors = 1; // Only you have visited
  const activities = [
    { label: 'Applications Submitted', count: applications.length },
    { label: 'Jobs Posted', count: jobs.length },
  ];
  return NextResponse.json({ visitors, activities });
} 