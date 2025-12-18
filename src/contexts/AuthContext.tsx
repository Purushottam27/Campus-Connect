import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserRole } from '@/data/mockData';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole, clubId?: string) => Promise<boolean>;
  register: (name: string, email: string, password: string, role: UserRole, clubId?: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, role: UserRole, clubId?: string): Promise<boolean> => {
    // Simulate login - in real app, this would call an API
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (email && password) {
      setUser({
        id: crypto.randomUUID(),
        name: email.split('@')[0],
        email,
        role,
        clubId: role === 'club_head' ? clubId : undefined
      });
      return true;
    }
    return false;
  };

  const register = async (
    name: string, 
    email: string, 
    password: string, 
    role: UserRole,
    clubId?: string
  ): Promise<boolean> => {
    // Simulate registration
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (name && email && password) {
      setUser({
        id: crypto.randomUUID(),
        name,
        email,
        role,
        clubId: role === 'club_head' ? clubId : undefined
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      login, 
      register, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
