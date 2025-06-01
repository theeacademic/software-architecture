import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Clock, User, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | JCM Heights",
  description: "Explore insights about recruitment, career development, and staffing solutions in the Middle East",
}

const blogPosts = [
  {
    id: 1,
    title: "The Future of Recruitment in the Middle East",
    excerpt:
      "How digital transformation and AI are revolutionizing the recruitment landscape in the Middle East job market.",
    image: "/placeholder.svg?height=600&width=800",
    date: "April 15, 2023",
    readTime: "8 min read",
    author: "Sarah Johnson",
    category: "Recruitment",
    featured: true,
  },
  {
    id: 2,
    title: "Top In-Demand Skills in UAE 2023",
    excerpt: "Discover the most sought-after skills and qualifications that employers are looking for in the UAE market.",
    image: "/placeholder.svg?height=600&width=800",
    date: "April 10, 2023",
    readTime: "6 min read",
    author: "Michael Chen",
    category: "Career Development",
    featured: false,
  },
  {
    id: 3,
    title: "Navigating the Middle East Job Market",
    excerpt:
      "A comprehensive guide to understanding the job market dynamics and opportunities across different industries in the Middle East.",
    image: "/placeholder.svg?height=600&width=800",
    date: "April 5, 2023",
    readTime: "10 min read",
    author: "Elena Rodriguez",
    category: "Job Market",
    featured: false,
  },
  {
    id: 4,
    title: "Healthcare Staffing Trends in the UAE",
    excerpt: "Exploring the growing demand for healthcare professionals and the latest trends in medical recruitment.",
    image: "/placeholder.svg?height=600&width=800",
    date: "March 28, 2023",
    readTime: "7 min read",
    author: "Alex Kim",
    category: "Healthcare",
    featured: false,
  },
  {
    id: 5,
    title: "Construction & Engineering Jobs in Saudi Arabia",
    excerpt: "Essential insights for professionals looking to build their career in the booming construction sector.",
    image: "/placeholder.svg?height=600&width=800",
    date: "March 20, 2023",
    readTime: "9 min read",
    author: "Olivia Bennett",
    category: "Engineering",
    featured: false,
  },
  {
    id: 6,
    title: "Behind the Scenes: The Making of JCM Heights",
    excerpt: "The story of how JCM Heights became a leading recruitment agency in the Middle East.",
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
        <h1 className="text-4xl font-bold mb-4">JCM Heights Blog</h1>
        <p className="text-xl text-muted-foreground">Insights, trends, and opportunities in Middle East recruitment</p>
      </div>

      {/* Featured Posts */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-none shadow-lg">
              <div className="relative h-64 w-full">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
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
                <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
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
                    className="p-0 h-auto font-medium text-blue-500 hover:text-blue-600 hover:bg-transparent"
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
      <div className="mt-16 bg-blue-50 p-8 rounded-lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Stay updated with the latest job opportunities, recruitment trends, and career insights in the Middle East.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button className="bg-blue-500 hover:bg-blue-600">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
