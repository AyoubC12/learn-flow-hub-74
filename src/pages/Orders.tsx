import { useState } from "react";
import { orders } from "@/data/mockData";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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

const typeLabels: Record<string, string> = {
  sur_place: "Sur place",
  emporter: "À emporter",
  livraison: "Livraison",
};

export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Tous");

  const filtered = orders.filter((o) => {
    const matchSearch = o.customerName.toLowerCase().includes(search.toLowerCase()) || o.id.toString().includes(search);
    const matchStatus = statusFilter === "Tous" || o.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Rechercher une commande..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 bg-card" />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px] bg-card">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Tous">Tous les statuts</SelectItem>
              <SelectItem value="en_attente">En attente</SelectItem>
              <SelectItem value="en_preparation">En préparation</SelectItem>
              <SelectItem value="pret">Prêt</SelectItem>
              <SelectItem value="livre">Livré</SelectItem>
              <SelectItem value="annule">Annulé</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-xl bg-card border border-border/50 shadow-card overflow-hidden animate-fade-in">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>N° Commande</TableHead>
              <TableHead>Client</TableHead>
              <TableHead className="hidden md:table-cell">Articles</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="hidden lg:table-cell">Type</TableHead>
              <TableHead className="hidden lg:table-cell">Heure</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((order) => (
              <TableRow key={order.id} className="hover:bg-secondary/30">
                <TableCell className="font-medium text-foreground">#{order.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                        {order.customerAvatar}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-foreground">{order.customerName}</span>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell text-sm text-muted-foreground max-w-[200px] truncate">
                  {order.items.map(i => `${i.name} x${i.qty}`).join(", ")}
                </TableCell>
                <TableCell className="font-semibold text-foreground">{order.total.toFixed(2)} €</TableCell>
                <TableCell>
                  <Badge className={`${statusStyles[order.status]} border-none text-xs`}>
                    {statusLabels[order.status]}
                  </Badge>
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  <Badge variant="outline" className="text-xs">{typeLabels[order.type]}</Badge>
                </TableCell>
                <TableCell className="hidden lg:table-cell text-sm text-muted-foreground">
                  {order.createdAt.split(" ")[1]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
