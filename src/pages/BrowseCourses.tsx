import { useState } from "react";
import { courses } from "@/data/mockData";
import { Search, Filter, Star, Users, Clock, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const categories = ["Tous", "Développement Web", "Data Science", "Design", "Mobile", "Backend", "DevOps"];

export default function BrowseCourses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tous");

  const published = courses.filter((c) => c.status === "published");
  const filtered = published.filter((c) => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.author.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "Tous" || c.category === category;
    return matchSearch && matchCat;
  });

  const levelColor = (level: string) => {
    if (level === "Débutant") return "bg-success/10 text-success border-success/20";
    if (level === "Intermédiaire") return "bg-info/10 text-info border-info/20";
    return "bg-accent/10 text-accent border-accent/20";
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Catalogue des cours</h1>
        <p className="text-muted-foreground mt-1">Explorez nos formations et commencez à apprendre</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Rechercher un cours..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 bg-card border-border" />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[180px] bg-card">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course, i) => (
          <Link
            to={`/course/${course.id}`}
            key={course.id}
            className="group rounded-xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden animate-fade-in block"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="h-36 bg-gradient-to-br from-primary/10 via-accent/5 to-info/10 flex items-center justify-center">
              <BookOpen className="h-10 w-10 text-primary/30" />
            </div>
            <div className="p-4 space-y-3">
              <Badge variant="outline" className={levelColor(course.level)}>{course.level}</Badge>
              <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors">{course.title}</h3>
              <p className="text-xs text-muted-foreground">{course.author}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{course.duration}</span>
                <span className="flex items-center gap-1"><Users className="h-3 w-3" />{course.students}</span>
                <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-accent text-accent" />{course.rating}</span>
              </div>
              {course.progress !== undefined && (
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Progression</span>
                    <span className="font-medium text-foreground">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-1.5" />
                </div>
              )}
              <div className="flex items-center justify-between pt-1">
                <span className="text-lg font-bold text-foreground">{course.price} €</span>
                <span className="text-xs text-muted-foreground">{course.lessons} leçons</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
