import { useParams, Link } from "react-router-dom";
import { courses } from "@/data/mockData";
import { ArrowLeft, Clock, Users, Star, BookOpen, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-bold text-foreground">Cours introuvable</h2>
        <Link to="/courses" className="mt-4 text-accent hover:underline">← Retour aux cours</Link>
      </div>
    );
  }

  const fakeLessons = Array.from({ length: Math.min(course.lessons, 10) }, (_, i) => ({
    id: i + 1,
    title: `Leçon ${i + 1} : ${["Introduction", "Les bases", "Concepts clés", "Pratique guidée", "Exercices", "Projet pratique", "Cas d'usage", "Optimisation", "Tests", "Conclusion"][i] || `Module ${i + 1}`}`,
    duration: `${Math.floor(Math.random() * 20 + 5)} min`,
    completed: course.progress ? i < Math.floor((course.progress / 100) * 10) : false,
  }));

  return (
    <div className="space-y-6 animate-fade-in">
      <Link to="/courses" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" /> Retour aux cours
      </Link>

      {/* Header */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">{course.level}</Badge>
            <Badge variant="outline">{course.category}</Badge>
          </div>
          <h1 className="text-3xl font-bold text-foreground">{course.title}</h1>
          <p className="text-muted-foreground">{course.description}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{course.duration}</span>
            <span className="flex items-center gap-1"><Users className="h-4 w-4" />{course.students} étudiants</span>
            <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-accent text-accent" />{course.rating}</span>
            <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" />{course.lessons} leçons</span>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-primary-foreground font-bold text-sm">
              {course.authorAvatar}
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{course.author}</p>
              <p className="text-xs text-muted-foreground">Instructeur</p>
            </div>
          </div>
        </div>

        {/* Sidebar card */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-elevated space-y-4">
          <div className="h-40 rounded-xl bg-gradient-to-br from-primary/10 via-accent/5 to-info/10 flex items-center justify-center">
            <Play className="h-12 w-12 text-accent" />
          </div>
          <p className="text-3xl font-bold text-foreground">{course.price} €</p>
          {course.progress !== undefined && (
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progression</span>
                <span className="font-medium text-foreground">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2" />
            </div>
          )}
          <Button className="w-full gradient-accent text-accent-foreground font-semibold shadow-elevated">
            {course.progress !== undefined ? "Continuer" : "S'inscrire"}
          </Button>
        </div>
      </div>

      {/* Lessons */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
        <h2 className="text-lg font-semibold text-foreground mb-4">Contenu du cours</h2>
        <div className="divide-y divide-border">
          {fakeLessons.map((lesson) => (
            <div key={lesson.id} className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                {lesson.completed ? (
                  <CheckCircle2 className="h-5 w-5 text-success" />
                ) : (
                  <Play className="h-5 w-5 text-muted-foreground" />
                )}
                <span className={`text-sm ${lesson.completed ? "text-muted-foreground line-through" : "text-foreground"}`}>
                  {lesson.title}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">{lesson.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
