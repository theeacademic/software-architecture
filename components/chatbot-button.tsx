"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, X, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

// FAQ knowledge base
const faqs = [
  {
    question: "What services does JCM Heights offer?",
    answer:
      "JCM Heights specializes in comprehensive staffing solutions across various sectors in the Middle East, including Healthcare, Engineering, IT, and Hospitality. We provide end-to-end recruitment services, from candidate screening and documentation to placement and ongoing support. Our services are tailored to meet both employer needs and candidate career goals.",
  },
  {
    question: "How does the recruitment process work?",
    answer:
      "Our recruitment process is thorough and efficient. It begins with initial screening of candidates, followed by documentation verification, interview coordination, and final selection. We handle all aspects of the recruitment process, including background checks, visa processing, and relocation support. Our team ensures a smooth transition for both employers and candidates.",
  },
  {
    question: "What sectors do you specialize in?",
    answer:
      "We specialize in several key sectors in the Middle East market: Healthcare, Engineering, IT & Technology, and Hospitality & Tourism. Each sector has dedicated recruitment specialists with deep industry knowledge.",
  },
  {
    question: "How do you ensure candidate quality?",
    answer:
      "We maintain high standards through a rigorous screening process that includes detailed background checks, verification of qualifications and experience, technical skill assessments, reference checks, and cultural fit evaluation. This comprehensive approach ensures we provide only the best candidates to our clients.",
  },
  {
    question: "What support do you provide after placement?",
    answer:
      "Our commitment extends beyond placement. We provide ongoing support including relocation assistance, cultural orientation, documentation support, regular check-ins, performance monitoring, and conflict resolution. We ensure both employers and candidates have a successful long-term relationship.",
  },
  {
    question: "How can I apply for job opportunities?",
    answer:
      "You can apply for opportunities through multiple channels: our website's job portal, direct email to careers@boldheights.com, LinkedIn profile submission, or walk-in applications at our Dubai office. We recommend creating a detailed profile on our platform to receive personalized job alerts.",
  },
  {
    question: "What are your service fees?",
    answer:
      "Our fee structure is competitive and transparent, varying based on position level and requirements, recruitment complexity, service package selected, and market conditions. We offer customized packages for different business needs. Contact our team for a detailed quote.",
  },
  {
    question: "Do you handle visa and work permit processing?",
    answer:
      "Yes, we provide comprehensive visa and work permit processing services. Our team handles work permit applications, residence visa processing, family visa arrangements, document attestation, and medical insurance setup. We ensure all legal requirements are met for smooth employment in the UAE.",
  },
  {
    question: "What makes JCM Heights different from other recruitment agencies?",
    answer:
      "Our key differentiators include deep understanding of the Middle East market, industry-specific expertise, comprehensive screening process, end-to-end support services, strong network of employers, personalized approach to recruitment, and commitment to long-term success.",
  },
  {
    question: "How can I contact JCM Heights?",
    answer:
      "You can reach us through multiple channels: Phone: +971 4 XXX XXXX, Email: info@boldheights.com, Office: Dubai Business Center, Sheikh Zayed Road, Social Media: LinkedIn, Twitter, Instagram. Our team is available Sunday to Thursday, 9 AM to 6 PM GST.",
  },
]

function findBestFaqMatch(userInput: string) {
  // Simple case-insensitive substring match; can be improved with fuzzy matching
  const normalizedInput = userInput.toLowerCase()
  for (const faq of faqs) {
    if (normalizedInput.includes(faq.question.toLowerCase().split(" ")[0])) {
      // If the first word of the FAQ question is in the input, consider it a match
      return faq.answer
    }
    if (normalizedInput.includes(faq.question.toLowerCase())) {
      return faq.answer
    }
    // Also try partial match on keywords
    const keywords = faq.question.toLowerCase().split(/\W+/)
    for (const word of keywords) {
      if (word.length > 3 && normalizedInput.includes(word)) {
        return faq.answer
      }
    }
  }
  return null
}

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "Hello! I'm JCM Heights' recruitment assistant. How can I help you with jobs, staffing, or our services today?",
    },
  ])
  const [input, setInput] = useState("")

  const handleSendMessage = () => {
    if (!input.trim()) return

    setMessages((prev) => [...prev, { role: "user", content: input }])

    setTimeout(() => {
      const answer = findBestFaqMatch(input)
      setMessages((prev) => [
        ...prev,
        {
          role: "system",
          content:
            answer ||
            "Sorry, I couldn't find an answer to your question. Please contact us directly or visit our FAQ page for more information.",
        },
      ])
    }, 800)

    setInput("")
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg bg-blue-500 hover:bg-blue-600 z-50"
      >
        <MessageSquare className="h-6 w-6" />
        <span className="sr-only">Open Chat</span>
      </Button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] bg-background rounded-lg shadow-xl z-50 flex flex-col border overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b bg-blue-500 text-white">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 border-2 border-white">
                <AvatarImage src="/placeholder.svg?height=100&width=100" alt="AI Assistant" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-sm">Recruitment Assistant</h3>
                <p className="text-xs opacity-80">Online</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={cn("flex gap-2 max-w-[80%]", message.role === "user" ? "ml-auto" : "")}>
                {message.role === "system" && (
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarImage src="/placeholder.svg?height=100&width=100" alt="AI Assistant" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn("rounded-lg p-3", message.role === "user" ? "bg-blue-500 text-white" : "bg-muted")}
                >
                  {message.content}
                </div>
                {message.role === "user" && (
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarFallback>You</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
              className="flex gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about jobs, recruitment, or our services..."
                className="flex-1"
              />
              <Button type="submit" size="icon" className="bg-orange-500 hover:bg-orange-600">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatbotButton
