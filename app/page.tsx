import Hero from "@/components/hero"
import FeaturedGalleries from "@/components/featured-galleries"
import FeaturedArtworks from "@/components/featured-artworks"
import SearchSection from "@/components/search-section"
import TestimonialSection from "@/components/testimonial-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SearchSection />
      <FeaturedGalleries />
      <FeaturedArtworks />
      <TestimonialSection />
    </div>
  )
}
