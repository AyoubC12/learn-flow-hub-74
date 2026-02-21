import { Bell, BookOpen, Users, AlertCircle, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const notifications = [
  { id: 1, type: "course", icon: BookOpen, title: "Nouveau cours publié", desc: "\"React Avancé\" a été publié par Marie Dupont", time: "Il y a 2h", read: false },
  { id: 2, type: "user", icon: Users, title: "Nouvel utilisateur inscrit", desc: "Gabrielle Simon a rejoint la plateforme", time: "Il y a 4h", read: false },
  { id: 3, type: "alert", icon: AlertCircle, title: "Erreur de paiement", desc: "Le paiement de David Roux a échoué", time: "Il y a 6h", read: false },
  { id: 4, type: "success", icon: CheckCircle, title: "Cours complété", desc: "Clara Petit a terminé \"UI/UX Design Fondamentaux\"", time: "Il y a 1j", read: true },
  { id: 5, type: "user", icon: Users, title: "Nouvel utilisateur inscrit", desc: "Hugo Faure a rejoint la plateforme", time: "Il y a 2j", read: true },
  { id: 6, type: "course", icon: BookOpen, title: "Cours mis à jour", desc: "\"Python pour la Data Science\" a été mis à jour", time: "Il y a 3j", read: true },
];

const typeStyles: Record<string, string> = {
  course: "bg-info/10 text-info",
  user: "bg-primary/10 text-primary",
  alert: "bg-destructive/10 text-destructive",
  success: "bg-success/10 text-success",
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
