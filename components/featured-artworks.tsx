import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ArrowRight } from "lucide-react"

const artworks = [
  {
    id: 1,
    title: "Abstract Harmony",
    artist: "Elena Rodriguez",
    image: "/home9.jpg?height=400&width=600",
    price: "$2,500",
    medium: "Acrylic on Canvas",
    size: "60 x 80 cm",
    year: 2023,
    gallery: "Modern Art Gallery",
    forSale: true,
  },
  {
    id: 2,
    title: "Urban Reflections",
    artist: "Marcus Chen",
    image: "/home10.jpg?height=400&width=600",
    price: "$1,800",
    medium: "Oil on Canvas",
    size: "50 x 70 cm",
    year: 2022,
    gallery: "Contemporary Space",
    forSale: true,
  },
  {
    id: 3,
    title: "Serenity in Blue",
    artist: "Sophie Laurent",
    image: "/home11.jpg?height=400&width=600",
    price: "$3,200",
    medium: "Mixed Media",
    size: "90 x 120 cm",
    year: 2023,
    gallery: "Impressionist Collection",
    forSale: true,
  },
  {
    id: 4,
    title: "Digital Dreams",
    artist: "Alex Kim",
    image: "/home12.jpg?height=400&width=600",
    price: "$1,500",
    medium: "Digital Art (Limited Print)",
    size: "40 x 60 cm",
    year: 2023,
    gallery: "Contemporary Space",
    forSale: true,
  },
  {
    id: 5,
    title: "Nature's Whisper",
    artist: "Olivia Bennett",
    image: "/home13.jpg?height=400&width=600",
    price: "$2,800",
    medium: "Watercolor",
    size: "45 x 65 cm",
    year: 2022,
    gallery: "Modern Art Gallery",
    forSale: true,
  },
  {
    id: 6,
    title: "Bronze Elegance",
    artist: "Carlos Mendez",
    image: "/home14.jpg?height=400&width=600",
    price: "$4,500",
    medium: "Bronze Sculpture",
    size: "30 x 20 x 15 cm",
    year: 2021,
    gallery: "Sculpture Garden",
    forSale: true,
  },
  {
    id: 7,
    title: "Chromatic Journey",
    artist: "Aisha Johnson",
    image: "/home15.jpg?height=400&width=600",
    price: "$2,200",
    medium: "Acrylic on Canvas",
    size: "70 x 90 cm",
    year: 2023,
    gallery: "Modern Art Gallery",
    forSale: true,
  },
  {
    id: 8,
    title: "Ethereal Light",
    artist: "Thomas Wright",
    image: "/home16.jpg?height=400&width=600",
    price: "$3,800",
    medium: "Oil on Canvas",
    size: "80 x 100 cm",
    year: 2022,
    gallery: "Impressionist Collection",
    forSale: true,
  },
]

const FeaturedArtworks = () => {
  return (
    <div className="bg-muted/30 py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Artworks</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover exceptional pieces from renowned artists and emerging talents
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            <Link href="/artworks" className="flex items-center">
              View All Artworks
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artworks.slice(0, 8).map((artwork) => (
            <Card key={artwork.id} className="art-card overflow-hidden border-none shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={artwork.image || "/placeholder.svg"}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors">
                  <Heart className="h-4 w-4 text-art-pink" />
                </button>
                {artwork.forSale && (
                  <Badge className="absolute bottom-2 left-2 bg-art-green hover:bg-art-green/90">For Sale</Badge>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1 line-clamp-1">{artwork.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{artwork.artist}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="font-medium text-art-purple">{artwork.price}</span>
                  <span className="text-xs text-muted-foreground">{artwork.medium}</span>
                </div>
                <div className="mt-4">
                  <Link href={`/artworks/${artwork.id}`}>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedArtworks
