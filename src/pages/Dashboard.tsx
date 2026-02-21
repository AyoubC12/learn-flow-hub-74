import { Users, BookOpen, TrendingUp, DollarSign } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { RecentCourses } from "@/components/dashboard/RecentCourses";

const stats = [
  { title: "Utilisateurs totaux", value: "2 847", change: "+12.5% ce mois", changeType: "positive" as const, icon: Users, gradient: "gradient-primary" },
  { title: "Cours actifs", value: "48", change: "+3 nouveaux", changeType: "positive" as const, icon: BookOpen, gradient: "gradient-accent" },
  { title: "Taux de complétion", value: "73%", change: "+5.2%", changeType: "positive" as const, icon: TrendingUp, gradient: "gradient-success" },
  { title: "Revenus mensuels", value: "9 400 €", change: "+23.5%", changeType: "positive" as const, icon: DollarSign, gradient: "gradient-info" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={stat.title} style={{ animationDelay: `${i * 100}ms` }}>
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <RevenueChart />
        <ActivityChart />
      </div>

      {/* Recent */}
      <div className="grid gap-6 lg:grid-cols-1">
        <RecentCourses />
      </div>
    </div>
  );
}
