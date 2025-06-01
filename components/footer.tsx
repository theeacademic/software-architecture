import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300">
                <div className="absolute inset-0.5 rounded-full bg-white"></div>
                <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300"></div>
              </div>
              <span className="font-bold text-xl">
                JCM<span className="text-blue-500">Heights</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Your trusted partner for global recruitment solutions. We connect exceptional talent with leading employers across the Middle East.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://wa.me/254717533144"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
              >
                <MessageCircle className="h-5 w-5" />
                Text us on WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/galleries" className="text-muted-foreground hover:text-foreground">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/artworks" className="text-muted-foreground hover:text-foreground">
                  Job Listings
                </Link>
              </li>
              <li>
                <Link href="/artists" className="text-muted-foreground hover:text-foreground">
                  Career Blog
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Industry News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Subscribe</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with the latest job opportunities and recruitment trends.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="h-9" />
              <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                <Mail className="h-4 w-4 mr-2" /> Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} JCM Heights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
