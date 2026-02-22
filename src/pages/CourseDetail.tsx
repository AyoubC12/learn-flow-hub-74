import { useParams, Link } from "react-router-dom";
import { dishes } from "@/data/mockData";
import { ArrowLeft, Clock, ShoppingBag, Star, UtensilsCrossed, Leaf, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CourseDetail() {
  const { id } = useParams();
  const dish = dishes.find((d) => d.id === Number(id));

  if (!dish) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-bold text-foreground font-display">Plat introuvable</h2>
        <Link to="/menu" className="mt-4 text-accent hover:underline">← Retour au menu</Link>
      </div>
    );
  }

  const ingredients = [
    "Ingrédient principal premium",
    "Herbes fraîches sélectionnées",
    "Huile d'olive extra vierge",
    "Épices maison",
    "Garniture de saison",
    "Sauce signature du chef",
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <Link to="/menu" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" /> Retour au menu
      </Link>

      {/* Header */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">{dish.type}</Badge>
            <Badge variant="outline">{dish.category}</Badge>
            {dish.isVegetarian && (
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                <Leaf className="h-3 w-3 mr-1" /> Végétarien
              </Badge>
            )}
          </div>
          <h1 className="text-3xl font-bold text-foreground font-display">{dish.name}</h1>
          <p className="text-muted-foreground">{dish.description}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{dish.prepTime}</span>
            <span className="flex items-center gap-1"><ShoppingBag className="h-4 w-4" />{dish.orders} commandes</span>
            <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-accent text-accent" />{dish.rating}</span>
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

        {/* Sidebar card */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-elevated space-y-4">
          <div className="h-40 rounded-xl bg-gradient-to-br from-primary/10 via-accent/5 to-warning/10 flex items-center justify-center">
            <UtensilsCrossed className="h-12 w-12 text-accent" />
          </div>
          <p className="text-3xl font-bold text-foreground font-display">{dish.price} €</p>
          <Button className="w-full gradient-accent text-accent-foreground font-semibold shadow-elevated">
            Commander ce plat
          </Button>
        </div>
      </div>

      {/* Ingredients */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
        <h2 className="text-lg font-semibold text-foreground mb-4 font-display">Ingrédients & Composition</h2>
        <div className="divide-y divide-border">
          {ingredients.map((ing, i) => (
            <div key={i} className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <Flame className="h-4 w-4 text-accent" />
                <span className="text-sm text-foreground">{ing}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
