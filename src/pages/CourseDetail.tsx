import { useParams, Link } from "react-router-dom";
import { courses } from "@/data/mockData";
import { ArrowLeft, Clock, Users, Star, BookOpen, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Cours introuvable</h2>
        <Link to="/explore">
          <Button variant="secondary">Retour aux cours</Button>
        </Link>
      </div>
    );
  }

  // Mock lessons
  const lessons = Array.from({ length: course.lessons }, (_, i) => ({
    id: i + 1,
    title: `Leçon ${i + 1} : ${i < 3 ? "Introduction" : i < 10 ? "Concepts fondamentaux" : "Pratique avancée"}`,
    duration: `${Math.floor(Math.random() * 20 + 5)} min`,
    completed: course.progress ? i < Math.floor(course.lessons * (course.progress / 100)) : false,
  }));

  return (
    <div className="space-y-6">
      <Link to="/explore" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" /> Retour aux cours
      </Link>

      {/* Hero */}
      <div className="rounded-xl bg-card border border-border overflow-hidden">
        <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-info/20 flex items-center justify-center">
          <BookOpen className="h-16 w-16 text-primary/40" />
        </div>
        <div className="p-6 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">{course.level}</Badge>
            <Badge variant="secondary">{course.category}</Badge>
          </div>
          <h1 className="text-2xl font-bold text-foreground">{course.title}</h1>
          <p className="text-muted-foreground">{course.description}</p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{course.duration}</span>
            <span className="flex items-center gap-1.5"><Users className="h-4 w-4" />{course.students} étudiants</span>
            <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-accent text-accent" />{course.rating}</span>
            <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4" />{course.lessons} leçons</span>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-primary text-primary-foreground text-sm">{course.authorAvatar}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-foreground">{course.author}</p>
              <p className="text-xs text-muted-foreground">Instructeur</p>
            </div>
          </div>

          {course.progress !== undefined && (
            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Votre progression</span>
                <span className="font-semibold text-foreground">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2" />
            </div>
          )}

          <div className="flex items-center gap-3 pt-2">
            <Button className="gradient-accent text-accent-foreground font-semibold">
              <Play className="mr-2 h-4 w-4" />
              {course.progress ? "Continuer" : "Commencer"}
            </Button>
            <span className="text-2xl font-bold text-foreground">{course.price} €</span>
          </div>
        </div>
      </div>

      {/* Lessons list */}
      <div className="rounded-xl bg-card border border-border p-6 space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Contenu du cours</h2>
        <div className="space-y-1">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="flex items-center justify-between rounded-lg px-4 py-3 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                {lesson.completed ? (
                  <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                ) : (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-border text-xs text-muted-foreground shrink-0">
                    {lesson.id}
                  </div>
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
