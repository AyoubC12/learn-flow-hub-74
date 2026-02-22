import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { categoryData, revenueData } from "@/data/mockData";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";

const COLORS = [
  "hsl(20 25% 12%)",
  "hsl(15 80% 50%)",
  "hsl(152 60% 40%)",
  "hsl(210 70% 50%)",
  "hsl(340 65% 50%)",
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl bg-card p-6 shadow-card border border-border/50 animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2 font-display">Répartition par catégorie</h3>
          <p className="text-sm text-muted-foreground mb-4">Distribution des commandes</p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={categoryData} cx="50%" cy="50%" innerRadius={70} outerRadius={110} dataKey="value" paddingAngle={4} strokeWidth={0}>
                {categoryData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "hsl(0 0% 100%)", border: "1px solid hsl(30 15% 88%)", borderRadius: "8px", fontSize: "13px" }} formatter={(value: number) => [`${value}%`, ""]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-xl bg-card p-6 shadow-card border border-border/50 animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2 font-display">Commandes mensuelles</h3>
          <p className="text-sm text-muted-foreground mb-4">Nombre de commandes par mois</p>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="ordersGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(152 60% 40%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(152 60% 40%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(30 15% 88%)" />
              <XAxis dataKey="month" stroke="hsl(20 10% 45%)" fontSize={12} />
              <YAxis stroke="hsl(20 10% 45%)" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: "hsl(0 0% 100%)", border: "1px solid hsl(30 15% 88%)", borderRadius: "8px", fontSize: "13px" }} />
              <Area type="monotone" dataKey="orders" name="Commandes" stroke="hsl(152 60% 40%)" strokeWidth={2.5} fill="url(#ordersGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Taux d'occupation", value: "87%", desc: "+12% vs mois dernier" },
          { label: "Temps de service moyen", value: "22 min", desc: "-3 min vs mois dernier" },
          { label: "Note moyenne", value: "4.7/5", desc: "Basé sur 892 avis" },
        ].map((kpi, i) => (
          <div key={i} className="rounded-xl bg-card p-6 shadow-card border border-border/50 text-center animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
            <p className="text-3xl font-bold text-foreground font-display">{kpi.value}</p>
            <p className="text-sm font-medium text-foreground mt-1">{kpi.label}</p>
            <p className="text-xs text-muted-foreground mt-1">{kpi.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
