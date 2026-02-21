import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth, UserRole } from "@/contexts/AuthContext";
import { GraduationCap, Mail, Lock, User, Eye, EyeOff, ArrowRight, Shield, UserCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("user");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      toast({ title: "Erreur", description: "Le mot de passe doit contenir au moins 6 caractères.", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const success = signup(name, email, password, role);
      if (success) {
        toast({ title: "Inscription réussie", description: `Bienvenue ${name} !` });
        navigate("/");
      } else {
        toast({ title: "Erreur", description: "Cet email est déjà utilisé.", variant: "destructive" });
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 gradient-primary items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-primary-foreground/20"
              style={{
                width: `${200 + i * 120}px`,
                height: `${200 + i * 120}px`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>
        <div className="relative z-10 text-center space-y-6 max-w-md">
          <div className="flex justify-center">
            <div className="h-20 w-20 rounded-2xl gradient-accent flex items-center justify-center shadow-float">
              <GraduationCap className="h-10 w-10 text-accent-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-primary-foreground">Rejoignez EduPro</h1>
          <p className="text-lg text-primary-foreground/80">
            Créez votre compte et commencez à apprendre ou à enseigner dès maintenant.
          </p>
        </div>
      </div>

      {/* Right panel - form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="lg:hidden flex items-center gap-3 justify-center mb-4">
            <div className="h-10 w-10 rounded-xl gradient-accent flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-accent-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">EduPro</span>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-foreground">Inscription</h2>
            <p className="text-muted-foreground mt-1">Créez votre compte EduPro</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="name" placeholder="Votre nom" value={name} onChange={(e) => setName(e.target.value)} className="pl-10" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="email" type="email" placeholder="votre@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 6 caractères"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Role selection */}
            <div className="space-y-2">
              <Label>Type de compte</Label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole("user")}
                  className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all ${
                    role === "user" ? "border-accent bg-accent/10 text-accent" : "border-border bg-card text-muted-foreground hover:border-accent/50"
                  }`}
                >
                  <UserCircle className="h-8 w-8" />
                  <span className="text-sm font-semibold">Étudiant</span>
                  <span className="text-xs opacity-70">Accéder aux cours</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole("admin")}
                  className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all ${
                    role === "admin" ? "border-accent bg-accent/10 text-accent" : "border-border bg-card text-muted-foreground hover:border-accent/50"
                  }`}
                >
                  <Shield className="h-8 w-8" />
                  <span className="text-sm font-semibold">Admin</span>
                  <span className="text-xs opacity-70">Gérer la plateforme</span>
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full gradient-accent text-accent-foreground font-semibold h-11" disabled={loading}>
              {loading ? "Inscription..." : "Créer mon compte"}
              {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>

          <div className="text-center text-sm text-muted-foreground">
            Déjà un compte ?{" "}
            <Link to="/login" className="text-accent font-semibold hover:underline">
              Se connecter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
