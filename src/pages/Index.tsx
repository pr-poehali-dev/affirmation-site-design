import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Flower4, Sparkle, CrossStar, RetroFlower, Asterisk, Daisy, Dot } from "@/components/Deco";

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
        {/* Deco elements */}
        <Sparkle size={80} color="#FAEF5D" className="absolute top-8 right-16 opacity-90 float" />
        <RetroFlower size={64} color="#F472B6" centerColor="#FAEF5D" className="absolute top-20 right-6 opacity-70" />
        <Flower4 size={56} color="white" className="absolute bottom-10 left-10 opacity-30 spin-slow" />
        <Asterisk size={44} color="#FAEF5D" className="absolute top-1/3 right-1/3 opacity-40 spin-slow" />
        <CrossStar size={36} color="#F472B6" className="absolute bottom-16 right-24 opacity-50 float" />
        <Dot size={18} color="#FAEF5D" className="absolute top-12 left-1/3 opacity-60" />
        <Dot size={12} color="white" className="absolute top-1/4 left-1/4 opacity-40" />
        <Dot size={24} color="#F472B6" className="absolute bottom-8 left-1/3 opacity-50" />

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
      <section className="px-4 sm:px-6 py-16 bg-[hsl(54,95%,58%)] border-b-[3px] border-[hsl(280,30%,12%)] relative overflow-hidden">
        <RetroFlower size={80} color="#F472B6" centerColor="#FAEF5D" className="absolute -left-6 top-4 opacity-30" />
        <Flower4 size={60} color="#C084FC" className="absolute -right-4 bottom-4 opacity-25" />
        <Sparkle size={32} color="#FB923C" className="absolute right-16 top-6 opacity-40 spin-slow" />
        <Dot size={16} color="#F472B6" className="absolute left-1/4 bottom-6 opacity-50" />
        <div className="max-w-3xl mx-auto text-center relative">
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
      <section className="px-4 sm:px-6 py-16 bg-white border-b-[3px] border-[hsl(280,30%,12%)] relative overflow-hidden">
        <Daisy size={70} className="absolute top-6 right-8 opacity-15" />
        <CrossStar size={50} color="#C084FC" className="absolute bottom-8 left-6 opacity-20 spin-slow" />
        <Dot size={20} color="#F472B6" className="absolute top-12 left-12 opacity-30" />
        <Dot size={14} color="#FAEF5D" className="absolute bottom-12 right-20 opacity-40" />
        <div className="max-w-6xl mx-auto relative">
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
      <section className="px-4 sm:px-6 py-16 bg-[hsl(280,40%,97%)] border-b-[3px] border-[hsl(280,30%,12%)] relative overflow-hidden">
        <Asterisk size={60} color="#C084FC" className="absolute -right-4 top-8 opacity-15 spin-slow" />
        <RetroFlower size={50} color="#FAEF5D" centerColor="white" className="absolute left-4 bottom-6 opacity-20" />
        <Dot size={16} color="#F472B6" className="absolute right-1/3 top-8 opacity-30" />
        <div className="max-w-6xl mx-auto relative">
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
      <section className="px-4 sm:px-6 py-16 bg-[hsl(330,75%,78%)] border-b-[3px] border-[hsl(280,30%,12%)] relative overflow-hidden">
        <Sparkle size={90} color="#FAEF5D" className="absolute -left-8 top-4 opacity-40 float" />
        <Flower4 size={70} color="white" className="absolute -right-6 bottom-2 opacity-20 spin-slow" />
        <Daisy size={55} className="absolute right-16 top-6 opacity-25" />
        <CrossStar size={30} color="#C084FC" className="absolute left-20 bottom-8 opacity-40 spin-slow" />
        <Dot size={20} color="#FAEF5D" className="absolute right-1/4 bottom-10 opacity-50" />
        <div className="max-w-3xl mx-auto text-center relative">
          <Sparkle size={44} color="#FAEF5D" className="absolute -top-10 left-8 opacity-70 float" />
          <Flower4 size={36} color="white" className="absolute -top-8 right-8 opacity-60 float" />

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