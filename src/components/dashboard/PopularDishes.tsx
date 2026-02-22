import { dishes } from "@/data/mockData";
import { Star, ShoppingCart } from "lucide-react";

export function PopularDishes() {
  const popular = [...dishes].sort((a, b) => b.orders - a.orders).slice(0, 5);

  return (
    <div className="rounded-xl bg-card p-6 shadow-card border border-border/50 animate-fade-in">
      <h3 className="text-lg font-semibold text-foreground mb-4">Plats populaires</h3>
      <div className="space-y-3">
        {popular.map((dish) => (
          <div key={dish.id} className="flex items-center gap-4 rounded-lg p-3 hover:bg-secondary/50 transition-colors">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent font-bold text-xs">
              {dish.chefAvatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{dish.name}</p>
              <p className="text-xs text-muted-foreground">{dish.category} · {dish.price} €</p>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <ShoppingCart className="h-3 w-3" />
                {dish.orders}
              </span>
              <span className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-accent text-accent" />
                {dish.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
