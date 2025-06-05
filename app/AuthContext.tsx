'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  role: 'user' | 'admin';
}

interface UserSession extends Omit<User, 'password'> {}

interface AuthContextType {
  user: UserSession | null;
  login: (email: string, password: string, role: 'user' | 'admin') => Promise<boolean>;
  signup: (userData: Omit<User, 'id' | 'role'> & { password: string }, role: 'user' | 'admin') => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper function to safely access localStorage
const getLocalStorage = (key: string): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key);
  }
  return null;
};

// Helper function to safely set localStorage
const setLocalStorage = (key: string, value: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, value);
  }
};

// Helper function to safely remove from localStorage
const removeLocalStorage = (key: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserSession | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load users from localStorage or initialize with default users
  const getStoredUsers = (): (User & { password: string })[] => {
    const stored = getLocalStorage('jobPortalUsers');
    if (stored) {
      return JSON.parse(stored);
    }
    
    // Default users
    const defaultUsers = [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        username: 'johndoe',
        password: 'password123',
        role: 'user' as const
      },
      {
        id: '2',
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@example.com',
        username: 'admin',
        password: 'admin123',
        role: 'admin' as const
      }
    ];
    
    setLocalStorage('jobPortalUsers', JSON.stringify(defaultUsers));
    return defaultUsers;
  };

  const saveUsers = (users: (User & { password: string })[]) => {
    setLocalStorage('jobPortalUsers', JSON.stringify(users));
  };

  useEffect(() => {
    // Check for stored user session
    const storedUser = getLocalStorage('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string, role: 'user' | 'admin'): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const users = getStoredUsers();
      console.log('AuthContext - Login attempt:', {
        email,
        password,
        role,
        usersCount: users.length,
        users: users.map(u => ({
          id: u.id,
          email: u.email,
          username: u.username,
          role: u.role,
          password: '***'
        }))
      });
      
      // First, find any user with matching email/username
      const potentialUser = users.find(u => 
        u.email === email || u.username === email
      );
      
      if (!potentialUser) {
        console.log('AuthContext - No user found with email/username:', email);
        setIsLoading(false);
        return false;
      }
      
      console.log('AuthContext - Found potential user:', {
        id: potentialUser.id,
        email: potentialUser.email,
        username: potentialUser.username,
        role: potentialUser.role,
        password: '***'
      });
      
      // Then check password and role
      const passwordMatch = potentialUser.password === password;
      const roleMatch = potentialUser.role === role;
      
      console.log('AuthContext - Credential check:', {
        passwordMatch,
        roleMatch,
        expectedRole: role,
        actualRole: potentialUser.role
      });
      
      if (passwordMatch && roleMatch) {
        const userSession: UserSession = {
          id: potentialUser.id,
          firstName: potentialUser.firstName,
          lastName: potentialUser.lastName,
          email: potentialUser.email,
          username: potentialUser.username,
          role: potentialUser.role
        };
        
        console.log('AuthContext - Login successful:', {
          userSession,
          role: userSession.role
        });
        
        setUser(userSession);
        setLocalStorage('currentUser', JSON.stringify(userSession));
        setIsLoading(false);
        return true;
      }
      
      console.log('AuthContext - Login failed:', {
        reason: !passwordMatch ? 'Invalid password' : 'Role mismatch',
        providedRole: role,
        userRole: potentialUser.role
      });
      
      setIsLoading(false);
      return false;
    } catch (error) {
      console.error('AuthContext - Login error:', error);
      setIsLoading(false);
      return false;
    }
  };

  const signup = async (userData: Omit<User, 'id' | 'role'> & { password: string }, role: 'user' | 'admin'): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const users = getStoredUsers();
      
      // Check if user already exists
      const userExists = users.some(u => 
        u.email === userData.email || u.username === userData.username
      );
      
      if (userExists) {
        setIsLoading(false);
        return false;
      }

      // If trying to sign up as admin, check if an admin already exists
      if (role === 'admin') {
        const adminExists = users.some(u => u.role === 'admin');
        if (adminExists) {
          setIsLoading(false);
          return false;
        }
      }
      
      // Create new user
      const newUser: User & { password: string } = {
        id: Date.now().toString(),
        ...userData,
        role
      };
      
      const updatedUsers = [...users, newUser];
      saveUsers(updatedUsers);
      
      setIsLoading(false);
      return true;
    } catch (error) {
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    removeLocalStorage('currentUser');
  };

  const value: AuthContextType = {
    user,
    login,
    signup,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 