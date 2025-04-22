"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, X, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "Hello! I'm ArtBunifu's AI assistant. How can I help you discover art today?",
    },
  ])
  const [input, setInput] = useState("")

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: input }])

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I can help you find artworks based on your preferences. What styles or artists are you interested in?",
        "Would you like me to recommend galleries in a specific location?",
        "I can provide information about current exhibitions worldwide. Any specific region you're interested in?",
        "If you're looking for investment pieces, I can suggest emerging artists with growing recognition.",
        "I'd be happy to explain different art styles or movements if you're curious about a particular one.",
      ]

      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      setMessages((prev) => [...prev, { role: "system", content: randomResponse }])
    }, 1000)

    setInput("")
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg bg-art-purple hover:bg-art-purple/90 z-50"
      >
        <MessageSquare className="h-6 w-6" />
        <span className="sr-only">Open Chat</span>
      </Button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] bg-background rounded-lg shadow-xl z-50 flex flex-col border overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b bg-art-purple text-white">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 border-2 border-white">
                <AvatarImage src="/placeholder.svg?height=100&width=100" alt="AI Assistant" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-sm">Art Assistant</h3>
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
                  className={cn("rounded-lg p-3", message.role === "user" ? "bg-art-purple text-white" : "bg-muted")}
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
                placeholder="Ask about art, galleries, or artists..."
                className="flex-1"
              />
              <Button type="submit" size="icon" className="bg-art-purple hover:bg-art-purple/90">
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
