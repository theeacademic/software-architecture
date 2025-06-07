import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | JCGM Heights",
  description: "Get in touch with JCGM Heights for your staffing and recruitment needs in the Middle East",
}

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground">Looking for staffing solutions or career opportunities? We're here to help.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card className="border-none shadow-md">
          <CardContent className="pt-6">
            <div className="mb-4 flex justify-center">
              <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                <MapPin className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Our Location</h3>
            <p className="text-muted-foreground text-center">
              Nairobi, Kenya
              <br />
              East Africa
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardContent className="pt-6">
            <div className="mb-4 flex justify-center">
              <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                <Phone className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Phone</h3>
            <p className="text-muted-foreground text-center">
              Recruitment: +971 4 XXX XXXX
              <br />
              Client Services: +971 4 XXX XXXX
              <br />
              Career Support: +971 4 XXX XXXX
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardContent className="pt-6">
            <div className="mb-4 flex justify-center">
              <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                <Mail className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Email</h3>
            <p className="text-muted-foreground text-center">
              Recruitment: careers@boldheights.com
              <br />
              Clients: clients@boldheights.com
              <br />
              Support: support@boldheights.com
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="How can we help you?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Tell us about your staffing needs or career goals..." className="min-h-[150px]" />
            </div>
            <Button className="w-full bg-blue-500 hover:bg-blue-600">Send Message</Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Additional Information</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-blue-500/10 text-blue-500 mt-1">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 8:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 2:00 PM
                  <br />
                  Sunday: Closed
                </p>
      </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-blue-500/10 text-blue-500 mt-1">
                <Users className="h-5 w-5" />
                </div>
              <div>
                <h3 className="font-bold mb-1">Recruitment Support</h3>
                <p className="text-muted-foreground">
                  Our recruitment team is available during business hours to assist with job placements and career guidance. We offer comprehensive support throughout the hiring process.
                </p>
                </div>
                </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-blue-500/10 text-blue-500 mt-1">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Client Services</h3>
                <p className="text-muted-foreground">
                  We provide dedicated support for businesses looking to hire. Our team will help you find the perfect candidates for your organization's needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Network</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Connect with JCGM Heights to stay updated on the latest job opportunities, industry insights, and recruitment trends in the Middle East.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="sm">
            LinkedIn
          </Button>
          <Button variant="outline" size="sm">
            Twitter
          </Button>
          <Button variant="outline" size="sm">
            Facebook
          </Button>
          <Button variant="outline" size="sm">
            Instagram
          </Button>
        </div>
      </div>
    </div>
  )
}
