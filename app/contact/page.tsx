import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | JCGM",
  description: "Get in touch with the JCGM team for inquiries, support, or partnerships",
}

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground">Have questions or feedback? We'd love to hear from you.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card className="border-none shadow-md">
          <CardContent className="pt-6">
            <div className="mb-4 flex justify-center">
              <div className="p-3 rounded-full bg-art-purple/10 text-art-purple">
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
              <div className="p-3 rounded-full bg-art-green/10 text-art-green">
                <Phone className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Phone</h3>
            <p className="text-muted-foreground text-center">
              General: +254 717 533 144
              <br />
              Support: +254 717 533 144
              <br />
              Partnerships: +254 717 533 144
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardContent className="pt-6">
            <div className="mb-4 flex justify-center">
              <div className="p-3 rounded-full bg-art-pink/10 text-art-pink">
                <Mail className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Email</h3>
            <p className="text-muted-foreground text-center">
              General: jonas@gmail.com
              <br />
              Support: jonas@gmail.com
              <br />
              Partnerships: jonas@gmail.com
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
              <Textarea id="message" placeholder="Tell us about your inquiry..." className="min-h-[150px]" />
            </div>
            <Button className="w-full bg-art-purple hover:bg-art-purple/90">Send Message</Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Additional Information</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-art-blue/10 text-art-blue mt-1">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-art-yellow/10 text-yellow-500 mt-1">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Live Chat Support</h3>
                <p className="text-muted-foreground">
                  Our live chat support is available during business hours. You can also use our AI chatbot for
                  assistance 24/7.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold mb-4">Find Us</h3>
              <div className="h-[300px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8191673787!2d36.81423037476854!3d-1.281371980253668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d5a0c0c0c1%3A0x0!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1647881234567!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted/30 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Stay connected with JCGM by following us on social media for the latest updates, featured artworks, and
          exclusive events.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="sm">
            Facebook
          </Button>
          <Button variant="outline" size="sm">
            Twitter
          </Button>
          <Button variant="outline" size="sm">
            Instagram
          </Button>
          <Button variant="outline" size="sm">
            LinkedIn
          </Button>
        </div>
      </div>
    </div>
  )
}
