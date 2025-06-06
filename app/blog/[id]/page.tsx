"use client";

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CalendarDays, Clock, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { useAuth } from "@/app/AuthContext"
import { useRouter } from "next/navigation"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id === params.id)
  const { user } = useAuth()
  const router = useRouter()

  if (!user) {
    // Redirect to sign-in if not logged in
    router.push('/auth/sign-in')
    return null // Or a loading spinner
  }

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

        {/* Apply Button (Visible to logged-in users) */}
        <div className="mb-12">
          <Button size="lg" className="w-full">Apply for this Job</Button>
        </div>

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
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto font-medium text-art-purple hover:text-art-purple/90 hover:bg-transparent"
                      disabled
                    >
                      Read Article
                    </Button>
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
