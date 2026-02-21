import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { UserLayout } from "@/components/layout/UserLayout";
import Dashboard from "@/pages/Dashboard";
import Courses from "@/pages/Courses";
import UsersPage from "@/pages/UsersPage";
import Analytics from "@/pages/Analytics";
import Notifications from "@/pages/Notifications";
import Settings from "@/pages/Settings";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Explore from "@/pages/Explore";
import CourseDetail from "@/pages/CourseDetail";
import Profile from "@/pages/Profile";
import NotFound from "./pages/NotFound";
import { ReactNode } from "react";

const queryClient = new QueryClient();

function RequireAuth({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

function RequireAdmin({ children }: { children: ReactNode }) {
  const { user, isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (user?.role !== "admin") return <Navigate to="/explore" replace />;
  return <>{children}</>;
}

function PublicOnly({ children }: { children: ReactNode }) {
  const { isAuthenticated, user } = useAuth();
  if (isAuthenticated) return <Navigate to={user?.role === "admin" ? "/" : "/explore"} replace />;
  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public */}
              <Route path="/login" element={<PublicOnly><Login /></PublicOnly>} />
              <Route path="/signup" element={<PublicOnly><Signup /></PublicOnly>} />

              {/* Admin Dashboard */}
              <Route element={<RequireAdmin><DashboardLayout /></RequireAdmin>}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/settings" element={<Settings />} />
              </Route>

              {/* User area */}
              <Route element={<RequireAuth><UserLayout /></RequireAuth>}>
                <Route path="/explore" element={<Explore />} />
                <Route path="/course/:id" element={<CourseDetail />} />
                <Route path="/profile" element={<Profile />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
