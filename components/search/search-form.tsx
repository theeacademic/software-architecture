"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export function SearchForm() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [artStyle, setArtStyle] = useState("")
  const [medium, setMedium] = useState("")
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [location, setLocation] = useState("")
  const [availability, setAvailability] = useState({
    forSale: false,
    auction: false,
    exhibition: false,
  })
  const [size, setSize] = useState({
    small: false,
    medium: false,
    large: false,
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Build query parameters
    const params = new URLSearchParams()

    if (searchQuery) params.append("q", searchQuery)
    if (artStyle) params.append("style", artStyle)
    if (medium) params.append("medium", medium)
    if (location) params.append("location", location)

    params.append("minPrice", priceRange[0].toString())
    params.append("maxPrice", priceRange[1].toString())

    // Add availability filters
    if (availability.forSale) params.append("forSale", "true")
    if (availability.auction) params.append("auction", "true")
    if (availability.exhibition) params.append("exhibition", "true")

    // Add size filters
    if (size.small) params.append("small", "true")
    if (size.medium) params.append("medium", "true")
    if (size.large) params.append("large", "true")

    // Navigate to search results page
    router.push(`/search?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSearch} className="rounded-xl bg-muted/50 p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Find Your Perfect Art</h2>
        <p className="text-muted-foreground">Search through thousands of artworks from galleries worldwide</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by artist, gallery, or artwork..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Select value={artStyle} onValueChange={setArtStyle}>
            <SelectTrigger>
              <SelectValue placeholder="Art Style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="abstract">Abstract</SelectItem>
              <SelectItem value="contemporary">Contemporary</SelectItem>
              <SelectItem value="impressionism">Impressionism</SelectItem>
              <SelectItem value="realism">Realism</SelectItem>
              <SelectItem value="pop-art">Pop Art</SelectItem>
            </SelectContent>
          </Select>

          <Select value={medium} onValueChange={setMedium}>
            <SelectTrigger>
              <SelectValue placeholder="Medium" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="painting">Painting</SelectItem>
              <SelectItem value="sculpture">Sculpture</SelectItem>
              <SelectItem value="photography">Photography</SelectItem>
              <SelectItem value="digital">Digital</SelectItem>
              <SelectItem value="mixed-media">Mixed Media</SelectItem>
            </SelectContent>
          </Select>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                <Filter className="mr-2 h-4 w-4" />
                More Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Advanced Filters</SheetTitle>
                <SheetDescription>Refine your search with additional filters</SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <div className="space-y-2">
                  <Label>Price Range (USD)</Label>
                  <div className="pt-4">
                    <Slider
                      defaultValue={[0, 10000]}
                      max={10000}
                      step={100}
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value)}
                    />
                    <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Location</Label>
                  <Input placeholder="City, Country" value={location} onChange={(e) => setLocation(e.target.value)} />
                </div>

                <div className="space-y-2">
                  <Label>Availability</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="for-sale"
                        checked={availability.forSale}
                        onCheckedChange={(checked) => setAvailability({ ...availability, forSale: checked as boolean })}
                      />
                      <label htmlFor="for-sale" className="text-sm">
                        For Sale
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="auction"
                        checked={availability.auction}
                        onCheckedChange={(checked) => setAvailability({ ...availability, auction: checked as boolean })}
                      />
                      <label htmlFor="auction" className="text-sm">
                        Auction
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="exhibition"
                        checked={availability.exhibition}
                        onCheckedChange={(checked) =>
                          setAvailability({ ...availability, exhibition: checked as boolean })
                        }
                      />
                      <label htmlFor="exhibition" className="text-sm">
                        Exhibition Only
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Size</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="small"
                        checked={size.small}
                        onCheckedChange={(checked) => setSize({ ...size, small: checked as boolean })}
                      />
                      <label htmlFor="small" className="text-sm">
                        Small (under 30cm)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="medium"
                        checked={size.medium}
                        onCheckedChange={(checked) => setSize({ ...size, medium: checked as boolean })}
                      />
                      <label htmlFor="medium" className="text-sm">
                        Medium (30-100cm)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="large"
                        checked={size.large}
                        onCheckedChange={(checked) => setSize({ ...size, large: checked as boolean })}
                      />
                      <label htmlFor="large" className="text-sm">
                        Large (over 100cm)
                      </label>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full"
                  onClick={() => document.querySelector<HTMLButtonElement>('form button[type="submit"]')?.click()}
                >
                  Apply Filters
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <Button type="submit" className="bg-art-purple hover:bg-art-purple/90">
          Search
        </Button>
      </div>
    </form>
  )
}
