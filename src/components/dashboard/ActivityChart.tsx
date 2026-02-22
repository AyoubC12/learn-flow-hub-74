import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { activityData } from "@/data/mockData";

export function ActivityChart() {
  return (
    <div className="rounded-xl bg-card p-6 shadow-card border border-border/50 animate-fade-in">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground font-display">Fréquentation hebdomadaire</h3>
        <p className="text-sm text-muted-foreground">Couverts servis par jour</p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={activityData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(30 15% 88%)" />
          <XAxis dataKey="day" stroke="hsl(20 10% 45%)" fontSize={12} />
          <YAxis stroke="hsl(20 10% 45%)" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(0 0% 100%)",
              border: "1px solid hsl(30 15% 88%)",
              borderRadius: "8px",
              fontSize: "13px",
            }}
          />
          <Bar dataKey="active" name="Couverts" fill="hsl(20 25% 12%)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
