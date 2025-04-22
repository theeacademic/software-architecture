import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SearchForm } from "@/components/search/search-form"
import Link from "next/link"
import Image from "next/image"
import { Heart, MapPin, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Search Results | ArtBunifu",
  description: "Search results for galleries, artworks, and artists",
}

interface SearchParams {
  q?: string
  type?: string
  style?: string
  medium?: string
  minPrice?: string
  maxPrice?: string
  location?: string
  forSale?: string
  auction?: string
  exhibition?: string
  small?: string
  medium?: string
  large?: string
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const query = searchParams.q || ""
  const type = searchParams.type || "all"

  // In a real app, this would be a fetch to your API
  const results = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/search?` +
      new URLSearchParams(searchParams as Record<string, string>).toString(),
    {
      cache: "no-store",
    },
  )
    .then((res) => res.json())
    .catch(() => ({
      galleries: [],
      artworks: [],
      artists: [],
      events: [],
    }))

  const totalResults =
    (results.galleries?.length || 0) +
    (results.artworks?.length || 0) +
    (results.artists?.length || 0) +
    (results.events?.length || 0)

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Search Results</h1>

      <div className="mb-8">
        <SearchForm />
      </div>

      <div className="mb-6">
        <p className="text-muted-foreground">
          {query ? (
            <>
              Showing results for <span className="font-medium text-foreground">"{query}"</span>
            </>
          ) : (
            <>Showing all results</>
          )}
          {totalResults > 0 && ` (${totalResults} results found)`}
        </p>
      </div>

      <Tabs defaultValue={type === "all" ? "all" : type} className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="all">All Results</TabsTrigger>
          <TabsTrigger value="galleries">Galleries</TabsTrigger>
          <TabsTrigger value="artworks">Artworks</TabsTrigger>
          <TabsTrigger value="artists">Artists</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-12">
          {/* Galleries Section */}
          {results.galleries?.length > 0 && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Galleries</h2>
                <Button variant="outline" asChild>
                  <Link href="/search?type=galleries">View All Galleries</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {results.galleries.slice(0, 3).map((gallery: any) => (
                  <Card key={gallery.id} className="gallery-card overflow-hidden border-none shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={gallery.image || "/placeholder.svg"}
                        alt={gallery.name}
                        fill
                        className="object-cover"
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
          )}

          {/* Artworks Section */}
          {results.artworks?.length > 0 && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Artworks</h2>
                <Button variant="outline" asChild>
                  <Link href="/search?type=artworks">View All Artworks</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {results.artworks.slice(0, 4).map((artwork: any) => (
                  <Card key={artwork.id} className="art-card overflow-hidden border-none shadow-md">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={artwork.image || "/placeholder.svg"}
                        alt={artwork.title}
                        fill
                        className="object-cover"
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
          )}

          {/* Artists Section */}
          {results.artists?.length > 0 && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Artists</h2>
                <Button variant="outline" asChild>
                  <Link href="/search?type=artists">View All Artists</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {results.artists.slice(0, 4).map((artist: any) => (
                  <Card key={artist.id} className="overflow-hidden border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center">
                        <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
                          <Image
                            src={artist.image || "/placeholder.svg"}
                            alt={artist.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-lg text-center mb-1">{artist.name}</h3>
                        <Badge variant="outline" className="mb-2">
                          {artist.specialty}
                        </Badge>
                        <p className="text-sm text-muted-foreground text-center mb-4 line-clamp-2">{artist.bio}</p>
                        <Link href={`/artists/${artist.id}`}>
                          <Button variant="outline" size="sm">
                            View Profile
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Events Section */}
          {results.events?.length > 0 && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Events</h2>
                <Button variant="outline" asChild>
                  <Link href="/search?type=events">View All Events</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {results.events.slice(0, 3).map((event: any) => (
                  <Card key={event.id} className="overflow-hidden border-none shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                      {event.featured && (
                        <Badge className="absolute top-2 right-2 bg-art-purple hover:bg-art-purple/90">Featured</Badge>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-1">{event.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{event.gallery}</p>
                      <div className="flex items-center text-sm mb-2">
                        <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm mb-3">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        {event.startDate} - {event.endDate}
                      </div>
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
          )}

          {totalResults === 0 && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">No results found</h2>
              <p className="text-muted-foreground mb-6">
                We couldn't find any matches for your search criteria. Try adjusting your filters or search terms.
              </p>
              <Button className="bg-art-purple hover:bg-art-purple/90" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="galleries">
          {results.galleries?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {results.galleries.map((gallery: any) => (
                <Card key={gallery.id} className="gallery-card overflow-hidden border-none shadow-md">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={gallery.image || "/placeholder.svg"} alt={gallery.name} fill className="object-cover" />
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
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">No galleries found</h2>
              <p className="text-muted-foreground mb-6">
                We couldn't find any galleries matching your search criteria. Try adjusting your filters or search
                terms.
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="artworks">
          {results.artworks?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.artworks.map((artwork: any) => (
                <Card key={artwork.id} className="art-card overflow-hidden border-none shadow-md">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      fill
                      className="object-cover"
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
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">No artworks found</h2>
              <p className="text-muted-foreground mb-6">
                We couldn't find any artworks matching your search criteria. Try adjusting your filters or search terms.
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="artists">
          {results.artists?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {results.artists.map((artist: any) => (
                <Card key={artist.id} className="overflow-hidden border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center">
                      <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
                        <Image
                          src={artist.image || "/placeholder.svg"}
                          alt={artist.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-bold text-lg text-center mb-1">{artist.name}</h3>
                      <Badge variant="outline" className="mb-2">
                        {artist.specialty}
                      </Badge>
                      <p className="text-sm text-muted-foreground text-center mb-4 line-clamp-2">{artist.bio}</p>
                      <Link href={`/artists/${artist.id}`}>
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">No artists found</h2>
              <p className="text-muted-foreground mb-6">
                We couldn't find any artists matching your search criteria. Try adjusting your filters or search terms.
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="events">
          {results.events?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {results.events.map((event: any) => (
                <Card key={event.id} className="overflow-hidden border-none shadow-md">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    {event.featured && (
                      <Badge className="absolute top-2 right-2 bg-art-purple hover:bg-art-purple/90">Featured</Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-1">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{event.gallery}</p>
                    <div className="flex items-center text-sm mb-2">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm mb-3">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      {event.startDate} - {event.endDate}
                    </div>
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
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">No events found</h2>
              <p className="text-muted-foreground mb-6">
                We couldn't find any events matching your search criteria. Try adjusting your filters or search terms.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
