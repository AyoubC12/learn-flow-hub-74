import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

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
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string, role: UserRole) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Mock users database
const mockUsers: (AuthUser & { password: string })[] = [
  { id: 1, name: "Admin EduPro", email: "admin@edupro.com", password: "admin123", role: "admin", avatar: "AE" },
  { id: 2, name: "Utilisateur Test", email: "user@edupro.com", password: "user123", role: "user", avatar: "UT" },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => {
    const saved = localStorage.getItem("edupro_user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = useCallback((email: string, password: string): boolean => {
    const found = mockUsers.find((u) => u.email === email && u.password === password);
    if (found) {
      const { password: _, ...userData } = found;
      setUser(userData);
      localStorage.setItem("edupro_user", JSON.stringify(userData));
      return true;
    }
    return false;
  }, []);

  const signup = useCallback((name: string, email: string, password: string, role: UserRole): boolean => {
    if (mockUsers.find((u) => u.email === email)) return false;
    const newUser: AuthUser & { password: string } = {
      id: mockUsers.length + 1,
      name,
      email,
      password,
      role,
      avatar: name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2),
    };
    mockUsers.push(newUser);
    const { password: _, ...userData } = newUser;
    setUser(userData);
    localStorage.setItem("edupro_user", JSON.stringify(userData));
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("edupro_user");
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
