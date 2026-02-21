import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, Clock } from "lucide-react";
import { courses } from "@/data/mockData";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

export default function Profile() {
  const { user } = useAuth();
  const enrolledCourses = courses.filter(c => c.progress !== undefined);

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Profile Card */}
      <Card>
        <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-6">
          <Avatar className="h-20 w-20">
            <AvatarFallback className="gradient-primary text-primary-foreground text-2xl font-bold">
              {user?.avatar}
            </AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left flex-1">
            <h1 className="text-2xl font-bold text-foreground">{user?.name}</h1>
            <p className="text-muted-foreground">{user?.email}</p>
            <Badge className="mt-2" variant="secondary">{user?.role === "admin" ? "Administrateur" : "Étudiant"}</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { icon: BookOpen, label: "Cours inscrits", value: enrolledCourses.length },
          { icon: Award, label: "Terminés", value: enrolledCourses.filter(c => c.progress === 100).length },
          { icon: Clock, label: "En cours", value: enrolledCourses.filter(c => (c.progress ?? 0) < 100).length },
        ].map(s => (
          <Card key={s.label}>
            <CardContent className="p-4 text-center">
              <s.icon className="h-6 w-6 mx-auto text-accent mb-2" />
              <p className="text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Enrolled Courses */}
      <Card>
        <CardHeader><CardTitle>Mes cours</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {enrolledCourses.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>Vous n'êtes inscrit à aucun cours.</p>
              <Link to="/explore"><Button variant="outline" className="mt-3">Explorer les cours</Button></Link>
            </div>
          ) : (
            enrolledCourses.map(course => (
              <Link key={course.id} to={`/course/${course.id}`} className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors">
                <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                  <BookOpen className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm truncate">{course.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Progress value={course.progress} className="h-1.5 flex-1" />
                    <span className="text-xs text-muted-foreground shrink-0">{course.progress}%</span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
