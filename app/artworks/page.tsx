"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Filter, ChevronDown } from "lucide-react"
import Link from "next/link"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useState } from "react"
import { jobs } from '@/app/data/jobs'

export default function JobsPage() {
  const [openJobId, setOpenJobId] = useState<number | null>(null)
  const [selectedJob, setSelectedJob] = useState<number | null>(null)

  // Only show jobs that are hiring
  const availableJobs = jobs.filter(job => job.forHiring)

  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Available Jobs</h1>
          <p className="text-muted-foreground max-w-2xl">
            Browse and apply for available positions
          </p>
        </div>
        <Button variant="outline" className="mt-4 md:mt-0">
          <Filter className="mr-2 h-4 w-4" />
          Filter Jobs
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {availableJobs.map((job) => (
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
              <Badge className="absolute bottom-2 left-2 bg-green-600 hover:bg-green-700">Hiring Now</Badge>
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
              {/* View Details Button (Toggles Dropdown) */}
              <Collapsible open={openJobId === job.id} onOpenChange={() => setOpenJobId(openJobId === job.id ? null : job.id)}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full mt-4">
                    View Details
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${openJobId === job.id ? 'rotate-180' : 'rotate-0'}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-3">
                  <div>
                    <h4 className="text-sm font-medium mb-1">Requirements:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  {/* Add other details you want to show in the dropdown, e.g., category */}
                  <div>
                     <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Category: {job.category}</span>
                  </div>

                  {/* Apply Button (Links to Sign-in) */}
                  <Link href="/auth/sign-in">
                    <Button size="sm" className="w-full mt-2">Apply</Button>
                  </Link>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
