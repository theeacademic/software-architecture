import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Users, Globe, Award, Heart, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | ArtBunifu",
  description: "Learn about ArtBunifu's mission, vision, and the team behind the platform",
}

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">About ArtBunifu</h1>
        <p className="text-xl text-muted-foreground">
          Connecting art lovers with galleries and artists worldwide through an innovative platform
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            ArtBunifu was founded in 2022 with a simple mission: to make art more accessible to everyone. We believe
            that art has the power to inspire, challenge, and transform lives, but too often it remains confined to
            exclusive spaces.
          </p>
          <p className="text-muted-foreground mb-4">
            Our platform bridges the gap between art galleries, artists, and art enthusiasts, creating a vibrant
            community where creativity thrives. By leveraging technology, including our AI-powered chatbot, we're making
            it easier than ever to discover, appreciate, and acquire art.
          </p>
          <p className="text-muted-foreground">
            Today, ArtBunifu connects thousands of users with hundreds of galleries and artists across the globe, but
            our journey is just beginning. We continue to innovate and expand, driven by our passion for art and
            commitment to our community.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image src="/home.jpg?height=800&width=600" alt="ArtBunifu Team" fill className="object-cover" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-art-purple/10 text-art-purple">
                  <Palette className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Artistic Excellence</h3>
              <p className="text-muted-foreground text-center">
                We celebrate creativity and champion artistic excellence in all its forms, from traditional to
                cutting-edge.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-art-green/10 text-art-green">
                  <Users className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Inclusivity</h3>
              <p className="text-muted-foreground text-center">
                We believe art should be accessible to everyone, regardless of background, location, or experience.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-art-pink/10 text-art-pink">
                  <Globe className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Global Perspective</h3>
              <p className="text-muted-foreground text-center">
                We showcase diverse artistic traditions and perspectives from around the world.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-art-blue/10 text-art-blue">
                  <Award className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Quality</h3>
              <p className="text-muted-foreground text-center">
                We maintain high standards in our curation, ensuring authentic and exceptional art experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-art-yellow/10 text-yellow-500">
                  <Heart className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Community</h3>
              <p className="text-muted-foreground text-center">
                We foster meaningful connections between artists, galleries, collectors, and enthusiasts.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-purple-100 text-purple-500">
                  <Lightbulb className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Innovation</h3>
              <p className="text-muted-foreground text-center">
                We embrace technology to enhance art discovery and appreciation in the digital age.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: "Sarah Johnson", role: "Founder & CEO", image: "/placeholder.svg?height=300&width=300" },
            { name: "Michael Chen", role: "Chief Technology Officer", image: "/placeholder.svg?height=300&width=300" },
            { name: "Elena Rodriguez", role: "Art Director", image: "/placeholder.svg?height=300&width=300" },
            { name: "David Wilson", role: "Head of Partnerships", image: "/placeholder.svg?height=300&width=300" },
            { name: "Aisha Johnson", role: "UX/UI Designer", image: "/placeholder.svg?height=300&width=300" },
            { name: "Thomas Wright", role: "Marketing Director", image: "/placeholder.svg?height=300&width=300" },
            { name: "Sophie Laurent", role: "Content Curator", image: "/placeholder.svg?height=300&width=300" },
            { name: "Carlos Mendez", role: "Community Manager", image: "/placeholder.svg?height=300&width=300" },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-muted/30 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Join Our Journey</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          We're always looking for passionate individuals to join our team. If you love art and technology, and want to
          be part of making art more accessible to everyone, we'd love to hear from you.
        </p>
      </div>
    </div>
  )
}
