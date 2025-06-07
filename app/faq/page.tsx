import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "FAQ | JCGM Heights",
  description: "Frequently asked questions about JCGM Heights' staffing and recruitment services in the Middle East",
}

export default function FAQPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground">Find answers to common questions about our staffing solutions</p>
      </div>

      <div className="max-w-3xl mx-auto mb-12">
        <Card className="border-none shadow-md">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                What services does JCGM Heights offer?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                JCGM Heights specializes in comprehensive staffing solutions across various sectors in the Middle East, including Healthcare, Engineering, IT, and Hospitality. We provide end-to-end recruitment services, from candidate screening and documentation to placement and ongoing support. Our services are tailored to meet both employer needs and candidate career goals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                How does the recruitment process work?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Our recruitment process is thorough and efficient. It begins with initial screening of candidates, followed by documentation verification, interview coordination, and final selection. We handle all aspects of the recruitment process, including background checks, visa processing, and relocation support. Our team ensures a smooth transition for both employers and candidates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                What sectors do you specialize in?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                We specialize in several key sectors in the Middle East market:
                - Healthcare: Medical professionals and healthcare staff
                - Engineering: Construction and technical roles
                - IT & Technology: Software developers and IT specialists
                - Hospitality & Tourism: Hotel and service industry professionals
                Each sector has dedicated recruitment specialists with deep industry knowledge.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                How do you ensure candidate quality?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                We maintain high standards through a rigorous screening process that includes:
                - Detailed background checks
                - Verification of qualifications and experience
                - Technical skill assessments
                - Reference checks
                - Cultural fit evaluation
                This comprehensive approach ensures we provide only the best candidates to our clients.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                What support do you provide after placement?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Our commitment extends beyond placement. We provide ongoing support including:
                - Relocation assistance
                - Cultural orientation
                - Documentation support
                - Regular check-ins
                - Performance monitoring
                - Conflict resolution
                We ensure both employers and candidates have a successful long-term relationship.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                How can I apply for job opportunities?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                You can apply for opportunities through multiple channels:
                - Our website's job portal
                - Direct email to careers@boldheights.com
                - LinkedIn profile submission
                - Walk-in applications at our Dubai office
                We recommend creating a detailed profile on our platform to receive personalized job alerts.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                What are your service fees?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Our fee structure is competitive and transparent, varying based on:
                - Position level and requirements
                - Recruitment complexity
                - Service package selected
                - Market conditions
                We offer customized packages for different business needs. Contact our team for a detailed quote.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                Do you handle visa and work permit processing?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Yes, we provide comprehensive visa and work permit processing services. Our team handles:
                - Work permit applications
                - Residence visa processing
                - Family visa arrangements
                - Document attestation
                - Medical insurance setup
                We ensure all legal requirements are met for smooth employment in the UAE.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                What makes JCGM Heights different from other recruitment agencies?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Our key differentiators include:
                - Deep understanding of Middle East market
                - Industry-specific expertise
                - Comprehensive screening process
                - End-to-end support services
                - Strong network of employers
                - Personalized approach to recruitment
                - Commitment to long-term success
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                How can I contact JCGM Heights?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                You can reach us through multiple channels:
                - Phone: +971 4 XXX XXXX
                - Email: info@boldheights.com
                - Office: Dubai Business Center, Sheikh Zayed Road
                - Social Media: LinkedIn, Twitter, Instagram
                Our team is available Sunday to Thursday, 9 AM to 6 PM GST.
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
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Link href="/contact">Contact Support</Link>
          </Button>
          <Button variant="outline">
            <Link href="/blog">View Job Opportunities</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
