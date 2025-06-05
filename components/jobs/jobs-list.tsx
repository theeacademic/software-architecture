'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Job, jobs as initialJobs } from '@/app/data/jobs';
import { useRouter } from 'next/navigation';

export function JobsList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // In a real app, this would fetch from your API
    setJobs(initialJobs.filter(job => job.status === 'active'));
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading jobs...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Available Positions</h2>
      </div>

      {jobs.map((job) => (
        <Card key={job.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg">{job.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {job.department} • {job.location} • {job.type}
                </p>
                {job.salary && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {job.salary.currency} {job.salary.min.toLocaleString()} - {job.salary.max.toLocaleString()}
                  </p>
                )}
              </div>
              <Badge variant="outline">
                {job.applicationsCount} Applications
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Posted on {new Date(job.postedAt).toLocaleDateString()}
              </p>
              <Button 
                onClick={() => router.push(`/jobs/${job.id}`)}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 