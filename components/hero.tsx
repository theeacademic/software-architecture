"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"

const Hero = () => {
  // Animation for welcome message
  const infoRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (infoRef.current) {
      infoRef.current.classList.add("animate-hero-pop")
    }
  }, [])

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Alert Banner with Distinct Gradient Shade */}
      <div
        className="w-full text-black text-center py-4 font-extrabold text-xl z-20 relative animate-pulse"
        style={{
          background: "#ff8800", // Bold orange
          boxShadow: "0 4px 24px 0 rgba(255, 136, 0, 0.15)",
          borderBottom: "3px solid #ff9900",
          letterSpacing: "1px",
        }}
      >
        Hot Opportunities! Fresh job openings just landed — Your dream career could be one click away!
      </div>
      {/* Building background image behind welcome message */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <img
          src="/building-towers.jpg"
          alt="Building with towers"
          className="w-full h-full object-cover opacity-100"
          style={{ filter: "none" }}
        />
        {/* Subtle dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container relative z-10 py-20 md:py-32 flex flex-col items-start justify-center min-h-[60vh]">
        <div
          ref={infoRef}
          className="flex flex-col gap-6 items-start text-left max-w-3xl opacity-0 scale-95"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Leading recruitment agency in Kenya for UAE & Middle East market
          </h1>
          <p className="text-lg md:text-xl text-white drop-shadow-md">
            Are you hiring? Partner with us to find you the most suitable talent for your business from the Kenyan labor force.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <Button size="lg" className="bg-transparent border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white">
              <Link href="/galleries">Our services</Link>
            </Button>
            <Button size="lg" className="bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        {/* Removed photo grid section */}
      </div>
    </div>
  )
}

export default Hero
