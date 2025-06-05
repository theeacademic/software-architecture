'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SignUpForm } from '@/components/auth/sign-up-form';
import { useAuth } from '@/app/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { signup } = useAuth();
  const { toast } = useToast();

  const handleSignUp = async (data: any, role: 'user' | 'admin') => {
    try {
      setIsLoading(true);
      const success = await signup(data, role);
      if (success) {
        toast({
          title: "Success",
          description: `Account created successfully! Please sign in.`,
        });
        router.push('/auth/sign-in');
      } else {
        if (role === 'admin') {
          toast({
            title: "Error",
            description: "An admin account already exists. Only one admin account is allowed.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Error",
            description: "Failed to create account. Please try again.",
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Choose your account type below
          </p>
        </div>

        <Tabs defaultValue="user" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="user">User</TabsTrigger>
            <TabsTrigger value="admin">Admin</TabsTrigger>
          </TabsList>
          <TabsContent value="user">
            <Card>
              <CardHeader>
                <CardTitle>User Account</CardTitle>
                <CardDescription>
                  Create a new user account to apply for jobs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SignUpForm onSignUp={handleSignUp} isLoading={isLoading} role="user" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="admin">
            <Card>
              <CardHeader>
                <CardTitle>Admin Account</CardTitle>
                <CardDescription>
                  Create an admin account to manage jobs and applications. Only one admin account is allowed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SignUpForm onSignUp={handleSignUp} isLoading={isLoading} role="admin" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
