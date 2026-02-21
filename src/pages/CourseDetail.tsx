import { useParams, Link } from "react-router-dom";
import { courses } from "@/data/mockData";
import { ArrowLeft, Clock, Users, Star, BookOpen, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === Number(id));

  if (!course) {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-muted-foreground">Cours introuvable</p>
        <Link to="/explore"><Button variant="outline" className="mt-4">Retour aux cours</Button></Link>
      </div>
    );
  }

  const fakeLessons = Array.from({ length: Math.min(course.lessons, 8) }, (_, i) => ({
    id: i + 1,
    title: `Leçon ${i + 1}: ${["Introduction", "Concepts de base", "Mise en pratique", "Projet guidé", "Techniques avancées", "Optimisation", "Tests", "Conclusion"][i] || `Module ${i + 1}`}`,
    duration: `${Math.floor(Math.random() * 20 + 10)} min`,
    completed: course.progress ? i < Math.floor((course.progress / 100) * 8) : false,
  }));

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Link to="/explore" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" /> Retour aux cours
      </Link>

      {/* Hero */}
      <div className="rounded-2xl gradient-primary p-8 text-primary-foreground">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1 space-y-4">
            <div className="flex gap-2">
              <Badge className="bg-accent text-accent-foreground">{course.category}</Badge>
              <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">{course.level}</Badge>
            </div>
            <h1 className="text-3xl font-bold">{course.title}</h1>
            <p className="text-primary-foreground/80">{course.description}</p>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{course.duration}</span>
              <span className="flex items-center gap-1"><Users className="h-4 w-4" />{course.students} étudiants</span>
              <span className="flex items-center gap-1"><Star className="h-4 w-4 text-accent" />{course.rating}</span>
              <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" />{course.lessons} leçons</span>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <Avatar className="h-10 w-10 border-2 border-primary-foreground/20">
                <AvatarFallback className="bg-accent text-accent-foreground text-sm">{course.authorAvatar}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{course.author}</p>
                <p className="text-xs text-primary-foreground/60">Instructeur</p>
              </div>
            </div>
          </div>
          <Card className="w-full md:w-64 shrink-0">
            <CardContent className="p-5 space-y-4 text-center">
              <p className="text-3xl font-bold text-foreground">{course.price} €</p>
              {course.progress !== undefined ? (
                <div className="space-y-2">
                  <Progress value={course.progress} className="h-2" />
                  <p className="text-sm text-muted-foreground">{course.progress}% terminé</p>
                  <Button className="w-full gradient-accent text-accent-foreground">Continuer</Button>
                </div>
              ) : (
                <Button className="w-full gradient-accent text-accent-foreground">S'inscrire</Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Lessons */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Programme du cours</h2>
          <div className="space-y-2">
            {fakeLessons.map(lesson => (
              <div key={lesson.id} className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-secondary transition-colors">
                {lesson.completed ? (
                  <CheckCircle className="h-5 w-5 text-success shrink-0" />
                ) : (
                  <Play className="h-5 w-5 text-muted-foreground shrink-0" />
                )}
                <span className={`flex-1 text-sm ${lesson.completed ? "text-muted-foreground line-through" : "text-foreground"}`}>{lesson.title}</span>
                <span className="text-xs text-muted-foreground">{lesson.duration}</span>
              </div>
            ))}
            {course.lessons > 8 && (
              <p className="text-center text-sm text-muted-foreground pt-2">+ {course.lessons - 8} autres leçons</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
