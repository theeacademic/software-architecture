import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, FileCheck, Handshake, Building2, MapPin, Calendar, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const staffingSolutions = [
  {
    id: 1,
    name: "Healthcare Staffing",
    image: "/healthcare.jpg",
    location: "Middle East",
    jobCount: 150,
    currentOpenings: "Medical Professionals",
    hiringDate: "Immediate Hiring",
    featured: true,
    description:
      "Connecting qualified healthcare professionals with leading hospitals and medical facilities across the Middle East.",
  },
  {
    id: 2,
    name: "Construction & Engineering",
    image: "/construction.jpg",
    location: "UAE, Saudi Arabia",
    jobCount: 200,
    currentOpenings: "Skilled Workers",
    hiringDate: "Ongoing Recruitment",
    featured: true,
    description: "Providing skilled construction workers and engineers for major infrastructure projects.",
  },
  {
    id: 3,
    name: "Hospitality & Tourism",
    image: "/hospitality.jpg",
    location: "Dubai, Qatar",
    jobCount: 100,
    currentOpenings: "Hotel Staff",
    hiringDate: "Seasonal Hiring",
    featured: true,
    description: "Staffing solutions for luxury hotels and tourism establishments in the Middle East.",
  },
  {
    id: 4,
    name: "IT & Technology",
    image: "/it.jpg",
    location: "UAE, Kuwait",
    jobCount: 80,
    currentOpenings: "Tech Professionals",
    hiringDate: "Continuous Hiring",
    featured: false,
    description: "Connecting IT professionals with leading technology companies in the region.",
  },
]

const recruitmentProcess = [
  {
    id: 1,
    title: "Initial Screening",
    icon: Users,
    description: "Comprehensive evaluation of candidate qualifications and experience",
    color: "blue"
  },
  {
    id: 2,
    title: "Documentation",
    icon: FileCheck,
    description: "Verification of credentials and preparation of required documents",
    color: "orange"
  },
  {
    id: 3,
    title: "Interview & Selection",
    icon: Handshake,
    description: "Matching candidates with employers and conducting interviews",
    color: "blue"
  },
  {
    id: 4,
    title: "Placement & Support",
    icon: Building2,
    description: "Facilitating smooth transition and providing ongoing support",
    color: "orange"
  }
]

const clients = [
  { name: "Client 1", logo: "/clients/client1.png" },
  { name: "Client 2", logo: "/clients/client2.png" },
  { name: "Client 3", logo: "/clients/client3.png" },
  { name: "Client 4", logo: "/clients/client4.png" },
  { name: "Client 5", logo: "/clients/client5.png" },
  { name: "Client 6", logo: "/clients/client6.png" },
]

export default function StaffingPage() {
  return (
    <div className="container py-12">
      {/* Staffing Solutions Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Staffing Solutions</h1>
          <p className="text-muted-foreground max-w-2xl">
            Comprehensive staffing solutions for various industries across the Middle East
          </p>
        </div>
        <Button variant="outline" className="mt-4 md:mt-0">
          <Filter className="mr-2 h-4 w-4" />
          Filter Solutions
        </Button>
      </div>

      <div className="mb-12 max-w-4xl mx-auto text-center">
        <p className="text-lg text-muted-foreground mb-6">
          <span className="font-bold text-foreground">JCM Heights</span> offers employers the assurance of having their workforce needs professionally fulfilled within the shortest time possible. We conduct thorough background checks and provide orientation for all our candidates to ensure they are well-suited for the roles. Our team manages the entire recruitment process and offers support throughout the interview stages to guarantee our clients receive only the best talent.
        </p>
        <p className="text-lg text-muted-foreground">
          At <span className="font-bold text-foreground">JCM Heights</span>, we are deeply committed to delivering exceptional service and maintaining excellence in all that we do. Our partnerships are built on a foundation of genuine integrity and trust.
        </p>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {staffingSolutions.map((solution) => (
            <Card key={solution.id} className="overflow-hidden border-none shadow-md">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={solution.image || "/placeholder.svg"}
                  alt={solution.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {solution.featured && (
                  <Badge className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600">Featured</Badge>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">{solution.name}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {solution.location}
                </div>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{solution.description}</p>
                <div className="bg-muted/50 p-3 rounded-md mt-3">
                  <div className="text-sm font-medium">{solution.currentOpenings}</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    {solution.hiringDate}
                  </div>
                </div>
                <div className="mt-4">
                  <Link href={`/jobs/${solution.id}`}>
                    <Button variant="outline" className="w-full">
                      View Opportunities
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recruitment Process Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Recruitment Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {recruitmentProcess.map((step) => (
            <Card key={step.id} className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className={`p-3 rounded-full bg-${step.color}-500/10 text-${step.color}-500`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-center">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Clients Section */}
      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">Our Trusted Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div key={index} className="relative h-20 w-40 grayscale hover:grayscale-0 transition-all">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
