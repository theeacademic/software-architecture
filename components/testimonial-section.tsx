import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Daniel Kipkorir",
    role: "HR Director, Healthcare Group",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "JCGM Heights has been instrumental in helping us build our healthcare team in Dubai. Their thorough screening process and understanding of local regulations have made recruitment seamless.",
  },
  {
    id: 2,
    name: "Faith Wanjiru",
    role: "Engineering Manager",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "The quality of engineering professionals provided by JCGM Heights has exceeded our expectations. Their deep understanding of the construction sector in the UAE has been invaluable.",
  },
  {
    id: 3,
    name: "Kevin Omondi",
    role: "IT Professional",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "JCGM Heights helped me secure my dream role in Dubai's tech sector. Their team provided excellent support throughout the entire process, from documentation to relocation.",
  },
]

const TestimonialSection = () => {
  return (
    <div className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Hear from employers and professionals who have experienced JCGM Heights' exceptional staffing solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex items-start mb-6">
                <Avatar className="h-12 w-12 border-2 border-blue-600">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-6 w-6 text-blue-600 opacity-20" />
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
