import { reservations } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Plus, Users, Clock } from "lucide-react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";

const statusStyle: Record<string, string> = {
  confirmed: "bg-success/10 text-success",
  pending: "bg-warning/10 text-warning",
  cancelled: "bg-destructive/10 text-destructive",
};

const statusLabel: Record<string, string> = {
  confirmed: "Confirmée",
  pending: "En attente",
  cancelled: "Annulée",
};

export default function Reservations() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{reservations.length} réservations</p>
        <Button className="gradient-accent text-accent-foreground font-semibold shadow-elevated hover:opacity-90">
          <Plus className="mr-2 h-4 w-4" /> Nouvelle réservation
        </Button>
      </div>

      <div className="rounded-xl bg-card border border-border/50 shadow-card overflow-hidden animate-fade-in">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Client</TableHead>
              <TableHead>Date & Heure</TableHead>
              <TableHead className="hidden md:table-cell">Convives</TableHead>
              <TableHead className="hidden md:table-cell">Table</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="hidden lg:table-cell">Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reservations.map((res) => (
              <TableRow key={res.id} className="hover:bg-secondary/30">
                <TableCell>
                  <p className="text-sm font-medium text-foreground">{res.customerName}</p>
                  <p className="text-xs text-muted-foreground">{res.email}</p>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CalendarDays className="h-3.5 w-3.5 text-muted-foreground" />
                    {res.date}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                    <Clock className="h-3 w-3" />
                    {res.time}
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="h-3.5 w-3.5" /> {res.guests}
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                  N°{res.table}
                </TableCell>
                <TableCell>
                  <Badge className={`${statusStyle[res.status]} border-none text-xs`}>
                    {statusLabel[res.status]}
                  </Badge>
                </TableCell>
                <TableCell className="hidden lg:table-cell text-sm text-muted-foreground">
                  {res.notes || "—"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
