import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Art Collector",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "ArtBunifu has transformed how I discover new art. The AI chatbot helped me find pieces that perfectly match my taste and space.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Gallery Owner",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "As a gallery owner, I've seen a significant increase in visibility since joining ArtBunifu. The platform connects us with the right collectors.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Emerging Artist",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "The exposure I've gained through ArtBunifu has been incredible. I've connected with galleries and collectors I never would have reached otherwise.",
  },
]

const TestimonialSection = () => {
  return (
    <div className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Hear from artists, collectors, and gallery owners who have found success with ArtBunifu
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex items-start mb-6">
                <Avatar className="h-12 w-12 border-2 border-art-purple">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-6 w-6 text-art-purple opacity-20" />
                <p className="text-muted-foreground relative z-10 pl-4">"{testimonial.quote}"</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default TestimonialSection
