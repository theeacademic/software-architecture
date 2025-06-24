'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Job, jobs as initialJobs } from '@/app/data/jobs';
import { Briefcase, Filter, ChevronDown, Trash2 } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Analytics } from '@/components/admin/analytics';

// Mock applications data - in a real app, this would come from your API
const mockApplications = [
  {
    id: 1,
    jobId: 1,
    applicantName: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    status: "pending",
    appliedAt: "2024-03-15T10:00:00Z",
    resume: "/resumes/john-doe.pdf"
  },
  {
    id: 2,
    jobId: 1,
    applicantName: "Jane Smith",
    email: "jane@example.com",
    phone: "+1987654321",
    status: "reviewed",
    appliedAt: "2024-03-14T15:30:00Z",
    resume: "/resumes/jane-smith.pdf"
  }
];

export function JobApplications() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState(mockApplications);
  const [isLoading, setIsLoading] = useState(true);
  const [openJobId, setOpenJobId] = useState<number | null>(null);
  const [applicationToDelete, setApplicationToDelete] = useState<number | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // In a real app, this would fetch from your API
    setJobs(initialJobs);
    setIsLoading(false);
  }, []);

  const handleStatusUpdate = async (applicationId: number, newStatus: string) => {
    try {
      // In a real app, this would call your API
      setApplications(prev => 
        prev.map(app => 
          app.id === applicationId 
            ? { ...app, status: newStatus }
            : app
        )
      );

      toast({
        title: "Status Updated",
        description: "The application status has been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update application status.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteApplication = async (applicationId: number) => {
    try {
      // In a real app, this would call your API
      setApplications(prev => prev.filter(app => app.id !== applicationId));
      setApplicationToDelete(null);

      toast({
        title: "Application Deleted",
        description: "The job application has been removed successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete the application.",
        variant: "destructive",
      });
    }
  };

  // Get jobs that have applications (robust filtering)
  const jobsWithApplications = jobs.filter(job =>
    applications.some(app => app.jobId === job.id)
  );

  if (isLoading) {
    return <div>Loading applications...</div>;
  }

  if (jobsWithApplications.length === 0) {
    return (
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Job Applications</h1>
            <p className="text-muted-foreground max-w-2xl">
              No applications have been received yet
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Job Applications</h1>
          <p className="text-muted-foreground max-w-2xl">
            Review and manage job applications
          </p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter Applications
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobsWithApplications.map((job) => (
          <Card key={job.id} className="job-card overflow-hidden border-none shadow-md">
            <div className="relative h-64 overflow-hidden">
              <img
                src={job.image || "/placeholder.svg"}
                alt={job.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors">
                <Briefcase className="h-4 w-4 text-blue-600" />
              </button>
              {job.forHiring && (
                <Badge className="absolute bottom-2 left-2 bg-green-600 hover:bg-green-700">Hiring Now</Badge>
              )}
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-1 line-clamp-1">{job.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{job.location}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="font-medium text-blue-600">{job.salary}</span>
                <span className="text-xs text-muted-foreground">{job.type}</span>
              </div>
              <div className="mt-2">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {job.gender}
                </span>
              </div>
              <div className="mt-4">
                <Collapsible
                  open={openJobId === job.id}
                  onOpenChange={(isOpen) => setOpenJobId(isOpen ? job.id : null)}
                  className="w-full"
                >
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full flex items-center justify-between">
                      View Applications ({applications.filter(app => app.jobId === job.id).length})
                      <ChevronDown className={`h-4 w-4 transition-transform ${openJobId === job.id ? 'transform rotate-180' : ''}`} />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 space-y-4">
                    {applications
                      .filter(app => app.jobId === job.id)
                      .map(application => (
                        <div key={application.id} className="border rounded-lg p-4 space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold">{application.applicantName}</h4>
                              <p className="text-sm text-muted-foreground">{application.email}</p>
                              <p className="text-sm text-muted-foreground">{application.phone}</p>
                            </div>
                            <Badge variant={application.status === 'pending' ? 'secondary' : 'default'}>
                              {application.status}
                            </Badge>
                          </div>
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleStatusUpdate(application.id, 'reviewed')}
                              disabled={application.status === 'reviewed'}
                            >
                              Mark as Reviewed
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => window.open(application.resume, '_blank')}
                            >
                              View Resume
                            </Button>
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => setApplicationToDelete(application.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <AlertDialog open={applicationToDelete !== null} onOpenChange={() => setApplicationToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Application</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this application? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => applicationToDelete && handleDeleteApplication(applicationToDelete)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Analytics />
    </div>
  );
} 