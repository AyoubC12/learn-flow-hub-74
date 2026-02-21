import { useParams, Link } from "react-router-dom";
import { courses } from "@/data/mockData";
import { ArrowLeft, Clock, Users, Star, BookOpen, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Cours introuvable</h2>
        <Link to="/browse">
          <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" /> Retour aux cours</Button>
        </Link>
      </div>
    );
  }

  const fakeLessons = Array.from({ length: course.lessons }, (_, i) => ({
    id: i + 1,
    title: `Leçon ${i + 1} : ${i < 3 ? "Introduction" : i < 8 ? "Concepts clés" : "Pratique avancée"} ${i + 1}`,
    duration: `${Math.floor(Math.random() * 15 + 5)} min`,
    completed: course.progress ? i < Math.floor((course.progress / 100) * course.lessons) : false,
  }));

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Link to="/browse" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" /> Retour aux cours
      </Link>

      {/* Hero */}
      <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-info/10 p-8 space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-accent/10 text-accent border-accent/20">{course.level}</Badge>
          <Badge variant="outline">{course.category}</Badge>
        </div>
        <h1 className="text-3xl font-bold text-foreground">{course.title}</h1>
        <p className="text-muted-foreground text-lg">{course.description}</p>

        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-primary-foreground text-xs">{course.authorAvatar}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-foreground">{course.author}</span>
          </div>
          <span className="flex items-center gap-1 text-sm text-muted-foreground"><Clock className="h-4 w-4" />{course.duration}</span>
          <span className="flex items-center gap-1 text-sm text-muted-foreground"><Users className="h-4 w-4" />{course.students} étudiants</span>
          <span className="flex items-center gap-1 text-sm text-muted-foreground"><Star className="h-4 w-4 fill-accent text-accent" />{course.rating}</span>
          <span className="flex items-center gap-1 text-sm text-muted-foreground"><BookOpen className="h-4 w-4" />{course.lessons} leçons</span>
        </div>

        {course.progress !== undefined && (
          <div className="space-y-2 max-w-md">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Votre progression</span>
              <span className="font-semibold text-foreground">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        )}

        <div className="flex items-center gap-4 pt-2">
          <span className="text-3xl font-bold text-foreground">{course.price} €</span>
          <Button className="gradient-accent text-accent-foreground font-semibold px-8 h-11">
            <Play className="mr-2 h-4 w-4" />
            {course.progress ? "Continuer" : "Commencer"}
          </Button>
        </div>
      </div>

      {/* Lessons */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Contenu du cours</h2>
        <div className="space-y-2">
          {fakeLessons.map((lesson) => (
            <div
              key={lesson.id}
              className={`flex items-center justify-between rounded-xl border p-4 transition-all hover:shadow-card cursor-pointer ${
                lesson.completed ? "bg-success/5 border-success/20" : "bg-card border-border"
              }`}
            >
              <div className="flex items-center gap-3">
                {lesson.completed ? (
                  <CheckCircle className="h-5 w-5 text-success shrink-0" />
                ) : (
                  <Play className="h-5 w-5 text-muted-foreground shrink-0" />
                )}
                <span className={`text-sm font-medium ${lesson.completed ? "text-success" : "text-foreground"}`}>
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
