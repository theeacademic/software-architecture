'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/app/AuthContext';
import { Eye, EyeOff } from 'lucide-react';

interface SignInFormProps {
  role: 'user' | 'admin';
}

export function SignInForm({ role }: SignInFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('SignInForm - Form submission:', {
      email,
      password,
      role,
      formValues: {
        email: email.trim(),
        password: password.trim(),
        role
      }
    });

    try {
      setError(null);
      const success = await login(email.trim(), password.trim(), role);
      console.log('SignInForm - Login result:', {
        success,
        email: email.trim(),
        role
      });

      if (success) {
        toast({
          title: "Success!",
          description: `Signed in successfully as ${role}`,
        });

        if (role === 'admin') {
          router.push('/admin/dashboard');
        } else {
          router.push('/dashboard');
        }
      } else {
        setError("Incorrect password or account does not exist.");
        toast({
          title: "Error",
          description: "Invalid credentials or role mismatch",
          variant: "destructive",
        });
      }
    } catch (error) {
      setError("An error occurred during sign in.");
      console.error('SignInForm - Sign in error:', error);
      toast({
        title: "Error",
        description: "An error occurred during sign in",
        variant: "destructive",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email or Username</Label>
        <Input
          id="email"
          placeholder={role === 'admin' ? "Enter admin username" : "name@example.com"}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input 
            id="password" 
            type={showPassword ? "text" : "password"}
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-gray-500" />
            ) : (
              <Eye className="h-4 w-4 text-gray-500" />
            )}
            <span className="sr-only">
              {showPassword ? "Hide password" : "Show password"}
            </span>
          </Button>
        </div>
        {error && (
          <p className="text-sm text-red-600 mt-1">{error}</p>
        )}
      </div>

      <Button 
        type="submit" 
        className="w-full bg-orange-500 hover:bg-orange-600 text-white" 
        disabled={isLoading}
      >
        {isLoading ? "Signing in..." : `Sign In as ${role === "admin" ? "Admin" : "User"}`}
      </Button>
      
      {role === 'user' && (
        <p className="text-sm text-gray-600 text-center">
          Demo: Use john@example.com / password123
        </p>
      )}
    </form>
  );
}
