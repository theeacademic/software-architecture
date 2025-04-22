"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X, User, LogIn } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Galleries", href: "/galleries" },
    { name: "Artworks", href: "/artworks" },
    { name: "Artists", href: "/artists" },
    { name: "Events", href: "/events" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-art-purple via-art-pink to-art-blue">
              <div className="absolute inset-0.5 rounded-full bg-white"></div>
              <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-art-purple via-art-pink to-art-blue"></div>
            </div>
            <span className="hidden font-bold text-xl sm:inline-block">
              Art<span className="text-art-purple">Bunifu</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {isSearchOpen ? (
            <div className="flex items-center gap-2">
              <Input type="search" placeholder="Search galleries, art..." className="w-[200px]" autoFocus />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
            <span className="sr-only">Account</span>
          </Button>
          <Button>
            <Link href="/auth/sign-in" className="flex items-center">
              <LogIn className="mr-2 h-4 w-4" /> Sign In
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="container py-2 md:hidden">
          <Input type="search" placeholder="Search galleries, art..." className="w-full" autoFocus />
        </div>
      )}

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-muted-foreground",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t">
              <Button variant="outline" className="justify-start">
                <User className="mr-2 h-4 w-4" /> Account
              </Button>
              <Button className="justify-start">
                <Link href="/auth/sign-in" className="flex items-center w-full">
                  <LogIn className="mr-2 h-4 w-4" /> Sign In
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
