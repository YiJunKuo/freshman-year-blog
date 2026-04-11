import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "首頁", path: "/" },
    { name: "貼文", path: "/posts" },
    { name: "關於", path: "/about" },
    { name: "聯絡", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-[#fdfdfc]/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-slate-900">Jun's Blog</span>
            </Link>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-slate-900",
                    location.pathname === link.path || (link.path !== "/" && location.pathname.startsWith(link.path))
                      ? "text-slate-900"
                      : "text-slate-500"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600 hover:text-slate-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-[#fdfdfc]">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    location.pathname === link.path || (link.path !== "/" && location.pathname.startsWith(link.path))
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 mt-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © 2020 Blog · <Link to="/" className="hover:underline">隱私權條款</Link> · <Link to="/" className="hover:underline">服務條款</Link>
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
