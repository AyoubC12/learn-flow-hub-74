import { Users, UtensilsCrossed, TrendingUp, DollarSign } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { RecentOrders } from "@/components/dashboard/RecentOrders";
import { PopularDishes } from "@/components/dashboard/PopularDishes";

const stats = [
  { title: "Clients totaux", value: "2 847", change: "+12.5% ce mois", changeType: "positive" as const, icon: Users, gradient: "gradient-primary" },
  { title: "Plats au menu", value: "48", change: "+3 nouveaux", changeType: "positive" as const, icon: UtensilsCrossed, gradient: "gradient-accent" },
  { title: "Commandes aujourd'hui", value: "127", change: "+18.2%", changeType: "positive" as const, icon: TrendingUp, gradient: "gradient-success" },
  { title: "Revenus mensuels", value: "34 400 €", change: "+23.5%", changeType: "positive" as const, icon: DollarSign, gradient: "gradient-info" },
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

      <div className="grid gap-6 lg:grid-cols-2">
        <RecentOrders />
        <PopularDishes />
      </div>
    </div>
  );
}
