import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "FAQ | ArtBunifu",
  description: "Frequently asked questions about ArtBunifu's services and platform",
}

export default function FAQPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground">Find answers to common questions about ArtBunifu</p>
      </div>

      <div className="max-w-3xl mx-auto mb-12">
        <Card className="border-none shadow-md">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                What is ArtBunifu?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                ArtBunifu is a web platform that connects art lovers with galleries and artists worldwide. We provide a
                comprehensive database of art galleries, exhibitions, artworks, and artists, along with an AI-powered
                chatbot to assist users in finding art that matches their preferences.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                How do I create an account?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Creating an account is simple! Click on the "Sign In" button in the top right corner of the page, then
                select "Sign Up." You can register using your email address or through your Google, Microsoft, or Apple
                account. Once registered, you'll have access to all features of ArtBunifu.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                Is ArtBunifu free to use?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Yes, basic access to ArtBunifu is completely free. You can browse galleries, artworks, and artists
                without any cost. We also offer premium subscription plans for enhanced features such as personalized
                recommendations, virtual gallery tours, and priority access to exclusive events.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                How does the AI chatbot work?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Our AI chatbot uses advanced natural language processing to understand your art preferences and provide
                personalized recommendations. You can ask it questions about art styles, artists, galleries, or specific
                artworks. The more you interact with the chatbot, the better it becomes at understanding your tastes and
                making relevant suggestions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                Can I purchase artwork through ArtBunifu?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                ArtBunifu primarily serves as a discovery platform that connects you with galleries and artists. While
                we don't process transactions directly, we provide all the necessary information to contact galleries or
                artists for purchasing artwork. For selected partner galleries, we offer a "Request to Purchase" feature
                that initiates the buying process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                I'm an artist/gallery owner. How can I list my work on ArtBunifu?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                We welcome artists and galleries to join our platform! To list your work, you'll need to create an
                artist or gallery account. Once verified, you can upload your portfolio, exhibition details, and contact
                information. For more information, please visit our "For Artists" or "For Galleries" pages, or contact
                our partnerships team at partners@artbunifu.com.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                How do I search for specific types of art?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                ArtBunifu offers comprehensive search and filtering options. You can search by artist name, gallery, art
                style, medium, price range, and location. Use the search bar at the top of the page or the advanced
                filters on the artworks and galleries pages to narrow down your results according to your preferences.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                Are the events listed on ArtBunifu up-to-date?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                We strive to maintain accurate and current information about all exhibitions and events. Our team
                regularly updates the platform, and partner galleries provide real-time information about their events.
                However, we recommend confirming details directly with the gallery before planning your visit,
                especially for time-sensitive events.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                How can I save my favorite artworks and galleries?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Once you've created an account, you can save artworks and galleries to your favorites by clicking the
                heart icon on any artwork or gallery card. Access your saved items anytime through your user profile.
                You can also create custom collections to organize your favorites by theme, style, or any category you
                prefer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                What should I do if I encounter technical issues?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                If you experience any technical difficulties while using ArtBunifu, please contact our support team at
                support@artbunifu.com. Include details about the issue, such as the device and browser you're using, and
                any error messages you received. Our team is dedicated to resolving technical problems promptly to
                ensure a smooth experience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
        <p className="text-muted-foreground mb-6">
          If you couldn't find the answer to your question, please don't hesitate to contact us directly.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-art-purple hover:bg-art-purple/90">
            <Link href="/contact">Contact Support</Link>
          </Button>
          <Button variant="outline">
            <Link href="/blog">Read Our Blog</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
