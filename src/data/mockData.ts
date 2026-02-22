// ===== Restaurant Management Platform - Mock Data =====

export interface Dish {
  id: number;
  name: string;
  description: string;
  category: string;
  chef: string;
  chefAvatar: string;
  image: string;
  preparationTime: string;
  orders: number;
  rating: number;
  price: number;
  spiceLevel: "Doux" | "Moyen" | "Épicé";
  status: "disponible" | "indisponible" | "nouveau";
  calories: number;
  allergens: string[];
  createdAt: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  avatar: string;
  ordersCount: number;
  joinedAt: string;
  status: "active" | "inactive";
  lastActive: string;
  phone: string;
}

export interface Order {
  id: number;
  customerName: string;
  customerAvatar: string;
  items: { name: string; qty: number; price: number }[];
  total: number;
  status: "en_attente" | "en_preparation" | "pret" | "livre" | "annule";
  createdAt: string;
  tableNumber?: number;
  type: "sur_place" | "emporter" | "livraison";
}

export interface Reservation {
  id: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  date: string;
  time: string;
  guests: number;
  tableNumber: number;
  status: "confirmee" | "en_attente" | "annulee" | "terminee";
  notes: string;
}

export interface StatCard {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: string;
}

export const dishes: Dish[] = [
  { id: 1, name: "Filet de Bœuf Rossini", description: "Filet de bœuf, foie gras poêlé, sauce aux truffes, purée de pommes de terre.", category: "Plats principaux", chef: "Chef Antoine", chefAvatar: "CA", image: "", preparationTime: "25 min", orders: 1245, rating: 4.9, price: 38.50, spiceLevel: "Doux", status: "disponible", calories: 680, allergens: ["gluten", "lactose"], createdAt: "2025-01-15" },
  { id: 2, name: "Salade César Classique", description: "Laitue romaine, parmesan, croûtons, sauce César maison.", category: "Entrées", chef: "Chef Marie", chefAvatar: "CM", image: "", preparationTime: "10 min", orders: 2340, rating: 4.7, price: 14.90, spiceLevel: "Doux", status: "disponible", calories: 320, allergens: ["gluten", "lactose", "œufs"], createdAt: "2025-02-01" },
  { id: 3, name: "Risotto aux Champignons", description: "Riz arborio, cèpes, parmesan, beurre, vin blanc.", category: "Plats principaux", chef: "Chef Sophie", chefAvatar: "CS", image: "", preparationTime: "30 min", orders: 890, rating: 4.8, price: 22.00, spiceLevel: "Doux", status: "disponible", calories: 520, allergens: ["lactose"], createdAt: "2025-01-20" },
  { id: 4, name: "Pad Thaï aux Crevettes", description: "Nouilles de riz, crevettes, cacahuètes, sauce tamarin, citron vert.", category: "Plats principaux", chef: "Chef Pierre", chefAvatar: "CP", image: "", preparationTime: "20 min", orders: 1567, rating: 4.6, price: 18.50, spiceLevel: "Moyen", status: "disponible", calories: 480, allergens: ["crustacés", "arachides"], createdAt: "2024-12-10" },
  { id: 5, name: "Tiramisu Maison", description: "Mascarpone, biscuits imbibés de café, cacao amer.", category: "Desserts", chef: "Chef Amina", chefAvatar: "CA2", image: "", preparationTime: "15 min", orders: 678, rating: 4.5, price: 9.50, spiceLevel: "Doux", status: "nouveau", calories: 380, allergens: ["gluten", "lactose", "œufs"], createdAt: "2025-02-10" },
  { id: 6, name: "Saumon Grillé", description: "Saumon de l'Atlantique, sauce citronnée, légumes grillés.", category: "Plats principaux", chef: "Chef Lucas", chefAvatar: "CL", image: "", preparationTime: "22 min", orders: 1102, rating: 4.7, price: 26.00, spiceLevel: "Doux", status: "disponible", calories: 420, allergens: ["poisson"], createdAt: "2025-01-05" },
  { id: 7, name: "Soupe à l'Oignon", description: "Oignons caramélisés, bouillon de bœuf, gruyère gratiné.", category: "Entrées", chef: "Chef Antoine", chefAvatar: "CA", image: "", preparationTime: "15 min", orders: 432, rating: 4.4, price: 11.50, spiceLevel: "Doux", status: "disponible", calories: 280, allergens: ["gluten", "lactose"], createdAt: "2024-11-20" },
  { id: 8, name: "Burger Wagyu", description: "Steak Wagyu, cheddar affiné, bacon, sauce secrète, brioche artisanale.", category: "Plats principaux", chef: "Chef Marie", chefAvatar: "CM", image: "", preparationTime: "18 min", orders: 3210, rating: 4.8, price: 24.90, spiceLevel: "Moyen", status: "disponible", calories: 750, allergens: ["gluten", "lactose", "œufs"], createdAt: "2024-10-15" },
];

export const users: User[] = [
  { id: 1, name: "Alice Moreau", email: "alice@example.com", role: "admin", avatar: "AM", ordersCount: 15, joinedAt: "2024-06-15", status: "active", lastActive: "2025-02-20", phone: "+33 6 12 34 56 78" },
  { id: 2, name: "Bob Lefevre", email: "bob@example.com", role: "user", avatar: "BL", ordersCount: 8, joinedAt: "2024-08-22", status: "active", lastActive: "2025-02-19", phone: "+33 6 23 45 67 89" },
  { id: 3, name: "Clara Petit", email: "clara@example.com", role: "user", avatar: "CP", ordersCount: 22, joinedAt: "2024-05-10", status: "active", lastActive: "2025-02-18", phone: "+33 6 34 56 78 90" },
  { id: 4, name: "David Roux", email: "david@example.com", role: "user", avatar: "DR", ordersCount: 5, joinedAt: "2024-11-03", status: "inactive", lastActive: "2025-01-15", phone: "+33 6 45 67 89 01" },
  { id: 5, name: "Emma Blanc", email: "emma@example.com", role: "user", avatar: "EB", ordersCount: 12, joinedAt: "2024-09-17", status: "active", lastActive: "2025-02-20", phone: "+33 6 56 78 90 12" },
  { id: 6, name: "François Noir", email: "francois@example.com", role: "admin", avatar: "FN", ordersCount: 30, joinedAt: "2024-04-01", status: "active", lastActive: "2025-02-21", phone: "+33 6 67 89 01 23" },
  { id: 7, name: "Gabrielle Simon", email: "gabrielle@example.com", role: "user", avatar: "GS", ordersCount: 3, joinedAt: "2025-01-08", status: "active", lastActive: "2025-02-17", phone: "+33 6 78 90 12 34" },
  { id: 8, name: "Hugo Faure", email: "hugo@example.com", role: "user", avatar: "HF", ordersCount: 7, joinedAt: "2024-12-25", status: "inactive", lastActive: "2025-01-30", phone: "+33 6 89 01 23 45" },
];

export const orders: Order[] = [
  { id: 1001, customerName: "Alice Moreau", customerAvatar: "AM", items: [{ name: "Filet de Bœuf Rossini", qty: 1, price: 38.50 }, { name: "Tiramisu Maison", qty: 2, price: 9.50 }], total: 57.50, status: "en_preparation", createdAt: "2025-02-21 12:30", tableNumber: 5, type: "sur_place" },
  { id: 1002, customerName: "Bob Lefevre", customerAvatar: "BL", items: [{ name: "Pad Thaï aux Crevettes", qty: 1, price: 18.50 }, { name: "Salade César", qty: 1, price: 14.90 }], total: 33.40, status: "pret", createdAt: "2025-02-21 12:15", type: "emporter" },
  { id: 1003, customerName: "Clara Petit", customerAvatar: "CP", items: [{ name: "Burger Wagyu", qty: 2, price: 24.90 }, { name: "Saumon Grillé", qty: 1, price: 26.00 }], total: 75.80, status: "en_attente", createdAt: "2025-02-21 12:45", tableNumber: 12, type: "sur_place" },
  { id: 1004, customerName: "David Roux", customerAvatar: "DR", items: [{ name: "Risotto aux Champignons", qty: 1, price: 22.00 }], total: 22.00, status: "livre", createdAt: "2025-02-21 11:30", type: "livraison" },
  { id: 1005, customerName: "Emma Blanc", customerAvatar: "EB", items: [{ name: "Soupe à l'Oignon", qty: 1, price: 11.50 }, { name: "Filet de Bœuf Rossini", qty: 1, price: 38.50 }], total: 50.00, status: "en_preparation", createdAt: "2025-02-21 13:00", tableNumber: 8, type: "sur_place" },
  { id: 1006, customerName: "François Noir", customerAvatar: "FN", items: [{ name: "Salade César", qty: 2, price: 14.90 }, { name: "Tiramisu Maison", qty: 2, price: 9.50 }], total: 48.80, status: "annule", createdAt: "2025-02-20 19:30", type: "emporter" },
];

export const reservations: Reservation[] = [
  { id: 1, customerName: "Sophie Martin", customerEmail: "sophie@email.com", customerPhone: "+33 6 11 22 33 44", date: "2025-02-22", time: "19:30", guests: 4, tableNumber: 3, status: "confirmee", notes: "Anniversaire, prévoir gâteau" },
  { id: 2, customerName: "Lucas Bernard", customerEmail: "lucas@email.com", customerPhone: "+33 6 22 33 44 55", date: "2025-02-22", time: "20:00", guests: 2, tableNumber: 7, status: "confirmee", notes: "" },
  { id: 3, customerName: "Marie Dubois", customerEmail: "marie@email.com", customerPhone: "+33 6 33 44 55 66", date: "2025-02-22", time: "20:30", guests: 6, tableNumber: 10, status: "en_attente", notes: "Végétarien x2" },
  { id: 4, customerName: "Jean Moreau", customerEmail: "jean@email.com", customerPhone: "+33 6 44 55 66 77", date: "2025-02-23", time: "12:00", guests: 3, tableNumber: 5, status: "confirmee", notes: "Allergie aux noix" },
  { id: 5, customerName: "Camille Leroy", customerEmail: "camille@email.com", customerPhone: "+33 6 55 66 77 88", date: "2025-02-23", time: "19:00", guests: 8, tableNumber: 15, status: "en_attente", notes: "Repas d'affaires" },
  { id: 6, customerName: "Pierre Dupont", customerEmail: "pierre@email.com", customerPhone: "+33 6 66 77 88 99", date: "2025-02-21", time: "20:00", guests: 2, tableNumber: 2, status: "terminee", notes: "" },
  { id: 7, customerName: "Anne Richard", customerEmail: "anne@email.com", customerPhone: "+33 6 77 88 99 00", date: "2025-02-20", time: "19:30", guests: 5, tableNumber: 9, status: "annulee", notes: "Annulé par le client" },
];

export const revenueData = [
  { month: "Sep", revenue: 18200, orders: 420 },
  { month: "Oct", revenue: 22800, orders: 510 },
  { month: "Nov", revenue: 19900, orders: 460 },
  { month: "Déc", revenue: 31200, orders: 720 },
  { month: "Jan", revenue: 28100, orders: 650 },
  { month: "Fév", revenue: 34400, orders: 790 },
];

export const categoryData = [
  { name: "Plats principaux", value: 42 },
  { name: "Entrées", value: 22 },
  { name: "Desserts", value: 18 },
  { name: "Boissons", value: 12 },
  { name: "Végétarien", value: 6 },
];

export const activityData = [
  { day: "Lun", active: 145 },
  { day: "Mar", active: 178 },
  { day: "Mer", active: 189 },
  { day: "Jeu", active: 210 },
  { day: "Ven", active: 298 },
  { day: "Sam", active: 356 },
  { day: "Dim", active: 312 },
];
