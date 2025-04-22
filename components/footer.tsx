import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-art-purple via-art-pink to-art-blue">
                <div className="absolute inset-0.5 rounded-full bg-white"></div>
                <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-art-purple via-art-pink to-art-blue"></div>
              </div>
              <span className="font-bold text-xl">
                Art<span className="text-art-purple">Bunifu</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Connecting art lovers with galleries and artists worldwide through an innovative platform.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/galleries" className="text-muted-foreground hover:text-foreground">
                  Galleries
                </Link>
              </li>
              <li>
                <Link href="/artworks" className="text-muted-foreground hover:text-foreground">
                  Artworks
                </Link>
              </li>
              <li>
                <Link href="/artists" className="text-muted-foreground hover:text-foreground">
                  Artists
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-foreground">
                  Events & Exhibitions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Art Blog
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
              Stay updated with the latest art news, exhibitions, and featured artists.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="h-9" />
              <Button size="sm" className="bg-art-purple hover:bg-art-purple/90">
                <Mail className="h-4 w-4 mr-2" /> Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ArtBunifu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
