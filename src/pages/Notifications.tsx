import { UtensilsCrossed, Users, AlertCircle, CheckCircle, CalendarDays } from "lucide-react";

const notifications = [
  { id: 1, type: "reservation", icon: CalendarDays, title: "Nouvelle réservation", desc: "Alice Moreau — 4 personnes le 22/02 à 19h30", time: "Il y a 2h", read: false },
  { id: 2, type: "order", icon: UtensilsCrossed, title: "Nouvelle commande", desc: "Table N°3 — Tartare de Saumon, Risotto aux Cèpes", time: "Il y a 4h", read: false },
  { id: 3, type: "alert", icon: AlertCircle, title: "Stock faible", desc: "Le stock de homard est bientôt épuisé", time: "Il y a 6h", read: false },
  { id: 4, type: "success", icon: CheckCircle, title: "Commande servie", desc: "Table N°5 — Filet de Bœuf Rossini servi avec succès", time: "Il y a 1j", read: true },
  { id: 5, type: "user", icon: Users, title: "Nouvel utilisateur", desc: "Hugo Faure s'est inscrit sur la plateforme", time: "Il y a 2j", read: true },
  { id: 6, type: "order", icon: UtensilsCrossed, title: "Menu mis à jour", desc: "Le plat 'Homard Thermidor' est passé en saisonnier", time: "Il y a 3j", read: true },
];

const typeStyles: Record<string, string> = {
  reservation: "bg-info/10 text-info",
  order: "bg-accent/10 text-accent",
  alert: "bg-destructive/10 text-destructive",
  success: "bg-success/10 text-success",
  user: "bg-primary/10 text-primary",
};

export default function Notifications() {
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{unread} non lue{unread > 1 ? "s" : ""}</p>
        <button className="text-sm font-medium text-accent hover:underline">Tout marquer comme lu</button>
      </div>

      <div className="space-y-2">
        {notifications.map((notif, i) => {
          const Icon = notif.icon;
          return (
            <div
              key={notif.id}
              className={`flex items-start gap-4 rounded-xl p-4 transition-colors animate-fade-in ${
                notif.read ? "bg-card" : "bg-accent/5 border border-accent/10"
              }`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${typeStyles[notif.type]}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-foreground">{notif.title}</p>
                  {!notif.read && <span className="h-2 w-2 rounded-full bg-accent" />}
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">{notif.desc}</p>
                <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
