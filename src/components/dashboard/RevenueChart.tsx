import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { revenueData } from "@/data/mockData";

export function RevenueChart() {
  return (
    <div className="rounded-xl bg-card p-6 shadow-card border border-border/50 animate-fade-in">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Revenus</h3>
          <p className="text-sm text-muted-foreground">6 derniers mois</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-foreground">154 600 €</p>
          <p className="text-sm font-medium text-success">+23.5%</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={revenueData}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(38 92% 50%)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="hsl(38 92% 50%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 32% 91%)" />
          <XAxis dataKey="month" stroke="hsl(215 16% 47%)" fontSize={12} />
          <YAxis stroke="hsl(215 16% 47%)" fontSize={12} tickFormatter={(v) => `${v}€`} />
          <Tooltip
            contentStyle={{ backgroundColor: "hsl(0 0% 100%)", border: "1px solid hsl(214 32% 91%)", borderRadius: "8px", fontSize: "13px" }}
            formatter={(value: number) => [`${value} €`, "Revenus"]}
          />
          <Area type="monotone" dataKey="revenue" stroke="hsl(38 92% 50%)" strokeWidth={2.5} fill="url(#revenueGradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
