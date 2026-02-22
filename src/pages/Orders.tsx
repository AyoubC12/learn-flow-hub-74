import { orders } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle2, ChefHat, XCircle } from "lucide-react";

const statusConfig: Record<string, { label: string; style: string; icon: any }> = {
  preparing: { label: "En préparation", style: "bg-warning/10 text-warning", icon: ChefHat },
  ready: { label: "Prêt", style: "bg-info/10 text-info", icon: Clock },
  served: { label: "Servi", style: "bg-success/10 text-success", icon: CheckCircle2 },
  cancelled: { label: "Annulé", style: "bg-destructive/10 text-destructive", icon: XCircle },
};

export default function Orders() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">{orders.length} commandes en cours</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {orders.map((order, i) => {
          const config = statusConfig[order.status];
          const StatusIcon = config.icon;
          return (
            <div
              key={order.id}
              className="rounded-xl bg-card border border-border/50 p-5 shadow-card hover:shadow-elevated transition-shadow animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-muted-foreground">#{order.id.toString().padStart(4, "0")}</span>
                <Badge className={`${config.style} border-none text-xs`}>
                  <StatusIcon className="h-3 w-3 mr-1" />
                  {config.label}
                </Badge>
              </div>

              <h4 className="text-sm font-semibold text-foreground mb-1">{order.customerName}</h4>
              <p className="text-xs text-muted-foreground mb-3">Table N°{order.table} · {order.createdAt}</p>

              <div className="space-y-1 mb-3">
                {order.items.map((item, j) => (
                  <p key={j} className="text-sm text-foreground">• {item}</p>
                ))}
              </div>

              <div className="pt-3 border-t border-border flex items-center justify-between">
                <span className="text-lg font-bold text-foreground font-display">{order.total} €</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
