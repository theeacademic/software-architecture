import { Button } from "@/components/ui/button"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-background/80">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-blue-300/20"></div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to JCGM HEIGHTS Recruitment <span className="text-blue-500">Agency</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner for global recruitment solutions. We connect exceptional talent with leading employers across the Middle East, ensuring successful placements and long-term partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                <Link href="/galleries">Our Services</Link>
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/artworks">Find Jobs</Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 via-blue-400/80 to-blue-300/80 opacity-90"></div>
            <div className="absolute inset-0 grid grid-cols-2 gap-2 p-4">
              <div className="space-y-2">
                <div className="h-32 rounded-md overflow-hidden">
                  <img
                    src="/bold 1.jpg?height=300&width=300"
                    alt="Healthcare Staffing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-40 rounded-md overflow-hidden">
                  <img
                    src="/bold 2.jpg?height=300&width=300"
                    alt="Engineering Recruitment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-40 rounded-md overflow-hidden">
                  <img
                    src="/bold 3.jpg?height=300&width=300"
                    alt="IT Solutions"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-32 rounded-md overflow-hidden">
                  <img
                    src="/bold 4.jpg?height=300&width=300"
                    alt="Hospitality Staffing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
