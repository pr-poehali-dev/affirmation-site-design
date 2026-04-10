import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-24 relative overflow-hidden">
      {/* Decorative flowers */}
      <span className="flower-deco left-4 top-4 opacity-20 text-3xl">🌸</span>
      <span className="flower-deco right-8 top-6 opacity-15 text-2xl">🌺</span>
      <span className="flower-deco left-1/3 -top-2 opacity-10 text-4xl">🌷</span>
      <span className="flower-deco right-1/4 top-8 opacity-10 text-xl">✿</span>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🌸</span>
              <div className="flex flex-col leading-none">
                <span className="logo-text text-lg font-semibold text-primary">Дорогая принцесса</span>
                <span className="text-[9px] text-muted-foreground tracking-[0.15em] uppercase font-light">Dear Princess</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Место для внутренней силы, гармонии и духовного роста через аффирмации, молитвы и практики.
            </p>
            <div className="flex gap-2 mt-4 text-lg">
              <span>🌸</span><span>🌺</span><span>🌷</span><span>🌼</span>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-foreground mb-3">Разделы</h4>
            <ul className="space-y-2">
              {[
                { label: "Аффирмации", path: "/affirmations" },
                { label: "Молитвы", path: "/prayers" },
                { label: "Практики", path: "/practices" },
                { label: "Блог", path: "/blog" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-foreground mb-3">Информация</h4>
            <ul className="space-y-2">
              {[
                { label: "О проекте", path: "/about" },
                { label: "Контакты", path: "/about#contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground">© 2024 Дорогая принцесса · Dear Princess 🌸 Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
