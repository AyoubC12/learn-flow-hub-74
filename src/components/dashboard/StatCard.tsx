import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  gradient: string;
}

export function StatCard({ title, value, change, changeType, icon: Icon, gradient }: StatCardProps) {
  return (
    <div className="rounded-xl bg-card p-6 shadow-card border border-border/50 hover:shadow-elevated transition-shadow duration-300 animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground animate-count-up">{value}</p>
          <p className={`text-sm font-medium ${
            changeType === "positive" ? "text-success" : changeType === "negative" ? "text-destructive" : "text-muted-foreground"
          }`}>
            {change}
          </p>
        </div>
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${gradient}`}>
          <Icon className="h-6 w-6 text-accent-foreground" />
        </div>
      </div>
    </div>
  );
}
