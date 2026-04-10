import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Главная", path: "/" },
  { label: "Аффирмации", path: "/affirmations" },
  { label: "Молитвы", path: "/prayers" },
  { label: "Практики", path: "/practices" },
  { label: "Блог", path: "/blog" },
  { label: "О проекте", path: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-[3px] border-[hsl(280,30%,12%)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[hsl(275,52%,75%)] rounded-full border-2 border-[hsl(280,30%,12%)] flex items-center justify-center font-black text-sm text-white shadow-[2px_2px_0px_hsl(280,30%,12%)]">
              DP
            </div>
            <div className="leading-tight">
              <span className="font-display font-black text-sm uppercase tracking-tight text-[hsl(280,30%,12%)] block">
                Дорогая <span className="text-[hsl(275,52%,75%)]">принцесса</span>
              </span>
              <span className="text-[10px] font-body text-[hsl(275,15%,50%)] uppercase tracking-[0.15em] block">Dear Princess</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wide transition-all duration-150 border-2 ${
                  location.pathname === link.path
                    ? "bg-[hsl(275,52%,75%)] text-white border-[hsl(280,30%,12%)] shadow-[2px_2px_0px_hsl(280,30%,12%)]"
                    : "border-transparent text-[hsl(280,30%,12%)] hover:border-[hsl(280,30%,12%)] hover:bg-[hsl(54,95%,58%)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-xl border-2 border-[hsl(280,30%,12%)] hover:bg-[hsl(54,95%,58%)] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon name={isOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-1 border-t-2 border-[hsl(280,30%,12%)] pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-extrabold uppercase tracking-wide transition-all duration-150 border-2 ${
                  location.pathname === link.path
                    ? "bg-[hsl(275,52%,75%)] text-white border-[hsl(280,30%,12%)]"
                    : "border-transparent text-[hsl(280,30%,12%)] hover:bg-[hsl(54,95%,58%)] hover:border-[hsl(280,30%,12%)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
