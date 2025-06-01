import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CalendarDays, Clock, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Blog Post | JCM Heights",
  description: "Read our latest blog post about recruitment and staffing solutions",
}

// This would typically come from a database or CMS
const blogPosts = [
  {
    id: "1",
    title: "Job Opportunities in Qatar: A Comprehensive Guide",
    content: `
      <p>Qatar's growing economy continues to create numerous employment opportunities across various sectors. At JCM Heights, we're committed to connecting qualified professionals with these opportunities, ensuring a smooth recruitment process for both employers and job seekers.</p>
      
      <h2>Male Job Opportunities</h2>
      
      <p>We currently have several positions available for male candidates in Qatar:</p>
      
      <ul>
        <li>Security Personnel (QAR 1600-1800)</li>
        <li>Cleaners</li>
        <li>Company Helpers</li>
        <li>Lifeguards</li>
        <li>Firewatchers</li>
        <li>Baristas</li>
        <li>Petrol Attendants</li>
        <li>Mechanical Helpers</li>
        <li>Technicians</li>
      </ul>
      
      <h2>Female Job Opportunities</h2>
      
      <p>For female candidates, we offer the following positions:</p>
      
      <ul>
        <li>Security Personnel</li>
        <li>Cleaners</li>
        <li>Baristas</li>
        <li>Beauticians</li>
        <li>Home Teachers</li>
        <li>House-to-House Sales Representatives</li>
        <li>House Maids</li>
      </ul>
      
      <h2>General Requirements</h2>
      
      <p>All candidates must meet the following requirements:</p>
      
      <ul>
        <li>Valid Passport</li>
        <li>CV with Introduction Video and Full Photo</li>
        <li>KCSE Certificate</li>
        <li>Certificate of Good Conduct</li>
        <li>COVID-19 Vaccination Certificate</li>
        <li>Yellow Fever Vaccination Certificate</li>
        <li>Medical Examination (QAR 6500)</li>
      </ul>
      
      <h2>Compensation Package</h2>
      
      <p>Our standard compensation package includes:</p>
      
      <ul>
        <li>Basic Salary: QAR 1000</li>
        <li>Food Allowance: QAR 300</li>
        <li>Overtime: QAR 300-500</li>
        <li>Working Hours: 8-12 hours per day</li>
        <li>Commission: Applicable based on position</li>
      </ul>
      
      <h2>Application Process</h2>
      
      <p>To apply for any of these positions, please submit the following documents to jonniemwasn@gmail.com:</p>
      
      <ul>
        <li>Updated CV with recent photograph</li>
        <li>Introduction video (2-3 minutes)</li>
        <li>Scanned copies of all required certificates</li>
        <li>Contact information for references</li>
      </ul>
      
      <h2>Why Choose JCM Heights?</h2>
      
      <p>At JCM Heights, we understand the challenges of international recruitment. Our team provides comprehensive support throughout the entire process, from initial application to successful placement. We ensure all legal requirements are met and assist with visa processing, medical examinations, and travel arrangements.</p>
      
      <p>Our commitment to excellence and our extensive network of employers in Qatar make us the preferred recruitment partner for both job seekers and employers. We maintain high standards of professionalism and integrity in all our recruitment processes.</p>
      
      <h2>Conclusion</h2>
      
      <p>Qatar's job market offers excellent opportunities for both male and female professionals. With competitive compensation packages and a supportive work environment, these positions provide a solid foundation for career growth in the Middle East.</p>
      
      <p>If you're interested in any of these positions or would like to learn more about opportunities in Qatar, please contact us at jonniemwasn@gmail.com. Our recruitment team is ready to assist you in finding the perfect match for your skills and career goals.</p>
    `,
    image: "/placeholder.svg?height=800&width=1200",
    date: "April 15, 2023",
    readTime: "8 min read",
    author: {
      name: "Sarah Johnson",
      role: "Head of Recruitment",
      image: "/placeholder.svg?height=200&width=200",
    },
    category: "Recruitment",
    tags: ["Qatar", "Job Opportunities", "Middle East", "Career Development"],
    relatedPosts: [2, 4, 6],
  },
  {
    id: "6",
    title: "Behind the Scenes: The Making of ArtBunifu",
    content: `
      <p>The journey of ArtBunifu began with a simple observation: despite the digital revolution transforming most industries, the art world remained surprisingly fragmented and inaccessible to many. This realization sparked the idea for a platform that would bridge the gap between art lovers, galleries, and artists using innovative technology.</p>
      
      <h2>The Vision</h2>
      
      <p>ArtBunifu was conceived as more than just another art marketplace or gallery directory. Our vision was to create a comprehensive ecosystem where technology enhances the art experience rather than replacing it. We wanted to build a platform that would democratize access to art while respecting the unique value that galleries, curators, and artists bring to the cultural landscape.</p>
      
      <p>From the beginning, we recognized that the art world thrives on personal connections, stories, and experiences. Our challenge was to preserve these essential human elements while leveraging technology to remove barriers and create new opportunities for discovery and engagement.</p>
      
      <h2>Building the Team</h2>
      
      <p>To bring this vision to life, we assembled a diverse team of art enthusiasts, technology experts, and industry veterans. Each team member brought unique perspectives and skills, united by a shared passion for art and innovation.</p>
      
      <p>Our development process began with extensive research and conversations with stakeholders across the art ecosystem. We interviewed gallery owners, artists, collectors, and casual art enthusiasts to understand their needs, pain points, and aspirations. These insights shaped our approach and helped us prioritize features that would deliver the most value.</p>
      
      <h2>Technological Challenges</h2>
      
      <p>One of our biggest challenges was developing the AI chatbot that would serve as a knowledgeable art consultant for our users. We wanted to create an assistant that could provide personalized recommendations, answer questions about art history and techniques, and guide users through the platform in a natural, conversational way.</p>
      
      <p>This required not only sophisticated natural language processing capabilities but also a deep understanding of art. We trained our AI on a vast dataset of art historical texts, exhibition catalogs, artist biographies, and critical essays. We also collaborated with art historians and curators to ensure the accuracy and nuance of the information provided.</p>
      
      <h2>User-Centered Design</h2>
      
      <p>Throughout the development process, we maintained a relentless focus on user experience. We conducted multiple rounds of usability testing, iterating on our designs based on feedback from real users. Our goal was to create an interface that would be intuitive for newcomers while offering depth and sophistication for experienced art professionals.</p>
      
      <p>We paid particular attention to the visual presentation of artwork on the platform, ensuring that digital reproductions would do justice to the original pieces. This involved developing custom image processing techniques and display options that respect the intentions of the artists and the unique characteristics of different mediums.</p>
      
      <h2>Launch and Beyond</h2>
      
      <p>After months of development, testing, and refinement, we launched ArtBunifu to the public in early 2022. The response exceeded our expectations, with users from around the world embracing the platform and providing valuable feedback for continued improvement.</p>
      
      <p>Today, ArtBunifu continues to evolve based on the needs and suggestions of our community. We're constantly adding new features, expanding our gallery and artist partnerships, and enhancing our AI capabilities to provide an ever more valuable service.</p>
      
      <h2>Looking Forward</h2>
      
      <p>As we look to the future, we remain committed to our founding vision of making art more accessible while preserving its essential human elements. We're excited about the possibilities that emerging technologies like augmented reality, blockchain, and advanced AI will bring to the art world, and we're dedicated to harnessing these innovations in service of artists, galleries, and art lovers everywhere.</p>
      
      <p>The making of ArtBunifu is an ongoing story, and we invite you to be part of it. Whether you're an artist, gallery owner, collector, or simply someone who appreciates beauty and creativity, there's a place for you in our community.</p>
    `,
    image: "/placeholder.svg?height=800&width=1200",
    date: "March 15, 2023",
    readTime: "12 min read",
    author: {
      name: "David Wilson",
      role: "Head of Partnerships",
      image: "/placeholder.svg?height=200&width=200",
    },
    category: "Company News",
    tags: ["ArtBunifu", "Startup Story", "Art Platform", "Innovation"],
    relatedPosts: [1, 3, 5],
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id === params.id)

  if (!post) {
    notFound()
  }

  // Get related posts
  const relatedPosts = post.relatedPosts
    ? post.relatedPosts.map((id) => blogPosts.find((post) => post.id === id.toString())).filter(Boolean)
    : []

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="bg-art-purple/10 text-art-purple px-3 py-1 rounded-full font-medium">{post.category}</span>
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-1" />
              <span className="mr-4">{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

          <div className="flex items-center gap-4 mb-8">
            <Avatar className="h-12 w-12 border-2 border-muted">
              <AvatarImage src={post.author.image || "/placeholder.svg"} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{post.author.name}</div>
              <div className="text-sm text-muted-foreground">{post.author.role}</div>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>

        <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="border-t border-b py-6 mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-muted px-3 py-1 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Share this article:</div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Share on Facebook</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Share on Twitter</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">Share on LinkedIn</span>
              </Button>
            </div>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Card key={post?.id} className="overflow-hidden border-none shadow-md">
                  <div className="relative h-40 w-full">
                    <Image src={post?.image || ""} alt={post?.title || ""} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2">{post?.title}</h3>
                    <Link href={`/blog/${post?.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 h-auto font-medium text-art-purple hover:text-art-purple/90 hover:bg-transparent"
                      >
                        Read Article
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
