import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Filter, Clock, Users } from "lucide-react"
import Link from "next/link"

const events = [
  {
    id: 1,
    title: "Abstract Expressions",
    gallery: "Modern Art Gallery",
    image: "/placeholder.svg?height=400&width=600",
    location: "New York, USA",
    startDate: "May 15, 2023",
    endDate: "June 30, 2023",
    time: "10:00 AM - 6:00 PM",
    description:
      "A showcase of contemporary abstract art featuring works from international artists exploring emotion through color and form.",
    featured: true,
    attendees: 120,
  },
  {
    id: 2,
    title: "Digital Frontiers",
    gallery: "Contemporary Space",
    image: "/placeholder.svg?height=400&width=600",
    location: "London, UK",
    startDate: "June 1, 2023",
    endDate: "July 15, 2023",
    time: "11:00 AM - 7:00 PM",
    description:
      "An exhibition exploring the intersection of art and technology, featuring digital installations and interactive experiences.",
    featured: false,
    attendees: 85,
  },
  {
    id: 3,
    title: "Light & Color",
    gallery: "Impressionist Collection",
    image: "/placeholder.svg?height=400&width=600",
    location: "Paris, France",
    startDate: "April 10, 2023",
    endDate: "May 25, 2023",
    time: "9:00 AM - 5:00 PM",
    description:
      "A celebration of Impressionist techniques and their influence on contemporary art practices, featuring rare masterpieces.",
    featured: true,
    attendees: 200,
  },
  {
    id: 4,
    title: "Forms in Nature",
    gallery: "Sculpture Garden",
    image: "/placeholder.svg?height=400&width=600",
    location: "Barcelona, Spain",
    startDate: "May 5, 2023",
    endDate: "June 20, 2023",
    time: "10:00 AM - 8:00 PM",
    description: "An outdoor exhibition of contemporary sculpture inspired by natural forms and environmental themes.",
    featured: false,
    attendees: 150,
  },
  {
    id: 5,
    title: "Urban Perspectives",
    gallery: "Photography Institute",
    image: "/placeholder.svg?height=400&width=600",
    location: "Berlin, Germany",
    startDate: "June 10, 2023",
    endDate: "July 25, 2023",
    time: "12:00 PM - 8:00 PM",
    description: "A photographic exploration of urban landscapes and city life from photographers around the world.",
    featured: true,
    attendees: 90,
  },
  {
    id: 6,
    title: "Renaissance Masters",
    gallery: "Classical Art Museum",
    image: "/placeholder.svg?height=400&width=600",
    location: "Rome, Italy",
    startDate: "May 1, 2023",
    endDate: "August 30, 2023",
    time: "9:00 AM - 6:00 PM",
    description: "A rare exhibition of Renaissance masterpieces, including works on loan from private collections.",
    featured: false,
    attendees: 250,
  },
]

export default function EventsPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Events & Exhibitions</h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover current and upcoming art exhibitions and events worldwide
          </p>
        </div>
        <Button variant="outline" className="mt-4 md:mt-0">
          <Filter className="mr-2 h-4 w-4" />
          Filter Events
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="gallery-card overflow-hidden border-none shadow-md">
            <div className="relative h-48 overflow-hidden">
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              {event.featured && (
                <Badge className="absolute top-2 right-2 bg-art-purple hover:bg-art-purple/90">Featured</Badge>
              )}
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-1">{event.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{event.gallery}</p>

              <div className="space-y-2 mb-3">
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  {event.location}
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  {event.startDate} - {event.endDate}
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  {event.time}
                </div>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  {event.attendees} attending
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.description}</p>

              <div className="mt-4">
                <Link href={`/events/${event.id}`}>
                  <Button variant="outline" className="w-full">
                    View Event
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
