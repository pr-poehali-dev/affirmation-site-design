import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const affirmations = [
  "Я наполнена любовью и светом каждый день",
  "Мир вокруг меня добр и прекрасен",
  "Я достойна всего лучшего, что есть в жизни",
  "Моё сердце открыто для радости и благодарности",
];

const features = [
  "ДЛЯ ЛЮБОГО ВОЗРАСТА",
  "НАТУРАЛЬНЫЕ ПРАКТИКИ",
  "ИСТОЧНИК СИЛЫ",
  "СОДЕРЖИТ ЛЮБОВЬ",
  "УЛУЧШАЕТ НАСТРОЕНИЕ",
  "ЗАМЕДЛЯЕТ СТРЕСС",
];

const sections = [
  {
    title: "Аффир-\nмации",
    desc: "Позитивные утверждения для трансформации мышления",
    path: "/affirmations",
    bg: "bg-[hsl(275,52%,75%)]",
    textColor: "text-white",
    badge: "СОЗДАТЬ СВОЮ",
    badgeBg: "bg-[hsl(54,95%,58%)]",
    icon: "✦",
  },
  {
    title: "Молитвы",
    desc: "Слова силы и благодарности для внутреннего покоя",
    path: "/prayers",
    bg: "bg-[hsl(330,75%,78%)]",
    textColor: "text-white",
    badge: "ПОЛНАЯ ВЕРСИЯ",
    badgeBg: "bg-[hsl(275,52%,75%)]",
    icon: "♡",
  },
  {
    title: "Практики",
    desc: "Медитации и ритуалы для душевного равновесия",
    path: "/practices",
    bg: "bg-[hsl(54,95%,58%)]",
    textColor: "text-[hsl(280,30%,12%)]",
    badge: "ПОПУЛЯРНОЕ",
    badgeBg: "bg-[hsl(330,75%,78%)]",
    icon: "❋",
  },
];

const blogPosts = [
  {
    title: "КАК НАЧАТЬ ДЕНЬ С НАМЕРЕНИЕМ",
    excerpt: "Утренние практики, которые меняют качество всего дня...",
    date: "5 апр 2024",
    tag: "ПРАКТИКИ",
    tagBg: "bg-[hsl(275,52%,75%)]",
  },
  {
    title: "СИЛА СЛОВА: КАК РАБОТАЮТ АФФИРМАЦИИ",
    excerpt: "Почему регулярное повторение меняет наш мозг...",
    date: "28 мар 2024",
    tag: "АФФИРМАЦИИ",
    tagBg: "bg-[hsl(54,95%,58%)]",
  },
  {
    title: "МОЛИТВА КАК РАЗГОВОР С СОБОЙ",
    excerpt: "Почему молитва — это диалог с глубинным «я»...",
    date: "20 мар 2024",
    tag: "МОЛИТВЫ",
    tagBg: "bg-[hsl(330,75%,78%)]",
  },
];

const marqueeItems = [
  "ДОРОГАЯ ПРИНЦЕССА", "✦", "DEAR PRINCESS", "♡", "АФФИРМАЦИИ", "✦",
  "МОЛИТВЫ", "♡", "ПРАКТИКИ", "✦", "ДОРОГАЯ ПРИНЦЕССА", "♡", "DEAR PRINCESS", "✦",
  "АФФИРМАЦИИ", "♡", "МОЛИТВЫ", "✦", "ПРАКТИКИ", "♡",
];

export default function Index() {
  const [contactOpen, setContactOpen] = useState(false);
  const [affIdx, setAffIdx] = useState(0);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative bg-[hsl(275,52%,75%)] overflow-hidden border-b-[3px] border-[hsl(280,30%,12%)]">
        <div className="absolute top-8 right-8 w-32 h-32 bg-[hsl(54,95%,58%)] blob opacity-80 border-2 border-[hsl(280,30%,12%)]" />
        <div className="absolute bottom-12 left-12 w-20 h-20 bg-[hsl(330,75%,78%)] blob opacity-70 border-2 border-[hsl(280,30%,12%)]" />
        <div className="absolute top-1/2 right-1/4 w-10 h-10 bg-white blob opacity-40" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[hsl(54,95%,58%)] border-2 border-[hsl(280,30%,12%)] rounded-full px-5 py-2 mb-6 shadow-[3px_3px_0px_hsl(280,30%,12%)]">
              <span className="font-body font-extrabold text-sm uppercase tracking-widest text-[hsl(280,30%,12%)]">
                ✦ Место для внутреннего света ✦
              </span>
            </div>

            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] uppercase mb-2">
              Дорогая
            </h1>
            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-[hsl(280,30%,12%)] leading-[0.9] uppercase mb-6">
              принцесса
            </h1>

            <p className="text-white/80 font-body text-lg md:text-xl max-w-xl mb-2 leading-relaxed">
              Аффирмации, молитвы и практики для тех, кто ищет покой, силу и радость
            </p>
            <div className="text-[hsl(330,75%,78%)] text-2xl tracking-widest mb-8">〰〰〰〰〰〰</div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[hsl(280,30%,12%)] hover:bg-[hsl(280,30%,20%)] text-white font-extrabold uppercase tracking-wide px-8 shadow-[4px_4px_0px_hsl(330,75%,78%)] border-2 border-[hsl(280,30%,12%)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
              >
                <Link to="/affirmations">Начать практику ✦</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full bg-white border-2 border-[hsl(280,30%,12%)] text-[hsl(280,30%,12%)] font-extrabold uppercase tracking-wide px-8 hover:bg-[hsl(54,95%,58%)] shadow-[4px_4px_0px_hsl(280,30%,12%)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
                onClick={() => setContactOpen(true)}
              >
                Написать нам
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-[hsl(280,30%,12%)] overflow-hidden py-3 border-b-[3px] border-[hsl(280,30%,12%)]">
        <div className="marquee-inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="font-display font-black text-sm text-white uppercase tracking-widest px-4">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* FEATURES PILLS */}
      <section className="bg-white border-b-[3px] border-[hsl(280,30%,12%)] px-4 sm:px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
          {features.map((f, i) => (
            <span
              key={i}
              className="pill bg-white text-[hsl(280,30%,12%)] shadow-[2px_2px_0px_hsl(280,30%,12%)]"
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* AFFIRMATION OF THE DAY */}
      <section className="px-4 sm:px-6 py-16 bg-[hsl(54,95%,58%)] border-b-[3px] border-[hsl(280,30%,12%)]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display font-black text-xs uppercase tracking-[0.2em] text-[hsl(280,30%,12%)] mb-4">
            ♡ Аффирмация дня ♡
          </p>
          <div className="bg-white border-[3px] border-[hsl(280,30%,12%)] rounded-3xl p-8 md:p-12 shadow-[6px_6px_0px_hsl(280,30%,12%)] relative">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[hsl(275,52%,75%)] blob border-2 border-[hsl(280,30%,12%)]" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[hsl(330,75%,78%)] blob border-2 border-[hsl(280,30%,12%)]" />
            <p className="font-body text-2xl md:text-3xl text-[hsl(280,30%,12%)] font-bold leading-relaxed mb-6">
              "{affirmations[affIdx]}"
            </p>
            <button
              onClick={() => setAffIdx((p) => (p + 1) % affirmations.length)}
              className="inline-flex items-center gap-2 font-body font-extrabold text-sm uppercase tracking-wide text-[hsl(280,30%,12%)] border-2 border-[hsl(280,30%,12%)] rounded-full px-5 py-2 hover:bg-[hsl(275,52%,75%)] hover:text-white transition-colors"
            >
              <Icon name="RefreshCw" size={14} />
              Следующая
            </button>
          </div>
        </div>
      </section>

      {/* SECTIONS GRID */}
      <section className="px-4 sm:px-6 py-16 bg-white border-b-[3px] border-[hsl(280,30%,12%)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl md:text-5xl text-[hsl(280,30%,12%)] uppercase mb-2">
              Что вас ждёт
            </h2>
            <div className="text-[hsl(275,52%,75%)] text-xl tracking-widest">〰〰〰〰〰〰〰</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((s) => (
              <Link
                key={s.path}
                to={s.path}
                className={`group ${s.bg} ${s.textColor} rounded-3xl border-[3px] border-[hsl(280,30%,12%)] p-8 card-pop block relative overflow-hidden`}
              >
                <div className="absolute top-4 right-4">
                  <span className={`${s.badgeBg} text-[hsl(280,30%,12%)] text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border-2 border-[hsl(280,30%,12%)]`}>
                    {s.badge}
                  </span>
                </div>
                <div className="text-5xl font-black mb-4 opacity-30 group-hover:opacity-60 transition-opacity">
                  {s.icon}
                </div>
                <h3 className="font-display font-black text-2xl uppercase leading-tight mb-3 whitespace-pre-line">
                  {s.title}
                </h3>
                <p className="font-body text-sm leading-relaxed opacity-80 mb-4">{s.desc}</p>
                <div className="flex items-center gap-1 font-body font-extrabold text-sm uppercase tracking-wide group-hover:gap-3 transition-all">
                  Перейти <Icon name="ArrowRight" size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="px-4 sm:px-6 py-16 bg-[hsl(280,40%,97%)] border-b-[3px] border-[hsl(280,30%,12%)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display font-black text-3xl md:text-4xl text-[hsl(280,30%,12%)] uppercase">
                Из блога
              </h2>
              <div className="text-[hsl(330,75%,78%)] text-xl tracking-widest">〰〰〰〰〰〰〰</div>
            </div>
            <Link
              to="/blog"
              className="hidden md:flex items-center gap-1 font-body font-extrabold text-sm uppercase tracking-wide text-[hsl(280,30%,12%)] border-2 border-[hsl(280,30%,12%)] rounded-full px-4 py-2 hover:bg-[hsl(54,95%,58%)] transition-colors shadow-[2px_2px_0px_hsl(280,30%,12%)]"
            >
              Все статьи <Icon name="ArrowRight" size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <Link
                to="/blog"
                key={i}
                className="group bg-white rounded-3xl border-[3px] border-[hsl(280,30%,12%)] p-6 card-pop block"
              >
                <span className={`${post.tagBg} text-[hsl(280,30%,12%)] text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border-2 border-[hsl(280,30%,12%)] inline-block mb-4`}>
                  {post.tag}
                </span>
                <h3 className="font-display font-black text-base text-[hsl(280,30%,12%)] uppercase leading-tight mb-2 group-hover:text-[hsl(275,52%,75%)] transition-colors">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-[hsl(275,15%,50%)] leading-relaxed mb-4">{post.excerpt}</p>
                <p className="font-body text-xs text-[hsl(275,15%,60%)] font-bold uppercase tracking-wide">{post.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-16 bg-[hsl(330,75%,78%)] border-b-[3px] border-[hsl(280,30%,12%)]">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="absolute -top-6 left-8 w-16 h-16 bg-[hsl(54,95%,58%)] blob border-2 border-[hsl(280,30%,12%)] float" />
          <div className="absolute -top-4 right-8 w-10 h-10 bg-[hsl(275,52%,75%)] blob border-2 border-[hsl(280,30%,12%)] float" style={{ animationDelay: "1s" }} />

          <div className="bg-white border-[3px] border-[hsl(280,30%,12%)] rounded-3xl p-10 md:p-14 shadow-[8px_8px_0px_hsl(280,30%,12%)]">
            <p className="font-display font-black text-xs uppercase tracking-[0.2em] text-[hsl(275,52%,75%)] mb-3">
              ✦ Начни прямо сейчас ✦
            </p>
            <h2 className="font-display font-black text-3xl md:text-4xl text-[hsl(280,30%,12%)] uppercase leading-tight mb-4">
              Готова начать<br />свой путь?
            </h2>
            <p className="font-body text-[hsl(275,15%,50%)] mb-8 max-w-sm mx-auto leading-relaxed">
              Тысячи людей находят покой и силу через ежедневные практики
            </p>
            <Button
              size="lg"
              className="rounded-full bg-[hsl(280,30%,12%)] hover:bg-[hsl(280,30%,20%)] text-white font-extrabold uppercase tracking-wide px-10 shadow-[4px_4px_0px_hsl(275,52%,75%)] border-2 border-[hsl(280,30%,12%)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
              onClick={() => setContactOpen(true)}
            >
              Связаться с нами ♡
            </Button>
          </div>
        </div>
      </section>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </Layout>
  );
}
