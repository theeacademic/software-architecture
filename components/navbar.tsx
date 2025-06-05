"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, LogIn, LogOut } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { useAuth } from "@/app/AuthContext"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { user, logout } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/galleries" },
    { name: "Jobs", href: "/artworks" },
    { name: "Blog", href: "/artists" },
    { name: "Contact", href: "/events" },
  ]

  const handleLogout = () => {
    logout()
    toast({
      title: "Success",
      description: "Logged out successfully",
    })
    router.push('/auth/sign-in')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Image
                src="/BHA LOGO.png"
                alt="JCM Heights Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="hidden font-bold text-xl sm:inline-block">
              <span className="text-blue-500">JCM</span><span className="text-orange-500">Heights</span>
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
                "text-sm font-medium transition-colors hover:text-orange-500",
                pathname === link.href ? "text-orange-500" : "text-orange-500",
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          {user ? (
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          ) : (
            <Link href="/auth/sign-in">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
              >
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-orange-500",
                  pathname === link.href ? "text-orange-500" : "text-orange-500",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t">
              {user ? (
                <Button 
                  variant="outline" 
                  className="justify-start bg-orange-500 hover:bg-orange-600 text-white"
                  onClick={() => {
                    handleLogout()
                    setIsMenuOpen(false)
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" /> Log Out
                </Button>
              ) : (
                <Button className="justify-start bg-orange-500 hover:bg-orange-600 text-white">
                  <Link href="/auth/sign-in" className="flex items-center w-full">
                    <LogIn className="mr-2 h-4 w-4" /> Sign In
                  </Link>
                </Button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
