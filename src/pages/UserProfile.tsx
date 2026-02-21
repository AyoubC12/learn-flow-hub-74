import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, Mail, Shield } from "lucide-react";
import { courses } from "@/data/mockData";

export default function UserProfile() {
  const { user } = useAuth();
  if (!user) return null;

  const enrolledCourses = courses.filter((c) => c.progress !== undefined);

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <Card className="bg-card border-border shadow-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">{user.avatar}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
              <p className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4" />{user.email}</p>
              <Badge className="mt-2" variant="outline">
                <Shield className="mr-1 h-3 w-3" />
                {user.role === "admin" ? "Administrateur" : "Étudiant"}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5" /> Mes cours en cours</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {enrolledCourses.length === 0 ? (
            <p className="text-muted-foreground text-sm">Aucun cours en cours.</p>
          ) : (
            enrolledCourses.map((c) => (
              <div key={c.id} className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <p className="text-sm font-medium text-foreground">{c.title}</p>
                  <p className="text-xs text-muted-foreground">{c.author}</p>
                </div>
                <Badge variant="outline">{c.progress}%</Badge>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
