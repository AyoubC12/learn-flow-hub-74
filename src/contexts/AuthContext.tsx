import { createContext, useContext, useState, ReactNode } from "react";

export type UserRole = "admin" | "user";

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
}

interface AuthContextType {
  user: AuthUser | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => {
    const saved = localStorage.getItem("edupro_user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = (email: string, _password: string): boolean => {
    // Mock login - admin or user based on email
    const isAdmin = email.includes("admin");
    const mockUser: AuthUser = {
      id: isAdmin ? 1 : 2,
      name: isAdmin ? "Admin EduPro" : "Utilisateur",
      email,
      role: isAdmin ? "admin" : "user",
      avatar: isAdmin ? "AD" : "US",
    };
    setUser(mockUser);
    localStorage.setItem("edupro_user", JSON.stringify(mockUser));
    return true;
  };

  const signup = (name: string, email: string, _password: string): boolean => {
    const mockUser: AuthUser = {
      id: Date.now(),
      name,
      email,
      role: "user",
      avatar: name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2),
    };
    setUser(mockUser);
    localStorage.setItem("edupro_user", JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("edupro_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
