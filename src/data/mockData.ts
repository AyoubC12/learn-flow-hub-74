// === Données mock pour la plateforme de gestion de restaurants ===

export interface Dish {
  id: number;
  name: string;
  description: string;
  category: string;
  chef: string;
  chefAvatar: string;
  image: string;
  prepTime: string;
  orders: number;
  rating: number;
  price: number;
  type: "Entrée" | "Plat" | "Dessert" | "Boisson";
  status: "available" | "unavailable" | "seasonal";
  isVegetarian: boolean;
  createdAt: string;
}

export interface Reservation {
  id: number;
  customerName: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  status: "confirmed" | "pending" | "cancelled";
  table: number;
  notes?: string;
}

export interface Order {
  id: number;
  customerName: string;
  items: string[];
  total: number;
  status: "preparing" | "ready" | "served" | "cancelled";
  createdAt: string;
  table: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  avatar: string;
  reservations: number;
  joinedAt: string;
  status: "active" | "inactive";
  lastActive: string;
}

export interface StatCard {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: string;
}

export const dishes: Dish[] = [
  { id: 1, name: "Filet de Bœuf Rossini", description: "Filet de bœuf poêlé, foie gras, truffe noire et sauce Périgueux.", category: "Viandes", chef: "Chef Antoine", chefAvatar: "CA", image: "", prepTime: "25 min", orders: 845, rating: 4.9, price: 38.00, type: "Plat", status: "available", isVegetarian: false, createdAt: "2025-01-15" },
  { id: 2, name: "Risotto aux Cèpes", description: "Risotto crémeux aux cèpes frais, parmesan et huile de truffe.", category: "Végétarien", chef: "Chef Marie", chefAvatar: "CM", image: "", prepTime: "20 min", orders: 1230, rating: 4.8, price: 24.00, type: "Plat", status: "available", isVegetarian: true, createdAt: "2025-02-01" },
  { id: 3, name: "Tartare de Saumon", description: "Saumon frais mariné, avocat, sésame et sauce ponzu.", category: "Poissons", chef: "Chef Sophie", chefAvatar: "CS", image: "", prepTime: "15 min", orders: 967, rating: 4.7, price: 18.00, type: "Entrée", status: "available", isVegetarian: false, createdAt: "2025-01-20" },
  { id: 4, name: "Tarte Tatin", description: "Tarte aux pommes caramélisées, glace vanille bourbon.", category: "Pâtisseries", chef: "Chef Pierre", chefAvatar: "CP", image: "", prepTime: "30 min", orders: 654, rating: 4.6, price: 12.00, type: "Dessert", status: "available", isVegetarian: true, createdAt: "2024-12-10" },
  { id: 5, name: "Homard Thermidor", description: "Demi-homard gratiné, sauce crémeuse à la moutarde et gruyère.", category: "Poissons", chef: "Chef Antoine", chefAvatar: "CA", image: "", prepTime: "35 min", orders: 423, rating: 4.9, price: 52.00, type: "Plat", status: "seasonal", isVegetarian: false, createdAt: "2025-02-10" },
  { id: 6, name: "Salade Niçoise", description: "Thon frais, œuf, olives, tomates, haricots verts et anchois.", category: "Salades", chef: "Chef Marie", chefAvatar: "CM", image: "", prepTime: "10 min", orders: 1102, rating: 4.5, price: 16.00, type: "Entrée", status: "available", isVegetarian: false, createdAt: "2025-01-05" },
  { id: 7, name: "Soufflé au Chocolat", description: "Soufflé aérien au chocolat noir 70%, cœur coulant.", category: "Pâtisseries", chef: "Chef Pierre", chefAvatar: "CP", image: "", prepTime: "25 min", orders: 789, rating: 4.8, price: 14.00, type: "Dessert", status: "available", isVegetarian: true, createdAt: "2024-11-20" },
  { id: 8, name: "Velouté de Butternut", description: "Crème de butternut rôtie, noisettes torréfiées et crème fraîche.", category: "Végétarien", chef: "Chef Sophie", chefAvatar: "CS", image: "", prepTime: "15 min", orders: 534, rating: 4.4, price: 11.00, type: "Entrée", status: "available", isVegetarian: true, createdAt: "2024-10-15" },
];

export const reservations: Reservation[] = [
  { id: 1, customerName: "Alice Moreau", email: "alice@example.com", date: "2025-02-22", time: "19:30", guests: 4, status: "confirmed", table: 5, notes: "Anniversaire" },
  { id: 2, customerName: "Bob Lefevre", email: "bob@example.com", date: "2025-02-22", time: "20:00", guests: 2, status: "pending", table: 3 },
  { id: 3, customerName: "Clara Petit", email: "clara@example.com", date: "2025-02-23", time: "12:30", guests: 6, status: "confirmed", table: 8 },
  { id: 4, customerName: "David Roux", email: "david@example.com", date: "2025-02-23", time: "19:00", guests: 3, status: "cancelled", table: 2 },
  { id: 5, customerName: "Emma Blanc", email: "emma@example.com", date: "2025-02-24", time: "20:30", guests: 2, status: "confirmed", table: 1 },
];

export const orders: Order[] = [
  { id: 1, customerName: "Alice Moreau", items: ["Filet de Bœuf Rossini", "Soufflé au Chocolat"], total: 52.00, status: "served", createdAt: "2025-02-22 19:45", table: 5 },
  { id: 2, customerName: "Bob Lefevre", items: ["Tartare de Saumon", "Risotto aux Cèpes"], total: 42.00, status: "preparing", createdAt: "2025-02-22 20:10", table: 3 },
  { id: 3, customerName: "Clara Petit", items: ["Salade Niçoise", "Homard Thermidor", "Tarte Tatin"], total: 80.00, status: "ready", createdAt: "2025-02-22 12:40", table: 8 },
];

export const users: User[] = [
  { id: 1, name: "Alice Moreau", email: "alice@example.com", role: "admin", avatar: "AM", reservations: 12, joinedAt: "2024-06-15", status: "active", lastActive: "2025-02-22" },
  { id: 2, name: "Bob Lefevre", email: "bob@example.com", role: "user", avatar: "BL", reservations: 5, joinedAt: "2024-08-22", status: "active", lastActive: "2025-02-21" },
  { id: 3, name: "Clara Petit", email: "clara@example.com", role: "user", avatar: "CP", reservations: 8, joinedAt: "2024-05-10", status: "active", lastActive: "2025-02-20" },
  { id: 4, name: "David Roux", email: "david@example.com", role: "user", avatar: "DR", reservations: 2, joinedAt: "2024-11-03", status: "inactive", lastActive: "2025-01-15" },
  { id: 5, name: "Emma Blanc", email: "emma@example.com", role: "user", avatar: "EB", reservations: 6, joinedAt: "2024-09-17", status: "active", lastActive: "2025-02-22" },
  { id: 6, name: "François Noir", email: "francois@example.com", role: "admin", avatar: "FN", reservations: 15, joinedAt: "2024-04-01", status: "active", lastActive: "2025-02-22" },
  { id: 7, name: "Gabrielle Simon", email: "gabrielle@example.com", role: "user", avatar: "GS", reservations: 1, joinedAt: "2025-01-08", status: "active", lastActive: "2025-02-19" },
  { id: 8, name: "Hugo Faure", email: "hugo@example.com", role: "user", avatar: "HF", reservations: 3, joinedAt: "2024-12-25", status: "inactive", lastActive: "2025-01-30" },
];

export const revenueData = [
  { month: "Sep", revenue: 18200, orders: 320 },
  { month: "Oct", revenue: 22800, orders: 410 },
  { month: "Nov", revenue: 19900, orders: 365 },
  { month: "Déc", revenue: 31200, orders: 520 },
  { month: "Jan", revenue: 28100, orders: 480 },
  { month: "Fév", revenue: 34400, orders: 590 },
];

export const categoryData = [
  { name: "Viandes", value: 30 },
  { name: "Poissons", value: 25 },
  { name: "Végétarien", value: 20 },
  { name: "Desserts", value: 15 },
  { name: "Entrées", value: 10 },
];

export const activityData = [
  { day: "Lun", active: 145 },
  { day: "Mar", active: 178 },
  { day: "Mer", active: 212 },
  { day: "Jeu", active: 198 },
  { day: "Ven", active: 289 },
  { day: "Sam", active: 356 },
  { day: "Dim", active: 312 },
];
