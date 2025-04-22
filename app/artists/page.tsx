import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Filter, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const artists = [
  {
    id: 1,
    name: "Elena Rodriguez",
    image: "/placeholder.svg?height=400&width=400",
    location: "Barcelona, Spain",
    specialty: "Abstract Painting",
    bio: "Contemporary artist known for vibrant abstract compositions that explore themes of emotion and movement.",
    featured: true,
    artworks: 24,
    exhibitions: 12,
  },
  {
    id: 2,
    name: "Marcus Chen",
    image: "/placeholder.svg?height=400&width=400",
    location: "New York, USA",
    specialty: "Urban Landscapes",
    bio: "Specializes in realistic urban landscapes that capture the energy and architecture of modern cities.",
    featured: false,
    artworks: 18,
    exhibitions: 8,
  },
  {
    id: 3,
    name: "Sophie Laurent",
    image: "/placeholder.svg?height=400&width=400",
    location: "Paris, France",
    specialty: "Mixed Media",
    bio: "Experimental artist combining traditional painting techniques with digital elements and found objects.",
    featured: true,
    artworks: 32,
    exhibitions: 15,
  },
  {
    id: 4,
    name: "Alex Kim",
    image: "/placeholder.svg?height=400&width=400",
    location: "Seoul, South Korea",
    specialty: "Digital Art",
    bio: "Digital artist pushing the boundaries of technology and art through immersive and interactive experiences.",
    featured: false,
    artworks: 40,
    exhibitions: 10,
  },
  {
    id: 5,
    name: "Olivia Bennett",
    image: "/placeholder.svg?height=400&width=400",
    location: "London, UK",
    specialty: "Watercolor",
    bio: "Watercolor specialist creating delicate natural scenes inspired by botanical studies and landscapes.",
    featured: true,
    artworks: 28,
    exhibitions: 9,
  },
  {
    id: 6,
    name: "Carlos Mendez",
    image: "/placeholder.svg?height=400&width=400",
    location: "Mexico City, Mexico",
    specialty: "Sculpture",
    bio: "Sculptor working primarily in bronze and stone, exploring themes of human connection and cultural identity.",
    featured: false,
    artworks: 15,
    exhibitions: 7,
  },
  {
    id: 7,
    name: "Aisha Johnson",
    image: "/placeholder.svg?height=400&width=400",
    location: "Chicago, USA",
    specialty: "Contemporary Painting",
    bio: "Contemporary painter whose work addresses social issues through bold colors and symbolic imagery.",
    featured: true,
    artworks: 22,
    exhibitions: 11,
  },
  {
    id: 8,
    name: "Thomas Wright",
    image: "/placeholder.svg?height=400&width=400",
    location: "Sydney, Australia",
    specialty: "Photography",
    bio: "Fine art photographer documenting natural landscapes and environmental changes across continents.",
    featured: false,
    artworks: 45,
    exhibitions: 14,
  },
]

export default function ArtistsPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Artists</h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover talented artists from around the world showcasing their unique styles and visions
          </p>
        </div>
        <Button variant="outline" className="mt-4 md:mt-0">
          <Filter className="mr-2 h-4 w-4" />
          Filter Artists
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {artists.map((artist) => (
          <Card key={artist.id} className="gallery-card overflow-hidden border-none shadow-md">
            <div className="relative p-6 flex flex-col items-center">
              <Avatar className="h-32 w-32 mb-4 border-4 border-muted">
                <AvatarImage src={artist.image} alt={artist.name} />
                <AvatarFallback>{artist.name.charAt(0)}</AvatarFallback>
              </Avatar>

              {artist.featured && (
                <Badge className="absolute top-4 right-4 bg-art-purple hover:bg-art-purple/90">Featured</Badge>
              )}

              <h3 className="font-bold text-lg text-center mb-1">{artist.name}</h3>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <MapPin className="h-3 w-3 mr-1" />
                {artist.location}
              </div>
              <Badge variant="outline" className="mb-3">
                {artist.specialty}
              </Badge>
              <p className="text-sm text-muted-foreground text-center mb-4 line-clamp-3">{artist.bio}</p>

              <div className="flex justify-between w-full text-sm text-muted-foreground mb-4">
                <span>{artist.artworks} Artworks</span>
                <span>{artist.exhibitions} Exhibitions</span>
              </div>

              <div className="w-full">
                <Link href={`/artists/${artist.id}`}>
                  <Button variant="outline" className="w-full">
                    View Profile
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
