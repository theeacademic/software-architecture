import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

interface SignInFormProps {
  role: 'user' | 'admin';
}

export function SignInForm({ role }: SignInFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const success = await login(email, password, role);

    if (success) {
      toast({
        title: "Success!",
        description: `Signed in successfully as ${role}`,
      });

      if (role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/dashboard');
      }
    } else {
      toast({
        title: "Error",
        description: "Invalid credentials or role mismatch",
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
          placeholder="name@example.com"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input 
          id="password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-job-portal-primary hover:bg-job-portal-primary/90" 
        disabled={isLoading}
      >
        {isLoading ? "Signing in..." : `Sign In as ${role === "admin" ? "Admin" : "User"}`}
      </Button>
      
      {role === 'user' && (
        <p className="text-sm text-gray-600 text-center">
          Demo: Use john@example.com / password123
        </p>
      )}
      {role === 'admin' && (
        <p className="text-sm text-gray-600 text-center">
          Demo: Use admin@example.com / admin123
        </p>
      )}
    </form>
  );
}
