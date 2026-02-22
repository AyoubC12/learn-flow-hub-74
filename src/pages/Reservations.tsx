import { useState } from "react";
import { reservations } from "@/data/mockData";
import { Search, Plus, CalendarDays, Users, Clock, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const statusStyles: Record<string, string> = {
  confirmee: "bg-success/10 text-success border-success/20",
  en_attente: "bg-warning/10 text-warning border-warning/20",
  annulee: "bg-destructive/10 text-destructive border-destructive/20",
  terminee: "bg-muted text-muted-foreground border-border",
};

const statusLabels: Record<string, string> = {
  confirmee: "Confirmée",
  en_attente: "En attente",
  annulee: "Annulée",
  terminee: "Terminée",
};

export default function ReservationsPage() {
  const [search, setSearch] = useState("");

  const filtered = reservations.filter((r) =>
    r.customerName.toLowerCase().includes(search.toLowerCase()) ||
    r.date.includes(search)
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Rechercher une réservation..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 bg-card" />
        </div>
        <Button className="gradient-accent text-accent-foreground font-semibold shadow-elevated hover:opacity-90">
          <Plus className="mr-2 h-4 w-4" /> Nouvelle réservation
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((res, i) => (
          <div
            key={res.id}
            className="rounded-xl bg-card border border-border/50 shadow-card p-5 space-y-3 hover:shadow-elevated transition-shadow animate-fade-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-foreground">{res.customerName}</h3>
              <Badge variant="outline" className={statusStyles[res.status]}>
                {statusLabels[res.status]}
              </Badge>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span>{res.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{res.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{res.guests} personne{res.guests > 1 ? "s" : ""}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Table {res.tableNumber}</span>
              </div>
            </div>

            {res.notes && (
              <p className="text-xs text-muted-foreground bg-secondary/50 rounded-lg p-2 italic">
                📝 {res.notes}
              </p>
            )}

            <div className="flex gap-2 pt-1">
              <Button size="sm" variant="outline" className="flex-1 text-xs">
                Modifier
              </Button>
              {res.status === "en_attente" && (
                <Button size="sm" className="flex-1 text-xs gradient-accent text-accent-foreground">
                  Confirmer
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
