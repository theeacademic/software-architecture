import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

// Mock analytics data
const analyticsData = {
  visitors: 1245,
  activities: [
    { label: 'Applications Submitted', count: 87 },
    { label: 'Jobs Posted', count: 12 },
    { label: 'Jobs Filled', count: 5 },
    { label: 'Reviews Written', count: 23 },
  ],
};

export function Analytics() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Site Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Total Visitors</h2>
            <p className="text-5xl font-bold text-blue-600">{analyticsData.visitors}</p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Activities Summary</h2>
            <ul className="space-y-2">
              {analyticsData.activities.map((activity, idx) => (
                <li key={idx} className="flex justify-between text-lg">
                  <span>{activity.label}</span>
                  <span className="font-bold text-blue-700">{activity.count}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 