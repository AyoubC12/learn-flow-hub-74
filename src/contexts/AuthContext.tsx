import { createContext, useContext, useState, ReactNode } from "react";

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  avatar: string;
}

interface AuthContextType {
  user: AuthUser | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string, role: "admin" | "user") => boolean;
  logout: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => {
    const stored = localStorage.getItem("edupro_user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (email: string, _password: string): boolean => {
    // Mock login — accepts any email with password "password"
    const mockUser: AuthUser = {
      id: Date.now(),
      name: email.split("@")[0],
      email,
      role: email.includes("admin") ? "admin" : "user",
      avatar: email.substring(0, 2).toUpperCase(),
    };
    setUser(mockUser);
    localStorage.setItem("edupro_user", JSON.stringify(mockUser));
    return true;
  };

  const signup = (name: string, email: string, _password: string, role: "admin" | "user"): boolean => {
    const newUser: AuthUser = {
      id: Date.now(),
      name,
      email,
      role,
      avatar: name.substring(0, 2).toUpperCase(),
    };
    setUser(newUser);
    localStorage.setItem("edupro_user", JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("edupro_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAdmin: user?.role === "admin" }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
