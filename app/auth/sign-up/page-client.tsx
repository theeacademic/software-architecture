'use client';

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SocialLoginButtons from "@/components/auth/social-login-buttons"
import { SignUpForm } from "@/components/auth/sign-up-form"
import { useAuth } from "@/app/AuthContext"
import { useToast } from "@/hooks/use-toast"

export function SignUpPageClient() {
  const router = useRouter();
  const { signup, isLoading } = useAuth();
  const { toast } = useToast();

  const handleSignUp = async (formData) => {
    const success = await signup(formData);
    
    if (success) {
      toast({
        title: "Success!",
        description: "Account created successfully. Please sign in.",
      });
      router.push('/auth/sign-in');
    } else {
      toast({
        title: "Error",
        description: "Failed to create account. Email or username may already exist.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container flex h-screen w-full flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:w-[450px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">Sign up to explore art galleries and collections</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Enter your information to create an account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <SignUpForm onSignUp={handleSignUp} isLoading={isLoading} />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <SocialLoginButtons />
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center text-muted-foreground">
              Already have an account?{" "}
              <Link href="/auth/sign-in" className="text-art-purple hover:underline">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 