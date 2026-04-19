"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../dashboard.css"; // On va créer ce fichier spécifique

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();


const menuItems = [
  { name: "Accueil", path: "/dashboard", icon: "fa-house" },
  { name: "Catalogue", path: "/catalogue", icon: "fa-book" },
  { name: "Stats", path: "/stats", icon: "fa-chart-line" }, // Ajout de la page Stats
  { name: "Profil", path: "/profil", icon: "fa-user" },
  { name: "Admin", path: "/admin", icon: "fa-user-shield" },
];



  return (
    <div className="dash-container">
      {/* SIDEBAR - Desktop uniquement */}
      <aside className="dash-sidebar">
        <div className="sidebar-header">
          <div className="logo-icon-small"><i className="fa-solid fa-book-bookmark"></i></div>
          <span>SDA Digital</span>
        </div>
        <nav className="sidebar-links">
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path} 
              className={pathname === item.path ? "active" : ""}
            >
              <i className={`fa-solid ${item.icon}`}></i> {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="dash-main">
        {/* TOPBAR - Desktop & Mobile */}
        <header className="dash-topbar">
          <div className="topbar-title">
             {menuItems.find(i => i.path === pathname)?.name || "Dashboard"}
          </div>
          <div className="topbar-user">
            <span className="user-initials">ES</span>
          </div>
        </header>

        {/* CONTENU DE LA PAGE */}
        <section className="dash-content">
          {children}
        </section>

        {/* TAB BAR - Mobile uniquement */}
        <nav className="mobile-tabbar">
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path} 
              className={pathname === item.path ? "active" : ""}
            >
              <i className={`fa-solid ${item.icon}`}></i>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}