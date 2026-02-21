import { useState } from "react";
import { courses } from "@/data/mockData";
import { Search, BookOpen, Clock, Users, Star, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const categories = ["Tous", ...Array.from(new Set(courses.map(c => c.category)))];

export default function Explore() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tous");

  const filtered = courses
    .filter(c => c.status === "published")
    .filter(c => category === "Tous" || c.category === category)
    .filter(c => c.title.toLowerCase().includes(search.toLowerCase()) || c.description.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Explorer les cours</h1>
        <p className="text-muted-foreground mt-1">Découvrez nos formations et commencez à apprendre</p>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Rechercher un cours..." value={search} onChange={e => setSearch(e.target.value)} className="pl-10" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={category === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setCategory(cat)}
              className={category === cat ? "gradient-primary text-primary-foreground" : ""}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(course => (
          <Link key={course.id} to={`/course/${course.id}`}>
            <Card className="group overflow-hidden border-border/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="h-40 gradient-primary flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-primary-foreground/50 group-hover:scale-110 transition-transform" />
              </div>
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">{course.category}</Badge>
                  <Badge variant="outline" className="text-xs">{course.level}</Badge>
                </div>
                <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors">{course.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{course.duration}</span>
                  <span className="flex items-center gap-1"><Users className="h-3 w-3" />{course.students}</span>
                  <span className="flex items-center gap-1"><Star className="h-3 w-3 text-accent" />{course.rating}</span>
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
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-sm font-medium text-muted-foreground">{course.author}</span>
                  <span className="font-bold text-foreground">{course.price} €</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <Filter className="h-12 w-12 mx-auto mb-3 opacity-50" />
          <p className="text-lg font-medium">Aucun cours trouvé</p>
          <p className="text-sm">Essayez de modifier vos critères de recherche</p>
        </div>
      )}
    </div>
  );
}
