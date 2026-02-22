import { Users, UtensilsCrossed, TrendingUp, DollarSign } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { RecentCourses } from "@/components/dashboard/RecentCourses";

const stats = [
  { title: "Clients actifs", value: "1 247", change: "+8.3% ce mois", changeType: "positive" as const, icon: Users, gradient: "gradient-primary" },
  { title: "Plats au menu", value: "64", change: "+5 nouveaux", changeType: "positive" as const, icon: UtensilsCrossed, gradient: "gradient-accent" },
  { title: "Taux d'occupation", value: "87%", change: "+12%", changeType: "positive" as const, icon: TrendingUp, gradient: "gradient-success" },
  { title: "Revenus mensuels", value: "34 400 €", change: "+18.2%", changeType: "positive" as const, icon: DollarSign, gradient: "gradient-warm" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={stat.title} style={{ animationDelay: `${i * 100}ms` }}>
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <RevenueChart />
        <ActivityChart />
      </div>

      <div className="grid gap-6 lg:grid-cols-1">
        <RecentCourses />
      </div>
    </div>
  );
}
