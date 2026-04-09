import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white text-xs">✦</span>
              </div>
              <span className="font-serif text-base font-semibold text-primary">Свет Внутри</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Место для внутренней силы, гармонии и духовного роста через аффирмации, молитвы и практики.
            </p>
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
          <p className="text-xs text-muted-foreground">© 2024 Свет Внутри. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
