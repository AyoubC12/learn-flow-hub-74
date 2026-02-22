import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { Topbar } from "./Topbar";

const pageTitles: Record<string, string> = {
  "/": "Tableau de bord",
  "/courses": "Gestion des cours",
  "/users": "Gestion des utilisateurs",
  "/analytics": "Statistiques",
  "/notifications": "Notifications",
  "/settings": "Paramètres",
};

export function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const basePath = "/" + (location.pathname.split("/")[1] || "");
  const title = pageTitles[basePath] || "EduPro";

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div
        className={`flex flex-1 flex-col transition-all duration-300 ${
          collapsed ? "ml-[68px]" : "ml-[260px]"
        }`}
      >
        <Topbar onToggleSidebar={() => setCollapsed(!collapsed)} title={title} />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
