import { useParams, Link } from "react-router-dom";
import { dishes } from "@/data/mockData";
import { ArrowLeft, Clock, ShoppingCart, Star, UtensilsCrossed, Flame, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function DishDetail() {
  const { id } = useParams();
  const dish = dishes.find((d) => d.id === Number(id));

  if (!dish) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-bold text-foreground">Plat introuvable</h2>
        <Link to="/menu" className="mt-4 text-accent hover:underline">← Retour au menu</Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <Link to="/menu" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" /> Retour au menu
      </Link>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
              <Flame className="h-3 w-3 mr-1" />{dish.spiceLevel}
            </Badge>
            <Badge variant="outline">{dish.category}</Badge>
            {dish.allergens.map((a) => (
              <Badge key={a} variant="outline" className="bg-destructive/5 text-destructive border-destructive/20 text-xs">
                <AlertTriangle className="h-3 w-3 mr-1" />{a}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl font-bold text-foreground">{dish.name}</h1>
          <p className="text-muted-foreground">{dish.description}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{dish.preparationTime}</span>
            <span className="flex items-center gap-1"><ShoppingCart className="h-4 w-4" />{dish.orders} commandes</span>
            <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-accent text-accent" />{dish.rating}</span>
            <span>{dish.calories} calories</span>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-primary-foreground font-bold text-sm">
              {dish.chefAvatar}
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{dish.chef}</p>
              <p className="text-xs text-muted-foreground">Chef cuisinier</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-elevated space-y-4">
          <div className="h-40 rounded-xl bg-gradient-to-br from-accent/10 via-primary/5 to-info/10 flex items-center justify-center">
            <UtensilsCrossed className="h-12 w-12 text-accent" />
          </div>
          <p className="text-3xl font-bold text-foreground">{dish.price} €</p>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>Préparation : {dish.preparationTime}</p>
            <p>Calories : {dish.calories} cal</p>
          </div>
          <Button className="w-full gradient-accent text-accent-foreground font-semibold shadow-elevated">
            Commander ce plat
          </Button>
        </div>
      </div>

      {/* Ingredients section placeholder */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
        <h2 className="text-lg font-semibold text-foreground mb-4">Informations complémentaires</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-secondary/50 p-4 text-center">
            <p className="text-2xl font-bold text-foreground">{dish.preparationTime}</p>
            <p className="text-sm text-muted-foreground">Temps de préparation</p>
          </div>
          <div className="rounded-lg bg-secondary/50 p-4 text-center">
            <p className="text-2xl font-bold text-foreground">{dish.calories}</p>
            <p className="text-sm text-muted-foreground">Calories</p>
          </div>
          <div className="rounded-lg bg-secondary/50 p-4 text-center">
            <p className="text-2xl font-bold text-foreground">{dish.orders}</p>
            <p className="text-sm text-muted-foreground">Commandes totales</p>
          </div>
        </div>
      </div>
    </div>
  );
}
