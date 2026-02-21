import { useAuth } from "@/contexts/AuthContext";
import { courses } from "@/data/mockData";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Trophy } from "lucide-react";

export default function Profile() {
  const { user } = useAuth();
  const enrolledCourses = courses.filter((c) => c.progress !== undefined);

  return (
    <div className="space-y-6">
      {/* User info card */}
      <div className="rounded-xl bg-card border border-border p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
              {user?.avatar}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl font-bold text-foreground">{user?.name}</h1>
            <p className="text-muted-foreground">{user?.email}</p>
            <Badge variant="secondary" className="mt-1">{user?.role === "admin" ? "Administrateur" : "Étudiant"}</Badge>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="rounded-lg bg-secondary p-4 text-center">
            <BookOpen className="h-5 w-5 mx-auto text-accent mb-1" />
            <p className="text-xl font-bold text-foreground">{enrolledCourses.length}</p>
            <p className="text-xs text-muted-foreground">Cours inscrits</p>
          </div>
          <div className="rounded-lg bg-secondary p-4 text-center">
            <Clock className="h-5 w-5 mx-auto text-info mb-1" />
            <p className="text-xl font-bold text-foreground">42h</p>
            <p className="text-xs text-muted-foreground">Temps d'étude</p>
          </div>
          <div className="rounded-lg bg-secondary p-4 text-center">
            <Trophy className="h-5 w-5 mx-auto text-accent mb-1" />
            <p className="text-xl font-bold text-foreground">1</p>
            <p className="text-xs text-muted-foreground">Certificats</p>
          </div>
        </div>
      </div>

      {/* Enrolled courses */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Mes cours en cours</h2>
        {enrolledCourses.map((course) => (
          <div key={course.id} className="rounded-xl bg-card border border-border p-4 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-foreground truncate">{course.title}</h3>
              <p className="text-xs text-muted-foreground">{course.author} · {course.lessons} leçons</p>
              <div className="mt-2 flex items-center gap-2">
                <Progress value={course.progress} className="h-1.5 flex-1" />
                <span className="text-xs font-medium text-foreground">{course.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
