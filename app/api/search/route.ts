import { NextResponse } from "next/server"
import { galleries } from "@/data/galleries"
import { artworks } from "@/data/artworks"
import { artists } from "@/data/artists"
import { events } from "@/data/events"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")?.toLowerCase() || ""
    const type = searchParams.get("type") || "all"
    const style = searchParams.get("style") || ""
    const medium = searchParams.get("medium") || ""
    const minPrice = Number(searchParams.get("minPrice") || 0)
    const maxPrice = Number(searchParams.get("maxPrice") || 1000000)
    const location = searchParams.get("location") || ""

    const results: any = {
      galleries: [],
      artworks: [],
      artists: [],
      events: [],
    }

    // Search galleries
    if (type === "all" || type === "galleries") {
      results.galleries = galleries.filter((gallery) => {
        const matchesQuery = query
          ? gallery.name.toLowerCase().includes(query) ||
            gallery.location.toLowerCase().includes(query) ||
            gallery.description.toLowerCase().includes(query)
          : true

        const matchesLocation = location ? gallery.location.toLowerCase().includes(location.toLowerCase()) : true

        return matchesQuery && matchesLocation
      })
    }

    // Search artworks
    if (type === "all" || type === "artworks") {
      results.artworks = artworks.filter((artwork) => {
        const matchesQuery = query
          ? artwork.title.toLowerCase().includes(query) ||
            artwork.artist.toLowerCase().includes(query) ||
            artwork.medium.toLowerCase().includes(query)
          : true

        const matchesStyle = style ? artwork.style?.toLowerCase().includes(style.toLowerCase()) : true

        const matchesMedium = medium ? artwork.medium.toLowerCase().includes(medium.toLowerCase()) : true

        const price = Number.parseInt(artwork.price.replace(/[^0-9]/g, ""))
        const matchesPrice = !isNaN(price) ? price >= minPrice && price <= maxPrice : true

        return matchesQuery && matchesStyle && matchesMedium && matchesPrice
      })
    }

    // Search artists
    if (type === "all" || type === "artists") {
      results.artists = artists.filter((artist) => {
        const matchesQuery = query
          ? artist.name.toLowerCase().includes(query) ||
            artist.specialty.toLowerCase().includes(query) ||
            artist.bio.toLowerCase().includes(query)
          : true

        const matchesLocation = location ? artist.location.toLowerCase().includes(location.toLowerCase()) : true

        return matchesQuery && matchesLocation
      })
    }

    // Search events
    if (type === "all" || type === "events") {
      results.events = events.filter((event) => {
        const matchesQuery = query
          ? event.title.toLowerCase().includes(query) ||
            event.gallery.toLowerCase().includes(query) ||
            event.description.toLowerCase().includes(query)
          : true

        const matchesLocation = location ? event.location.toLowerCase().includes(location.toLowerCase()) : true

        return matchesQuery && matchesLocation
      })
    }

    // If type is specific, just return that type's results
    if (type !== "all") {
      return NextResponse.json(results[type])
    }

    return NextResponse.json(results)
  } catch (error) {
    console.error("Error searching:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
