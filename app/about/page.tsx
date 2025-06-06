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
        <h1 className="text-4xl font-bold mb-4">About JCM Heights</h1>
        <p className="text-xl text-muted-foreground">
          {/* Add your about text here */}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
          JCM Heights was established in 2012 with a clear mission: to open global employment doors for skilled Kenyan professionals. We believe that meaningful work can empower individuals, transform families, and contribute to national growth—but access to international job opportunities has often been limited and complex.
          </p>
          <p className="text-muted-foreground mb-4">
          Our platform bridges that gap by connecting Kenyan talent with trusted employers across the Middle East and beyond. With our government accreditation and deep understanding of the recruitment landscape, we make the process smooth, transparent, and efficient for both job seekers and employers.
          </p>
          <p className="text-muted-foreground">
          Today, JCM Heights has helped thousands of individuals secure jobs abroad and continues to grow as a reliable partner in overseas employment. Our journey is far from over—we're constantly evolving to serve our clients better and fulfill our vision of transforming lives through global work opportunities.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image src="/bold 1.jpg?height=800&width=600" alt="ArtBunifu Team" fill className="object-cover" />
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
              <h3 className="text-xl font-bold text-center mb-2">Professional Excellence</h3>
              <p className="text-muted-foreground text-center">
              We uphold the highest standards in recruitment by delivering reliable, ethical, and top-quality staffing solutions.
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
              <h3 className="text-xl font-bold text-center mb-2">Accessibility</h3>
              <p className="text-muted-foreground text-center">
              We believe global job opportunities should be within reach for all qualified individuals, regardless of their background or circumstances.
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
              <h3 className="text-xl font-bold text-center mb-2">Global Reach</h3>
              <p className="text-muted-foreground text-center">
              We connect Kenyan talent with employers across the Middle East and beyond, embracing a worldwide employment perspective.
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
              <h3 className="text-xl font-bold text-center mb-2">Integrity</h3>
              <p className="text-muted-foreground text-center">
              We conduct all our operations with honesty, transparency, and a strong commitment to ethical practices.
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
              <h3 className="text-xl font-bold text-center mb-2">Empowerment</h3>
              <p className="text-muted-foreground text-center">
              We are dedicated to improving lives by providing life-changing employment opportunities and supporting career growth.
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
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Jonas Mwangi", role: "Chief Executive Officer", image: "/jonas.jpeg" },
            { name: "Marketing Director", role: "Marketing Director", image: "/jonas.jpeg" },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
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
