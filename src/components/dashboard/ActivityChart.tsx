import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { activityData } from "@/data/mockData";

export function ActivityChart() {
  return (
    <div className="rounded-xl bg-card p-6 shadow-card border border-border/50 animate-fade-in">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Commandes hebdomadaires</h3>
        <p className="text-sm text-muted-foreground">Nombre de commandes par jour</p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={activityData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 32% 91%)" />
          <XAxis dataKey="day" stroke="hsl(215 16% 47%)" fontSize={12} />
          <YAxis stroke="hsl(215 16% 47%)" fontSize={12} />
          <Tooltip contentStyle={{ backgroundColor: "hsl(0 0% 100%)", border: "1px solid hsl(214 32% 91%)", borderRadius: "8px", fontSize: "13px" }} />
          <Bar dataKey="active" name="Commandes" fill="hsl(222 47% 18%)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
