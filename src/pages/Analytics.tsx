import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { categoryData, revenueData } from "@/data/mockData";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";

const COLORS = [
  "hsl(222 47% 18%)",
  "hsl(38 92% 50%)",
  "hsl(142 71% 45%)",
  "hsl(199 89% 48%)",
  "hsl(340 75% 55%)",
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl bg-card p-6 shadow-card border border-border/50 animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">Répartition des commandes</h3>
          <p className="text-sm text-muted-foreground mb-4">Par catégorie de plats</p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={categoryData} cx="50%" cy="50%" innerRadius={70} outerRadius={110} dataKey="value" paddingAngle={4} strokeWidth={0}>
                {categoryData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "hsl(0 0% 100%)", border: "1px solid hsl(214 32% 91%)", borderRadius: "8px", fontSize: "13px" }} formatter={(value: number) => [`${value}%`, ""]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-xl bg-card p-6 shadow-card border border-border/50 animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">Commandes mensuelles</h3>
          <p className="text-sm text-muted-foreground mb-4">Évolution sur 6 mois</p>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="ordersGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(142 71% 45%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(142 71% 45%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 32% 91%)" />
              <XAxis dataKey="month" stroke="hsl(215 16% 47%)" fontSize={12} />
              <YAxis stroke="hsl(215 16% 47%)" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: "hsl(0 0% 100%)", border: "1px solid hsl(214 32% 91%)", borderRadius: "8px", fontSize: "13px" }} />
              <Area type="monotone" dataKey="orders" name="Commandes" stroke="hsl(142 71% 45%)" strokeWidth={2.5} fill="url(#ordersGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Taux de satisfaction", value: "94%", desc: "+2% vs mois dernier" },
          { label: "Temps moyen de service", value: "22 min", desc: "-3 min vs mois dernier" },
          { label: "Note moyenne des plats", value: "4.7/5", desc: "Basé sur 3 247 avis" },
        ].map((kpi, i) => (
          <div key={i} className="rounded-xl bg-card p-6 shadow-card border border-border/50 text-center animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
            <p className="text-3xl font-bold text-foreground">{kpi.value}</p>
            <p className="text-sm font-medium text-foreground mt-1">{kpi.label}</p>
            <p className="text-xs text-muted-foreground mt-1">{kpi.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
