export interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  authorAvatar: string;
  image: string;
  duration: string;
  students: number;
  rating: number;
  progress?: number;
  price: number;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  lessons: number;
  status: "published" | "draft" | "archived";
  createdAt: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  avatar: string;
  coursesEnrolled: number;
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

export const courses: Course[] = [
  { id: 1, title: "React Avancé : Patterns et Performance", description: "Maîtrisez les patterns avancés de React et optimisez vos applications.", category: "Développement Web", author: "Marie Dupont", authorAvatar: "MD", image: "", duration: "12h 30min", students: 1245, rating: 4.8, progress: 65, price: 49.99, level: "Avancé", lessons: 42, status: "published", createdAt: "2025-01-15" },
  { id: 2, title: "Python pour la Data Science", description: "Apprenez Python avec des projets concrets en data science.", category: "Data Science", author: "Jean Martin", authorAvatar: "JM", image: "", duration: "18h 45min", students: 2340, rating: 4.9, progress: 30, price: 59.99, level: "Intermédiaire", lessons: 56, status: "published", createdAt: "2025-02-01" },
  { id: 3, title: "UI/UX Design Fondamentaux", description: "Créez des interfaces utilisateur modernes et accessibles.", category: "Design", author: "Sophie Laurent", authorAvatar: "SL", image: "", duration: "8h 15min", students: 890, rating: 4.7, progress: 100, price: 39.99, level: "Débutant", lessons: 28, status: "published", createdAt: "2025-01-20" },
  { id: 4, title: "Node.js et API REST", description: "Construisez des APIs robustes avec Node.js et Express.", category: "Backend", author: "Pierre Moreau", authorAvatar: "PM", image: "", duration: "14h 00min", students: 1567, rating: 4.6, price: 44.99, level: "Intermédiaire", lessons: 38, status: "published", createdAt: "2024-12-10" },
  { id: 5, title: "Machine Learning avec TensorFlow", description: "Introduction au ML avec TensorFlow et Keras.", category: "Data Science", author: "Amina Benali", authorAvatar: "AB", image: "", duration: "22h 00min", students: 678, rating: 4.5, price: 69.99, level: "Avancé", lessons: 65, status: "draft", createdAt: "2025-02-10" },
  { id: 6, title: "Flutter Mobile Development", description: "Développez des applications mobiles cross-platform.", category: "Mobile", author: "Lucas Bernard", authorAvatar: "LB", image: "", duration: "16h 30min", students: 1102, rating: 4.7, price: 54.99, level: "Intermédiaire", lessons: 48, status: "published", createdAt: "2025-01-05" },
  { id: 7, title: "DevOps et CI/CD", description: "Automatisez vos déploiements avec Docker et GitHub Actions.", category: "DevOps", author: "Marie Dupont", authorAvatar: "MD", image: "", duration: "10h 00min", students: 432, rating: 4.4, price: 44.99, level: "Avancé", lessons: 32, status: "archived", createdAt: "2024-11-20" },
  { id: 8, title: "Introduction au JavaScript", description: "Les bases de JavaScript pour les débutants.", category: "Développement Web", author: "Jean Martin", authorAvatar: "JM", image: "", duration: "6h 00min", students: 3210, rating: 4.8, progress: 80, price: 29.99, level: "Débutant", lessons: 20, status: "published", createdAt: "2024-10-15" },
];

export const users: User[] = [
  { id: 1, name: "Alice Moreau", email: "alice@example.com", role: "admin", avatar: "AM", coursesEnrolled: 5, joinedAt: "2024-06-15", status: "active", lastActive: "2025-02-20" },
  { id: 2, name: "Bob Lefevre", email: "bob@example.com", role: "user", avatar: "BL", coursesEnrolled: 3, joinedAt: "2024-08-22", status: "active", lastActive: "2025-02-19" },
  { id: 3, name: "Clara Petit", email: "clara@example.com", role: "user", avatar: "CP", coursesEnrolled: 7, joinedAt: "2024-05-10", status: "active", lastActive: "2025-02-18" },
  { id: 4, name: "David Roux", email: "david@example.com", role: "user", avatar: "DR", coursesEnrolled: 2, joinedAt: "2024-11-03", status: "inactive", lastActive: "2025-01-15" },
  { id: 5, name: "Emma Blanc", email: "emma@example.com", role: "user", avatar: "EB", coursesEnrolled: 4, joinedAt: "2024-09-17", status: "active", lastActive: "2025-02-20" },
  { id: 6, name: "François Noir", email: "francois@example.com", role: "admin", avatar: "FN", coursesEnrolled: 6, joinedAt: "2024-04-01", status: "active", lastActive: "2025-02-21" },
  { id: 7, name: "Gabrielle Simon", email: "gabrielle@example.com", role: "user", avatar: "GS", coursesEnrolled: 1, joinedAt: "2025-01-08", status: "active", lastActive: "2025-02-17" },
  { id: 8, name: "Hugo Faure", email: "hugo@example.com", role: "user", avatar: "HF", coursesEnrolled: 3, joinedAt: "2024-12-25", status: "inactive", lastActive: "2025-01-30" },
];

export const revenueData = [
  { month: "Sep", revenue: 4200, students: 120 },
  { month: "Oct", revenue: 5800, students: 180 },
  { month: "Nov", revenue: 4900, students: 150 },
  { month: "Déc", revenue: 7200, students: 220 },
  { month: "Jan", revenue: 8100, students: 280 },
  { month: "Fév", revenue: 9400, students: 340 },
];

export const categoryData = [
  { name: "Dev Web", value: 35 },
  { name: "Data Science", value: 25 },
  { name: "Design", value: 15 },
  { name: "Mobile", value: 13 },
  { name: "DevOps", value: 12 },
];

export const activityData = [
  { day: "Lun", active: 245 },
  { day: "Mar", active: 312 },
  { day: "Mer", active: 289 },
  { day: "Jeu", active: 356 },
  { day: "Ven", active: 298 },
  { day: "Sam", active: 178 },
  { day: "Dim", active: 134 },
];
