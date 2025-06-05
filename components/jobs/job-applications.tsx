'use client';

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/app/AuthContext"

interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  applicantName: string;
  status: 'pending' | 'approved' | 'rejected';
  appliedAt: string;
}

interface JobApplicationsProps {
  userId?: string;
}

export function JobApplications({ userId }: JobApplicationsProps) {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    fetchApplications();
  }, [userId]);

  const fetchApplications = async () => {
    try {
      const url = userId ? `/api/jobs/applications?userId=${userId}` : '/api/jobs/applications';
      const response = await fetch(url);
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch applications. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusUpdate = async (applicationId: string, newStatus: 'approved' | 'rejected') => {
    try {
      const response = await fetch(`/api/jobs/applications/${applicationId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: `Application ${newStatus} successfully.`,
        });
        fetchApplications();
      } else {
        throw new Error('Status update failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update application status. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return <div className="text-center">Loading applications...</div>;
  }

  if (applications.length === 0) {
    return <div className="text-center text-muted-foreground">No applications found.</div>;
  }

  return (
    <div className="space-y-4">
      {applications.map((application) => (
        <Card key={application.id}>
          <CardHeader>
            <CardTitle>{application.jobTitle}</CardTitle>
            <CardDescription>
              Applied by: {application.applicantName} • {new Date(application.appliedAt).toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                Status: <span className="font-medium">{application.status}</span>
              </div>
              {!userId && application.status === 'pending' && (
                <div className="space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => handleStatusUpdate(application.id, 'approved')}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => handleStatusUpdate(application.id, 'rejected')}
                  >
                    Reject
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 