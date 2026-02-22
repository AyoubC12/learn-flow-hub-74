import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function Settings() {
  return (
    <div className="max-w-2xl space-y-8 animate-fade-in">
      <section className="rounded-xl bg-card p-6 shadow-card border border-border/50 space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Profil du restaurant</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Nom du restaurant</Label>
            <Input defaultValue="RestoManager" className="bg-secondary border-none" />
          </div>
          <div className="space-y-2">
            <Label>Email de contact</Label>
            <Input defaultValue="contact@restomanager.com" className="bg-secondary border-none" />
          </div>
          <div className="space-y-2">
            <Label>Téléphone</Label>
            <Input defaultValue="+33 1 23 45 67 89" className="bg-secondary border-none" />
          </div>
          <div className="space-y-2">
            <Label>Adresse</Label>
            <Input defaultValue="12 Rue de la Paix, 75002 Paris" className="bg-secondary border-none" />
          </div>
        </div>
        <Button className="gradient-accent text-accent-foreground font-semibold hover:opacity-90">Sauvegarder</Button>
      </section>

      <Separator />

      <section className="rounded-xl bg-card p-6 shadow-card border border-border/50 space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Notifications</h3>
        {[
          { label: "Nouvelles commandes", desc: "Alerte à chaque nouvelle commande" },
          { label: "Réservations", desc: "Notification pour chaque réservation" },
          { label: "Rapports quotidiens", desc: "Résumé d'activité chaque soir" },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between py-2">
            <div>
              <p className="text-sm font-medium text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
            <Switch defaultChecked={i < 2} />
          </div>
        ))}
      </section>

      <Separator />

      <section className="rounded-xl bg-card p-6 shadow-card border border-border/50 space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Sécurité</h3>
        <div className="space-y-2">
          <Label>Mot de passe actuel</Label>
          <Input type="password" className="bg-secondary border-none" />
        </div>
        <div className="space-y-2">
          <Label>Nouveau mot de passe</Label>
          <Input type="password" className="bg-secondary border-none" />
        </div>
        <Button variant="outline">Changer le mot de passe</Button>
      </section>
    </div>
  );
}
