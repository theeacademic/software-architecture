import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, ArrowRight } from "lucide-react"

const galleries = [
  {
    id: 1,
    name: "Modern Art Gallery",
    image: "/home5.jpg?height=400&width=600",
    location: "New York, USA",
    exhibitionCount: 12,
    currentExhibition: "Abstract Expressions",
    exhibitionDate: "May 15 - June 30, 2023",
    featured: true,
  },
  {
    id: 2,
    name: "Contemporary Space",
    image: "/home6.jpg?height=400&width=600",
    location: "London, UK",
    exhibitionCount: 8,
    currentExhibition: "Digital Frontiers",
    exhibitionDate: "June 1 - July 15, 2023",
    featured: false,
  },
  {
    id: 3,
    name: "Impressionist Collection",
    image: "/home7.jpg?height=400&width=600",
    location: "Paris, France",
    exhibitionCount: 15,
    currentExhibition: "Light & Color",
    exhibitionDate: "April 10 - May 25, 2023",
    featured: true,
  },
  {
    id: 4,
    name: "Sculpture Garden",
    image: "/home8.jpg?height=400&width=600",
    location: "Barcelona, Spain",
    exhibitionCount: 6,
    currentExhibition: "Forms in Nature",
    exhibitionDate: "May 5 - June 20, 2023",
    featured: false,
  },
]

const FeaturedGalleries = () => {
  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Featured Galleries</h2>
          <p className="text-muted-foreground max-w-2xl">
            Explore our curated selection of top art galleries from around the world
          </p>
        </div>
        <Button variant="outline" className="mt-4 md:mt-0">
          <Link href="/galleries" className="flex items-center">
            View All Galleries
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

export default FeaturedGalleries
