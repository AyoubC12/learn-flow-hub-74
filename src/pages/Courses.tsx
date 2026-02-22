import { useState } from "react";
import { Link } from "react-router-dom";
import { dishes } from "@/data/mockData";
import { Search, Filter, Plus, Star, ShoppingCart, Clock, UtensilsCrossed, Flame } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const categories = ["Tous", "Entrées", "Plats principaux", "Desserts", "Boissons"];

export default function MenuPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tous");

  const filtered = dishes.filter((d) => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.chef.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "Tous" || d.category === category;
    return matchSearch && matchCat;
  });

  const spiceColor = (level: string) => {
    if (level === "Doux") return "bg-success/10 text-success border-success/20";
    if (level === "Moyen") return "bg-warning/10 text-warning border-warning/20";
    return "bg-destructive/10 text-destructive border-destructive/20";
  };

  const statusColor = (status: string) => {
    if (status === "disponible") return "bg-success/10 text-success";
    if (status === "nouveau") return "bg-info/10 text-info";
    return "bg-muted text-muted-foreground";
  };

  const statusLabel = (status: string) => {
    if (status === "disponible") return "Disponible";
    if (status === "nouveau") return "Nouveau";
    return "Indisponible";
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Rechercher un plat..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 bg-card border-border" />
          </div>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[180px] bg-card">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button className="gradient-accent text-accent-foreground font-semibold shadow-elevated hover:opacity-90 transition-opacity">
          <Plus className="mr-2 h-4 w-4" /> Ajouter un plat
        </Button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((dish, i) => (
          <Link
            to={`/menu/${dish.id}`}
            key={dish.id}
            className="group rounded-xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden animate-fade-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="h-36 bg-gradient-to-br from-accent/10 via-primary/5 to-info/10 flex items-center justify-center">
              <UtensilsCrossed className="h-10 w-10 text-accent/30" />
            </div>

            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className={spiceColor(dish.spiceLevel)}>
                  <Flame className="h-3 w-3 mr-1" />
                  {dish.spiceLevel}
                </Badge>
                <Badge className={`${statusColor(dish.status)} border-none text-xs`}>
                  {statusLabel(dish.status)}
                </Badge>
              </div>

              <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
                {dish.name}
              </h3>

              <p className="text-xs text-muted-foreground line-clamp-2">{dish.description}</p>

              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{dish.preparationTime}</span>
                <span className="flex items-center gap-1"><ShoppingCart className="h-3 w-3" />{dish.orders}</span>
                <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-accent text-accent" />{dish.rating}</span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-lg font-bold text-foreground">{dish.price} €</span>
                <span className="text-xs text-muted-foreground">{dish.calories} cal</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
