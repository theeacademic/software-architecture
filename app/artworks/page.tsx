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

const jobs = [
  {
    id: 1,
    title: "Security Personnel",
    location: "Qatar",
    image: "/security.jpg",
    salary: "QAR 1600-1800",
    category: "Security",
    requirements: "Valid Passport, Good Conduct",
    type: "Full-time",
    gender: "Male",
    forHiring: true,
  },
  {
    id: 2,
    title: "Cleaner",
    location: "Qatar",
    image: "/cleaner.jpg?height=400&width=600",
    salary: "QAR 1000 + Allowances",
    category: "Maintenance",
    requirements: "Valid Passport, Good Conduct",
    type: "Full-time",
    gender: "Both",
    forHiring: true,
  },
  {
    id: 3,
    title: "Company Helper",
    location: "Qatar",
    image: "/helper.jpg?height=400&width=600",
    salary: "QAR 1000 + Allowances",
    category: "General",
    requirements: "Valid Passport, Good Conduct",
    type: "Full-time",
    gender: "Male",
    forHiring: true,
  },
  {
    id: 4,
    title: "Lifeguard",
    location: "Qatar",
    image: "/lifeguard.jpg?height=400&width=600",
    salary: "QAR 1000 + Allowances",
    category: "Safety",
    requirements: "Valid Passport, Good Conduct, Swimming Certificate",
    type: "Full-time",
    gender: "Male",
    forHiring: true,
  },
  {
    id: 5,
    title: "Barista",
    location: "Qatar",
    image: "/barista.jpg?height=400&width=600",
    salary: "QAR 1000 + Allowances",
    category: "Hospitality",
    requirements: "Valid Passport, Good Conduct",
    type: "Full-time",
    gender: "Both",
    forHiring: true,
  },
  {
    id: 6,
    title: "Beautician",
    location: "Qatar",
    image: "/beautician.jpg?height=400&width=600",
    salary: "QAR 1000 + Allowances",
    category: "Beauty",
    requirements: "Valid Passport, Good Conduct, Beauty Certificate",
    type: "Full-time",
    gender: "Female",
    forHiring: true,
  },
  {
    id: 7,
    title: "Home Teacher",
    location: "Qatar",
    image: "/teacher.jpg?height=400&width=600",
    salary: "QAR 1000 + Allowances",
    category: "Education",
    requirements: "Valid Passport, Good Conduct, Teaching Certificate",
    type: "Full-time",
    gender: "Female",
    forHiring: true,
  },
  {
    id: 8,
    title: "House Maid",
    location: "Qatar",
    image: "/maid.jpg?height=400&width=600",
    salary: "QAR 1000 + Allowances",
    category: "Domestic",
    requirements: "Valid Passport, Good Conduct",
    type: "Full-time",
    gender: "Female",
    forHiring: true,
  },
]

export default function JobsPage() {
  const [openJobId, setOpenJobId] = useState<number | null>(null)

  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Job Opportunities</h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover exciting career opportunities in Qatar with competitive packages and benefits
          </p>
        </div>
        <Button variant="outline" className="mt-4 md:mt-0">
          <Filter className="mr-2 h-4 w-4" />
          Filter Jobs
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.map((job) => (
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
                      View Details
                      <ChevronDown className={`h-4 w-4 transition-transform ${openJobId === job.id ? 'transform rotate-180' : ''}`} />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 space-y-4">
                    <div className="text-sm">
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {job.requirements.split(', ').map((req, index) => (
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
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Apply Now
                    </Button>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
