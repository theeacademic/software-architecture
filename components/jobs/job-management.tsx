'use client';

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  type: string;
  postedAt: string;
  imageUrl?: string;
}

interface Application {
  id: string;
  jobId: string;
  videoUrl?: string;
  appliedAt: string;
}

export function JobManagement() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newJob, setNewJob] = useState({
    title: '',
    description: '',
    location: '',
    type: 'full-time',
  });
  const [applications, setApplications] = useState<Application[]>([]);
  const [jobImage, setJobImage] = useState<File | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchJobs();
    fetchApplications();
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

  const fetchApplications = async () => {
    try {
      const response = await fetch('/api/jobs/apply-with-video');
      const data = await response.json();
      setApplications(data.applications || []);
    } catch (error) {
      // Optionally handle error
    }
  };

  const handleCreateJob = async () => {
    try {
      const formData = new FormData();
      formData.append('title', newJob.title);
      formData.append('description', newJob.description);
      formData.append('location', newJob.location);
      formData.append('type', newJob.type);
      if (jobImage) {
        formData.append('image', jobImage);
      }
      const response = await fetch('/api/jobs', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        toast({
          title: "Success",
          description: "Job created successfully!",
        });
        setIsDialogOpen(false);
        setNewJob({
          title: '',
          description: '',
          location: '',
          type: 'full-time',
        });
        setJobImage(null);
        if (imageInputRef.current) imageInputRef.current.value = '';
        fetchJobs();
      } else {
        throw new Error('Job creation failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create job. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteJob = async (jobId: string) => {
    try {
      const response = await fetch(`/api/jobs/${jobId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Job deleted successfully!",
        });
        fetchJobs();
      } else {
        throw new Error('Job deletion failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete job. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return <div className="text-center">Loading jobs...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>Create New Job</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Job</DialogTitle>
              <DialogDescription>
                Fill in the details for the new job posting.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input
                  id="title"
                  value={newJob.title}
                  onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newJob.description}
                  onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={newJob.location}
                  onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Job Type</Label>
                <Select
                  value={newJob.type}
                  onValueChange={(value) => setNewJob({ ...newJob, type: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full Time</SelectItem>
                    <SelectItem value="part-time">Part Time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Job Image</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  ref={imageInputRef}
                  onChange={e => setJobImage(e.target.files?.[0] || null)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateJob}>Create Job</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
              <CardDescription>
                {job.location} • {job.type} • Posted {new Date(job.postedAt).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  {job.imageUrl && (
                    <img src={job.imageUrl} alt={job.title} className="w-32 h-20 object-cover rounded mb-2" />
                  )}
                  <p className="text-sm text-muted-foreground">{job.description}</p>
                </div>
                <Button
                  variant="destructive"
                  onClick={() => handleDeleteJob(job.id)}
                >
                  Delete
                </Button>
              </div>
              {/* Applications for this job */}
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Applications</h4>
                {applications.filter(app => app.jobId === job.id).length === 0 ? (
                  <p className="text-sm text-muted-foreground">No applications yet.</p>
                ) : (
                  <ul className="space-y-4">
                    {applications.filter(app => app.jobId === job.id).map(app => (
                      <li key={app.id} className="border rounded p-2">
                        <div className="flex flex-col gap-2">
                          <span className="text-xs text-muted-foreground">Applied: {new Date(app.appliedAt).toLocaleString()}</span>
                          {app.videoUrl && (
                            <video src={app.videoUrl} controls width="320" className="rounded" />
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 