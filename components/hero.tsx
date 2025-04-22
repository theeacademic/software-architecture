import { Button } from "@/components/ui/button"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-background/80">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-art-purple/20 via-art-pink/20 to-art-blue/20"></div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Discover the World of <span className="gradient-text">Art</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore galleries, connect with artists, and find your next masterpiece with AI-powered assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-art-purple hover:bg-art-purple/90">
                <Link href="/galleries">Explore Galleries</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/artworks">Browse Artworks</Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-art-purple/80 via-art-pink/80 to-art-blue/80 opacity-90"></div>
            <div className="absolute inset-0 grid grid-cols-2 gap-2 p-4">
              <div className="space-y-2">
                <div className="h-32 rounded-md overflow-hidden">
                  <img
                    src="/home.jpg?height=300&width=300"
                    alt="Abstract Art"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-40 rounded-md overflow-hidden">
                  <img
                    src="/home2.jpg?height=300&width=300"
                    alt="Modern Art"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-40 rounded-md overflow-hidden">
                  <img
                    src="/home3.jpg?height=300&width=300"
                    alt="Classical Art"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-32 rounded-md overflow-hidden">
                  <img
                    src="/home4.jpg?height=300&width=300"
                    alt="Contemporary Art"
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
