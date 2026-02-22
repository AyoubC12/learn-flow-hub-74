import { orders } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const statusStyles: Record<string, string> = {
  en_attente: "bg-warning/10 text-warning",
  en_preparation: "bg-info/10 text-info",
  pret: "bg-success/10 text-success",
  livre: "bg-muted text-muted-foreground",
  annule: "bg-destructive/10 text-destructive",
};

const statusLabels: Record<string, string> = {
  en_attente: "En attente",
  en_preparation: "En préparation",
  pret: "Prêt",
  livre: "Livré",
  annule: "Annulé",
};

export function RecentOrders() {
  return (
    <div className="rounded-xl bg-card p-6 shadow-card border border-border/50 animate-fade-in">
      <h3 className="text-lg font-semibold text-foreground mb-4">Commandes récentes</h3>
      <div className="space-y-3">
        {orders.slice(0, 5).map((order) => (
          <div key={order.id} className="flex items-center gap-4 rounded-lg p-3 hover:bg-secondary/50 transition-colors">
            <Avatar className="h-9 w-9">
              <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                {order.customerAvatar}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{order.customerName}</p>
              <p className="text-xs text-muted-foreground truncate">
                {order.items.map(i => i.name).join(", ")}
              </p>
            </div>
            <div className="text-right space-y-1">
              <p className="text-sm font-semibold text-foreground">{order.total.toFixed(2)} €</p>
              <Badge className={`${statusStyles[order.status]} border-none text-xs`}>
                {statusLabels[order.status]}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
