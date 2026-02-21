import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { GraduationCap, BookOpen, User, LogOut, Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useTheme } from "@/hooks/useTheme";

export function UserLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const links = [
    { to: "/explore", label: "Cours", icon: BookOpen },
    { to: "/profile", label: "Mon profil", icon: User },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/explore" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold text-foreground">EduPro</span>
          </Link>

          <div className="hidden md:block relative w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Rechercher un cours..." className="pl-9 bg-secondary border-none" />
          </div>

          <div className="flex items-center gap-2">
            {links.map((link) => (
              <Link key={link.to} to={link.to}>
                <Button
                  variant={location.pathname === link.to ? "secondary" : "ghost"}
                  size="sm"
                  className="text-sm"
                >
                  <link.icon className="mr-1.5 h-4 w-4" />
                  <span className="hidden sm:inline">{link.label}</span>
                </Button>
              </Link>
            ))}

            <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-muted-foreground">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <div className="flex items-center gap-2 rounded-full bg-secondary px-2 py-1">
              <Avatar className="h-7 w-7">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                  {user?.avatar}
                </AvatarFallback>
              </Avatar>
              <span className="hidden text-sm font-medium text-foreground sm:block">{user?.name}</span>
            </div>

            <Button variant="ghost" size="icon" onClick={handleLogout} className="text-muted-foreground hover:text-destructive">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <Outlet />
      </main>
    </div>
  );
}
