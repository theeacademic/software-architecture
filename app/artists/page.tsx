import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Filter, ExternalLink, Clock } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Recruitment in the Middle East",
    author: "Sarah Johnson",
    image: "/recruitment.jpg?height=400&width=400",
    date: "April 15, 2023",
    readTime: "8 min read",
    category: "Recruitment",
    excerpt: "Explore the evolving landscape of recruitment in the Middle East, from digital transformation to remote work policies.",
    featured: true,
    tags: ["Middle East", "Recruitment", "Digital Transformation"],
  },
  {
    id: 2,
    title: "Top In-Demand Skills in UAE 2023",
    author: "Michael Chen",
    image: "/skills.jpg?height=400&width=400",
    date: "April 10, 2023",
    readTime: "6 min read",
    category: "Career Development",
    excerpt: "Discover the most sought-after skills in the UAE job market and how to develop them for career advancement.",
    featured: true,
    tags: ["UAE", "Skills", "Career Growth"],
  },
  {
    id: 3,
    title: "Navigating the Middle East Job Market",
    author: "Fatima Al-Mansouri",
    image: "/middle.jpg?height=400&width=400",
    date: "April 5, 2023",
    readTime: "7 min read",
    category: "Job Market",
    excerpt: "A comprehensive guide to understanding and succeeding in the Middle East job market for international professionals.",
    featured: false,
    tags: ["Job Market", "Middle East", "Career Tips"],
  },
  {
    id: 4,
    title: "Healthcare Staffing Trends in Qatar",
    author: "Dr. Ahmed Hassan",
    image: "/healthcare.jpg?height=400&width=400",
    date: "March 28, 2023",
    readTime: "5 min read",
    category: "Healthcare",
    excerpt: "Analysis of current trends and opportunities in Qatar's healthcare staffing sector.",
    featured: true,
    tags: ["Healthcare", "Qatar", "Staffing"],
  },
  {
    id: 5,
    title: "Engineering Opportunities in Dubai",
    author: "James Wilson",
    image: "/it.jpg?height=400&width=400",
    date: "March 20, 2023",
    readTime: "6 min read",
    category: "Engineering",
    excerpt: "Explore the growing demand for engineering professionals in Dubai's construction and infrastructure sectors.",
    featured: false,
    tags: ["Engineering", "Dubai", "Construction"],
  },
  {
    id: 6,
    title: "Digital Transformation in Middle East Recruitment",
    author: "Layla Mohammed",
    image: "/placeholder.svg?height=400&width=400",
    date: "March 15, 2023",
    readTime: "8 min read",
    category: "Technology",
    excerpt: "How digital technologies are revolutionizing recruitment processes across the Middle East.",
    featured: true,
    tags: ["Digital", "Technology", "Recruitment"],
  },
  {
    id: 7,
    title: "Hospitality Careers in the Gulf",
    author: "Robert Taylor",
    image: "/placeholder.svg?height=400&width=400",
    date: "March 10, 2023",
    readTime: "5 min read",
    category: "Hospitality",
    excerpt: "Career opportunities and growth prospects in the Gulf's booming hospitality industry.",
    featured: false,
    tags: ["Hospitality", "Gulf", "Careers"],
  },
  {
    id: 8,
    title: "IT Sector Growth in Saudi Arabia",
    author: "Nadia Al-Sayed",
    image: "/placeholder.svg?height=400&width=400",
    date: "March 5, 2023",
    readTime: "7 min read",
    category: "Technology",
    excerpt: "Exploring the expanding IT sector and emerging opportunities in Saudi Arabia's Vision 2030.",
    featured: true,
    tags: ["IT", "Saudi Arabia", "Technology"],
  },
]

export default function BlogPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Jobs Blog</h1>
          <p className="text-muted-foreground max-w-2xl">
            Stay informed about the latest trends, opportunities, and insights in the Middle East job market
          </p>
        </div>
        <Button variant="outline" className="mt-4 md:mt-0">
          <Filter className="mr-2 h-4 w-4" />
          Filter Articles
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="blog-card overflow-hidden border-none shadow-md">
            <div className="relative p-6 flex flex-col">
              <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                {post.featured && (
                  <Badge className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700">Featured</Badge>
                )}
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="h-3 w-3" />
                <span>{post.date}</span>
                <Clock className="h-3 w-3 ml-2" />
                <span>{post.readTime}</span>
              </div>

              <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.image} alt={post.author} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{post.author}</span>
              </div>

              <div className="w-full">
                <Link href={`/blog/${post.id}`}>
                  <Button variant="outline" className="w-full">
                    Read Article
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
