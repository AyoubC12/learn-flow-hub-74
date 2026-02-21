import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GraduationCap, Eye, EyeOff, UserPlus, Shield, User } from "lucide-react";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"user" | "admin">("user");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await signup(name, email, password, role);
    setLoading(false);
    navigate(role === "admin" ? "/" : "/explore");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 gradient-primary items-center justify-center p-12">
        <div className="text-center space-y-6 max-w-md">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
            <GraduationCap className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold text-primary-foreground">Rejoignez EduPro</h2>
          <p className="text-primary-foreground/70 text-lg">
            Créez votre compte et commencez votre parcours d'apprentissage dès aujourd'hui.
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex flex-1 items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <div className="lg:hidden flex justify-center mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Créer un compte</h1>
            <p className="mt-2 text-muted-foreground">Inscrivez-vous pour accéder à la plateforme</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Role selection */}
            <div className="space-y-2">
              <Label>Type de compte</Label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole("user")}
                  className={`flex items-center gap-2 rounded-lg border-2 p-3 text-sm font-medium transition-all ${
                    role === "user"
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border bg-card text-muted-foreground hover:border-accent/50"
                  }`}
                >
                  <User className="h-4 w-4" />
                  Étudiant
                </button>
                <button
                  type="button"
                  onClick={() => setRole("admin")}
                  className={`flex items-center gap-2 rounded-lg border-2 p-3 text-sm font-medium transition-all ${
                    role === "admin"
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border bg-card text-muted-foreground hover:border-accent/50"
                  }`}
                >
                  <Shield className="h-4 w-4" />
                  Administrateur
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Nom complet</Label>
              <Input id="name" placeholder="Jean Dupont" value={name} onChange={(e) => setName(e.target.value)} required className="bg-card" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="jean@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-card" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="bg-card pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" disabled={loading} className="w-full gradient-accent text-accent-foreground font-semibold h-11">
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Création...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <UserPlus className="h-4 w-4" /> Créer mon compte
                </span>
              )}
            </Button>
          </form>

          <div className="text-center text-sm text-muted-foreground">
            Déjà un compte ?{" "}
            <Link to="/login" className="text-accent font-medium hover:underline">
              Se connecter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
