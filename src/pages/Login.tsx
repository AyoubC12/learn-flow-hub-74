import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { GraduationCap, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({ title: "Erreur", description: "Veuillez remplir tous les champs.", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const success = login(email, password);
      setLoading(false);
      if (success) {
        const isAdmin = email.includes("admin");
        navigate(isAdmin ? "/" : "/explore");
      }
    }, 800);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <Card className="relative w-full max-w-md shadow-float border-border/50">
        <CardHeader className="text-center space-y-4 pb-2">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary text-primary-foreground">
            <GraduationCap className="h-7 w-7" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Connexion</h1>
            <p className="text-sm text-muted-foreground mt-1">Accédez à votre espace EduPro</p>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="vous@exemple.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Mot de passe</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type={showPw ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full gradient-primary text-primary-foreground" disabled={loading}>
              {loading ? "Connexion..." : "Se connecter"}
            </Button>

            <div className="text-center text-sm text-muted-foreground space-y-2">
              <p>
                Pas encore de compte ?{" "}
                <Link to="/signup" className="text-accent font-medium hover:underline">S'inscrire</Link>
              </p>
              <div className="pt-2 border-t border-border">
                <p className="text-xs">
                  <strong>Admin :</strong> utilisez un email contenant "admin"<br />
                  <strong>Utilisateur :</strong> tout autre email
                </p>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
