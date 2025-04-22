"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

interface SignInFormProps {
  role: "user" | "admin"
}

export function SignInForm({ role }: SignInFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const { toast } = useToast()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to sign in")
      }

      // In a real app, you would store the token in localStorage or cookies
      // localStorage.setItem("token", data.token)

      toast({
        title: "Success!",
        description: `Signed in as ${data.user.firstName} ${data.user.lastName}`,
      })

      // Redirect based on role
      if (data.user.role === "admin") {
        router.push("/admin/dashboard")
      } else {
        router.push("/")
      }
    } catch (error) {
      console.error("Sign in error:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to sign in",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email or Username</Label>
        <Input
          id="email"
          placeholder="name@example.com"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <a href="/auth/reset-password" className="text-xs text-art-purple hover:underline">
            Forgot password?
          </a>
        </div>
        <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>

      <Button type="submit" className="w-full bg-art-purple hover:bg-art-purple/90" disabled={isLoading}>
        {isLoading ? "Signing in..." : `Sign In as ${role === "admin" ? "Admin" : "User"}`}
      </Button>
    </form>
  )
}
