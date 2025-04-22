import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Clock, User, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | ArtBunifu",
  description: "Explore articles about art, galleries, and the creative world",
}

const blogPosts = [
  {
    id: 1,
    title: "The Role of AI in Transforming Art Discovery",
    excerpt:
      "How artificial intelligence is revolutionizing the way we discover and appreciate art in the digital age.",
    image: "/placeholder.svg?height=600&width=800",
    date: "April 15, 2023",
    readTime: "8 min read",
    author: "Sarah Johnson",
    category: "Technology",
    featured: true,
  },
  {
    id: 2,
    title: "Emerging Art Trends in 2023",
    excerpt: "A look at the most influential and innovative art trends shaping the creative landscape this year.",
    image: "/placeholder.svg?height=600&width=800",
    date: "April 10, 2023",
    readTime: "6 min read",
    author: "Michael Chen",
    category: "Art Trends",
    featured: false,
  },
  {
    id: 3,
    title: "Navigating the World of Art Galleries",
    excerpt:
      "A comprehensive guide to understanding different types of galleries and how to make the most of your visits.",
    image: "/placeholder.svg?height=600&width=800",
    date: "April 5, 2023",
    readTime: "10 min read",
    author: "Elena Rodriguez",
    category: "Galleries",
    featured: false,
  },
  {
    id: 4,
    title: "The Intersection of Art and Technology",
    excerpt: "Exploring how digital tools and platforms are changing the way artists create and share their work.",
    image: "/placeholder.svg?height=600&width=800",
    date: "March 28, 2023",
    readTime: "7 min read",
    author: "Alex Kim",
    category: "Digital Art",
    featured: false,
  },
  {
    id: 5,
    title: "Collecting Art: A Beginner's Guide",
    excerpt: "Essential tips and insights for those looking to start their journey as art collectors.",
    image: "/placeholder.svg?height=600&width=800",
    date: "March 20, 2023",
    readTime: "9 min read",
    author: "Olivia Bennett",
    category: "Collecting",
    featured: false,
  },
  {
    id: 6,
    title: "Behind the Scenes: The Making of ArtBunifu",
    excerpt: "The story of how ArtBunifu was created to bridge the gap between art lovers, galleries, and artists.",
    image: "/placeholder.svg?height=600&width=800",
    date: "March 15, 2023",
    readTime: "12 min read",
    author: "David Wilson",
    category: "Company News",
    featured: true,
  },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">ArtBunifu Blog</h1>
        <p className="text-xl text-muted-foreground">Insights, stories, and perspectives from the world of art</p>
      </div>

      {/* Featured Posts */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-none shadow-lg">
              <div className="relative h-64 w-full">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-art-purple text-white px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.readTime}</span>
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`}>
                  <Button variant="outline" className="w-full">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Regular Posts */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-none shadow-md">
              <div className="relative h-48 w-full">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute top-3 right-3 bg-art-purple text-white px-2 py-0.5 rounded-full text-xs font-medium">
                  {post.category}
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center text-xs text-muted-foreground mb-2">
                  <CalendarDays className="h-3 w-3 mr-1" />
                  <span className="mr-3">{post.date}</span>
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto font-medium text-art-purple hover:text-art-purple/90 hover:bg-transparent"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-muted/30 p-8 rounded-lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Stay updated with the latest articles, art trends, and exclusive content delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button className="bg-art-purple hover:bg-art-purple/90">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
