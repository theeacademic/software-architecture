
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load users from localStorage or initialize with default users
  const getStoredUsers = () => {
    const stored = localStorage.getItem('jobPortalUsers');
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
        role: 'user'
      },
      {
        id: '2',
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@example.com',
        username: 'admin',
        password: 'admin123',
        role: 'admin'
      }
    ];
    
    localStorage.setItem('jobPortalUsers', JSON.stringify(defaultUsers));
    return defaultUsers;
  };

  const saveUsers = (users) => {
    localStorage.setItem('jobPortalUsers', JSON.stringify(users));
  };

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password, role) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const users = getStoredUsers();
    const foundUser = users.find(u => 
      (u.email === email || u.username === email) && 
      u.password === password && 
      u.role === role
    );
    
    if (foundUser) {
      const userSession = {
        id: foundUser.id,
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        email: foundUser.email,
        username: foundUser.username,
        role: foundUser.role
      };
      setUser(userSession);
      localStorage.setItem('currentUser', JSON.stringify(userSession));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const signup = async (userData) => {
    setIsLoading(true);
    
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
    
    // Create new user
    const newUser = {
      id: Date.now().toString(),
      ...userData,
      role: 'user'
    };
    
    const updatedUsers = [...users, newUser];
    saveUsers(updatedUsers);
    
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  const value = {
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
