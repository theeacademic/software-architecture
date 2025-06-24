import { NextResponse } from 'next/server';

// Mock in-memory notifications array
export const notifications: any[] = [];

export async function GET() {
  // In a real app, filter by user
  return NextResponse.json({ notifications });
} 