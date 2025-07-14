'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Job, jobs as initialJobs } from '@/app/data/jobs';
import { Briefcase, Filter, ChevronDown } from 'lucide-react';
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
import Image from "next/image"

export function JobManagement() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openJobId, setOpenJobId] = useState<number | null>(null);
  const [jobToClose, setJobToClose] = useState<number | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // In a real app, this would fetch from your API
    setJobs(initialJobs);
    setIsLoading(false);
  }, []);

  const handleStatusToggle = async (jobId: number) => {
    try {
      // In a real app, this would call your API
      setJobs(prev => 
        prev.map(job => 
          job.id === jobId 
            ? { 
                ...job, 
                forHiring: !job.forHiring 
              }
            : job
        )
      );

      toast({
        title: "Status Updated",
        description: `Job has been ${jobs.find(j => j.id === jobId)?.forHiring ? 'closed' : 'reopened'}.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update job status.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return <div>Loading jobs...</div>;
  }

  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Job Management</h1>
          <p className="text-muted-foreground max-w-2xl">
            Manage job listings, view applications, and update job status
          </p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter Jobs
          </Button>
          <Button>Post New Job</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <Card key={job.id} className="job-card overflow-hidden border-none shadow-md">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={job.image || "/placeholder.svg"}
                alt={job.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={job.id === 1}
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
                      View Details
                      <ChevronDown className={`h-4 w-4 transition-transform ${openJobId === job.id ? 'transform rotate-180' : ''}`} />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 space-y-4">
                    <div className="text-sm">
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-sm">
                      <h4 className="font-semibold mb-2">Package Details:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Basic Salary: {job.salary}</li>
                        <li>Food Allowance: QAR 300</li>
                        <li>Overtime: QAR 300-500</li>
                        <li>Working Hours: 8-12 hours per day</li>
                      </ul>
                    </div>
                    <div className="text-sm">
                      <h4 className="font-semibold mb-2">Additional Information:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Medical Examination: QAR 6500</li>
                        <li>Commission: Applicable based on position</li>
                        <li>Contract Duration: 2 years renewable</li>
                      </ul>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant={job.forHiring ? "destructive" : "default"}
                        className="flex-1"
                        onClick={() => setJobToClose(job.id)}
                      >
                        {job.forHiring ? 'Close Job' : 'Reopen Job'}
                      </Button>
                      <Button variant="outline" className="flex-1">Edit</Button>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <AlertDialog open={jobToClose !== null} onOpenChange={() => setJobToClose(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {jobs.find(j => j.id === jobToClose)?.forHiring ? 'Close Job' : 'Reopen Job'}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {jobs.find(j => j.id === jobToClose)?.forHiring 
                ? 'Are you sure you want to close this job? It will no longer be visible to applicants.'
                : 'Are you sure you want to reopen this job? It will be visible to applicants again.'}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => jobToClose && handleStatusToggle(jobToClose)}
              className={jobs.find(j => j.id === jobToClose)?.forHiring 
                ? "bg-destructive text-destructive-foreground hover:bg-destructive/90"
                : "bg-green-600 text-white hover:bg-green-700"
              }
            >
              {jobs.find(j => j.id === jobToClose)?.forHiring ? 'Close Job' : 'Reopen Job'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
} 