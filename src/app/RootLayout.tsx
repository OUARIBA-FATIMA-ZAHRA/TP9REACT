import { Outlet, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container flex h-16 items-center justify-between">
          <NavLink to="/" className="text-xl font-bold">
            MonPortfolio
          </NavLink>
          
          <div className="flex items-center gap-6">
            <NavLink to="/projects">Projets</NavLink>
            <NavLink to="/experience">Parcours</NavLink>
            <NavLink to="/education">Formations</NavLink>
            <NavLink to="/certifications">Certifications</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
      </header>

      <main className="container py-8">
        <Outlet />
      </main>

      <footer className="border-t py-6">
        <div className="container text-center">
          © {new Date().getFullYear()} Mon Portfolio
        </div>
      </footer>
    </div>
  );
}