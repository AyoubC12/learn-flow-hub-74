import { useState } from "react";
import { Link } from "react-router-dom";
import { dishes } from "@/data/mockData";
import { Search, Filter, Plus, Star, ShoppingBag, Clock, UtensilsCrossed, Leaf } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const categories = ["Tous", "Viandes", "Poissons", "Végétarien", "Salades", "Pâtisseries"];

export default function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tous");

  const filtered = dishes.filter((d) => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.chef.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "Tous" || d.category === category;
    return matchSearch && matchCat;
  });

  const typeColor = (type: string) => {
    if (type === "Entrée") return "bg-info/10 text-info border-info/20";
    if (type === "Plat") return "bg-accent/10 text-accent border-accent/20";
    if (type === "Dessert") return "bg-success/10 text-success border-success/20";
    return "bg-primary/10 text-primary border-primary/20";
  };

  const statusColor = (status: string) => {
    if (status === "available") return "bg-success/10 text-success";
    if (status === "seasonal") return "bg-warning/10 text-warning";
    return "bg-muted text-muted-foreground";
  };

  return (
    <div className="space-y-6">
      {/* Toolbar */}
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

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((dish, i) => (
          <Link
            to={`/menu/${dish.id}`}
            key={dish.id}
            className="group rounded-xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden animate-fade-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {/* Image placeholder */}
            <div className="h-36 bg-gradient-to-br from-primary/10 via-accent/5 to-warning/10 flex items-center justify-center relative">
              <UtensilsCrossed className="h-10 w-10 text-primary/30" />
              {dish.isVegetarian && (
                <div className="absolute top-2 right-2 bg-success/90 text-success-foreground rounded-full p-1">
                  <Leaf className="h-3.5 w-3.5" />
                </div>
              )}
            </div>

            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className={typeColor(dish.type)}>{dish.type}</Badge>
                <Badge className={`${statusColor(dish.status)} border-none text-xs`}>
                  {dish.status === "available" ? "Disponible" : dish.status === "seasonal" ? "Saisonnier" : "Indisponible"}
                </Badge>
              </div>

              <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors font-display">
                {dish.name}
              </h3>

              <p className="text-xs text-muted-foreground">{dish.chef}</p>

              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{dish.prepTime}</span>
                <span className="flex items-center gap-1"><ShoppingBag className="h-3 w-3" />{dish.orders}</span>
                <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-accent text-accent" />{dish.rating}</span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-lg font-bold text-foreground">{dish.price} €</span>
                <span className="text-xs text-muted-foreground">{dish.category}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
