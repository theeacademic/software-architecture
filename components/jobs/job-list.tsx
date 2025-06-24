'use client';

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  type: string;
  postedAt: string;
}

const jobsRequiringVideo = ["Housemaid", "Barista", "Beautician", "Lifeguard"];

export function JobList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('/api/jobs');
      const data = await response.json();
      setJobs(data.jobs || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch jobs. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleApply = (job: Job) => {
    if (jobsRequiringVideo.includes(job.title)) {
      setSelectedJob(job);
      setShowVideoModal(true);
    } else {
      submitApplication(job.id);
    }
  };

  const submitApplication = async (jobId: string, video?: File) => {
    try {
      setUploading(true);
      let response;
      if (video) {
        const formData = new FormData();
        formData.append('jobId', jobId);
        formData.append('video', video);
        response = await fetch('/api/jobs/apply-with-video', {
          method: 'POST',
          body: formData,
        });
      } else {
        response = await fetch('/api/jobs/apply', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ jobId }),
        });
      }
      if (response.ok) {
        toast({ title: 'Success', description: 'Application submitted successfully!' });
        setShowVideoModal(false);
        setVideoFile(null);
        setSelectedJob(null);
      } else {
        throw new Error('Application failed');
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to submit application. Please try again.', variant: 'destructive' });
    } finally {
      setUploading(false);
    }
  };

  const handleVideoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedJob && videoFile) {
      submitApplication(selectedJob.id, videoFile);
    }
  };

  if (isLoading) {
    return <div className="text-center">Loading available jobs...</div>;
  }

  if (jobs.length === 0) {
    return <div className="text-center text-muted-foreground">No jobs available at the moment.</div>;
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Card key={job.id}>
          <CardHeader>
            <CardTitle>{job.title}</CardTitle>
            <CardDescription>
              {job.location} • {job.type}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{job.description}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => handleApply(job)}>Apply Now</Button>
          </CardFooter>
        </Card>
      ))}
      <Dialog open={showVideoModal} onOpenChange={setShowVideoModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload a Short Video</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleVideoSubmit} className="space-y-4">
            <div className="text-sm text-muted-foreground mb-2">
              Please record a short video describing yourself. The video should not be more than <b>3 minutes</b> long.
            </div>
            <Input
              type="file"
              accept="video/*"
              required
              onChange={e => setVideoFile(e.target.files?.[0] || null)}
              disabled={uploading}
            />
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setShowVideoModal(false)} disabled={uploading}>Cancel</Button>
              <Button type="submit" disabled={!videoFile || uploading}>{uploading ? 'Uploading...' : 'Submit Application'}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
} 