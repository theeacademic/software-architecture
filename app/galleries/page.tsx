import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Filter } from "lucide-react"
import Link from "next/link"

const galleries = [
  {
    id: 1,
    name: "Modern Art Gallery",
    image: "/placeholder.svg?height=400&width=600",
    location: "New York, USA",
    exhibitionCount: 12,
    currentExhibition: "Abstract Expressions",
    exhibitionDate: "May 15 - June 30, 2023",
    featured: true,
    description:
      "A leading contemporary art gallery showcasing innovative works from established and emerging artists.",
  },
  {
    id: 2,
    name: "Contemporary Space",
    image: "/placeholder.svg?height=400&width=600",
    location: "London, UK",
    exhibitionCount: 8,
    currentExhibition: "Digital Frontiers",
    exhibitionDate: "June 1 - July 15, 2023",
    featured: false,
    description: "Specializing in digital and new media art, pushing the boundaries of traditional art forms.",
  },
  {
    id: 3,
    name: "Impressionist Collection",
    image: "/placeholder.svg?height=400&width=600",
    location: "Paris, France",
    exhibitionCount: 15,
    currentExhibition: "Light & Color",
    exhibitionDate: "April 10 - May 25, 2023",
    featured: true,
    description: "Housing one of the finest collections of Impressionist and Post-Impressionist masterpieces.",
  },
  {
    id: 4,
    name: "Sculpture Garden",
    image: "/placeholder.svg?height=400&width=600",
    location: "Barcelona, Spain",
    exhibitionCount: 6,
    currentExhibition: "Forms in Nature",
    exhibitionDate: "May 5 - June 20, 2023",
    featured: false,
    description: "An outdoor gallery space dedicated to contemporary sculpture and installation art.",
  },
  {
    id: 5,
    name: "Photography Institute",
    image: "/placeholder.svg?height=400&width=600",
    location: "Berlin, Germany",
    exhibitionCount: 10,
    currentExhibition: "Urban Perspectives",
    exhibitionDate: "June 10 - July 25, 2023",
    featured: true,
    description: "Dedicated to the art of photography, featuring works from renowned photographers worldwide.",
  },
  {
    id: 6,
    name: "Classical Art Museum",
    image: "/placeholder.svg?height=400&width=600",
    location: "Rome, Italy",
    exhibitionCount: 20,
    currentExhibition: "Renaissance Masters",
    exhibitionDate: "May 1 - August 30, 2023",
    featured: false,
    description: "Home to an extensive collection of classical and Renaissance art treasures.",
  },
  {
    id: 7,
    name: "Asian Art Center",
    image: "/placeholder.svg?height=400&width=600",
    location: "Tokyo, Japan",
    exhibitionCount: 9,
    currentExhibition: "Tradition & Innovation",
    exhibitionDate: "April 15 - June 15, 2023",
    featured: true,
    description: "Bridging traditional Asian art forms with contemporary artistic expressions.",
  },
  {
    id: 8,
    name: "Abstract Art Space",
    image: "/placeholder.svg?height=400&width=600",
    location: "Amsterdam, Netherlands",
    exhibitionCount: 7,
    currentExhibition: "Geometric Visions",
    exhibitionDate: "May 20 - July 10, 2023",
    featured: false,
    description: "Focused on abstract and non-representational art from the 20th and 21st centuries.",
  },
]

export default function GalleriesPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Art Galleries</h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore our curated selection of top art galleries from around the world
          </p>
        </div>
        <Button variant="outline" className="mt-4 md:mt-0">
          <Filter className="mr-2 h-4 w-4" />
          Filter Galleries
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleries.map((gallery) => (
          <Card key={gallery.id} className="gallery-card overflow-hidden border-none shadow-md">
            <div className="relative h-48 overflow-hidden">
              <img
                src={gallery.image || "/placeholder.svg"}
                alt={gallery.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              {gallery.featured && (
                <Badge className="absolute top-2 right-2 bg-art-purple hover:bg-art-purple/90">Featured</Badge>
              )}
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">{gallery.name}</h3>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                {gallery.location}
              </div>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{gallery.description}</p>
              <div className="bg-muted/50 p-3 rounded-md mt-3">
                <div className="text-sm font-medium">{gallery.currentExhibition}</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  {gallery.exhibitionDate}
                </div>
              </div>
              <div className="mt-4">
                <Link href={`/galleries/${gallery.id}`}>
                  <Button variant="outline" className="w-full">
                    View Gallery
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
