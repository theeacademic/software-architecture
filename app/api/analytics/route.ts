import { NextResponse } from 'next/server';

// In a real app, fetch these from your database
const mockAnalytics = {
  visitors: 123, // Replace with real unique login count
  activities: [
    { label: 'Applications Submitted', count: 87 },
    { label: 'Jobs Posted', count: 12 },
    { label: 'Jobs Filled', count: 5 },
    { label: 'Reviews Written', count: 23 },
  ],
};

export async function GET() {
  // Here you would query your database for real analytics
  return NextResponse.json(mockAnalytics);
} 