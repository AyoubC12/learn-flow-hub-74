import { courses } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Star, Users } from "lucide-react";

export function RecentCourses() {
  const recent = courses.slice(0, 5);

  return (
    <div className="rounded-xl bg-card p-6 shadow-card border border-border/50 animate-fade-in">
      <h3 className="text-lg font-semibold text-foreground mb-4">Cours populaires</h3>
      <div className="space-y-4">
        {recent.map((course) => (
          <div key={course.id} className="flex items-center gap-4 rounded-lg p-3 hover:bg-secondary/50 transition-colors">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
              {course.authorAvatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{course.title}</p>
              <p className="text-xs text-muted-foreground">{course.author}</p>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                {course.students}
              </span>
              <span className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-accent text-accent" />
                {course.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
