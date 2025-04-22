"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const SearchSection = () => {
  const [priceRange, setPriceRange] = useState([0, 10000])

  return (
    <div className="container py-12">
      <div className="rounded-xl bg-muted/50 p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Find Your Perfect Art</h2>
          <p className="text-muted-foreground">Search through thousands of artworks from galleries worldwide</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by artist, gallery, or artwork..." className="pl-10" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Select>
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

            <Select>
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
                        onValueChange={(value) => setPriceRange(value)}
                      />
                      <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Availability</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="for-sale" />
                        <label htmlFor="for-sale" className="text-sm">
                          For Sale
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="auction" />
                        <label htmlFor="auction" className="text-sm">
                          Auction
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="exhibition" />
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
                        <Checkbox id="small" />
                        <label htmlFor="small" className="text-sm">
                          Small (under 30cm)
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="medium" />
                        <label htmlFor="medium" className="text-sm">
                          Medium (30-100cm)
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="large" />
                        <label htmlFor="large" className="text-sm">
                          Large (over 100cm)
                        </label>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full">Apply Filters</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Button className="bg-art-purple hover:bg-art-purple/90">Search</Button>
        </div>
      </div>
    </div>
  )
}

export default SearchSection
