import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[hsl(280,30%,12%)] border-t-[3px] border-[hsl(280,30%,12%)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[hsl(275,52%,75%)] rounded-full border-2 border-white flex items-center justify-center font-black text-sm text-white shadow-[2px_2px_0px_white]">
                DP
              </div>
              <div className="leading-tight">
                <span className="font-display font-black text-sm uppercase text-white block">
                  Дорогая <span className="text-[hsl(275,52%,75%)]">принцесса</span>
                </span>
                <span className="text-[10px] font-body text-white/40 uppercase tracking-[0.15em] block">Dear Princess</span>
              </div>
            </div>
            <p className="font-body text-sm text-white/60 leading-relaxed">
              Место для внутренней силы, гармонии и духовного роста через аффирмации, молитвы и практики.
            </p>
            <div className="flex gap-2 mt-4">
              <span className="w-7 h-7 bg-[hsl(275,52%,75%)] border-2 border-white rounded-full flex items-center justify-center text-xs font-black text-white">✦</span>
              <span className="w-7 h-7 bg-[hsl(330,75%,78%)] border-2 border-white rounded-full flex items-center justify-center text-xs font-black text-white">♡</span>
              <span className="w-7 h-7 bg-[hsl(54,95%,58%)] border-2 border-white rounded-full flex items-center justify-center text-xs font-black text-[hsl(280,30%,12%)]">❋</span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-white mb-4">Разделы</h4>
            <ul className="space-y-2">
              {[
                { label: "Аффирмации", path: "/affirmations" },
                { label: "Молитвы", path: "/prayers" },
                { label: "Практики", path: "/practices" },
                { label: "Блог", path: "/blog" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-white/60 hover:text-[hsl(54,95%,58%)] transition-colors font-semibold uppercase tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-white mb-4">Информация</h4>
            <ul className="space-y-2">
              {[
                { label: "О проекте", path: "/about" },
                { label: "Контакты", path: "/about#contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-white/60 hover:text-[hsl(54,95%,58%)] transition-colors font-semibold uppercase tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-white/40 uppercase tracking-widest">
            © 2024 Дорогая принцесса · Dear Princess
          </p>
          <p className="font-body text-xs text-white/30 uppercase tracking-widest">
            Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}
