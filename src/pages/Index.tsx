import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const featuredAffirmations = [
  "Я наполнена любовью и светом каждый день",
  "Мир вокруг меня добр и прекрасен",
  "Я достойна всего лучшего, что есть в жизни",
  "Моё сердце открыто для радости и благодарности",
];

const sections = [
  {
    icon: "Sparkles",
    title: "Аффирмации",
    description: "Позитивные утверждения для трансформации мышления и привлечения гармонии в жизнь",
    path: "/affirmations",
    colorClass: "from-purple-100 to-purple-50",
    badge: "Создать свою",
    flower: "🌸",
  },
  {
    icon: "Heart",
    title: "Молитвы",
    description: "Слова силы и благодарности для связи с высшим и обретения внутреннего покоя",
    path: "/prayers",
    colorClass: "from-yellow-100 to-amber-50",
    badge: "Полная версия",
    flower: "🌺",
  },
  {
    icon: "Leaf",
    title: "Практики",
    description: "Медитации, дыхательные техники и ежедневные ритуалы для душевного равновесия",
    path: "/practices",
    colorClass: "from-purple-50 to-yellow-50",
    badge: "Популярное",
    flower: "🌷",
  },
];

const blogPosts = [
  {
    title: "Как начать день с намерением",
    excerpt: "Утренние практики, которые меняют качество всего дня и заряжают энергией...",
    date: "5 апреля 2024",
    tag: "Практики",
  },
  {
    title: "Сила слова: как работают аффирмации",
    excerpt: "Научный взгляд на то, почему регулярное повторение меняет наш мозг и судьбу...",
    date: "28 марта 2024",
    tag: "Аффирмации",
  },
  {
    title: "Молитва как разговор с собой",
    excerpt: "Почему молитва — это не просьба, а диалог с глубинным «я» и вселенной...",
    date: "20 марта 2024",
    tag: "Молитвы",
  },
];

/* Falling petals config */
const petals = [
  { emoji: "🌸", left: "8%", delay: "0s", duration: "8s", size: "1.4rem" },
  { emoji: "🌺", left: "18%", delay: "1.5s", duration: "10s", size: "1rem" },
  { emoji: "✿", left: "30%", delay: "3s", duration: "7s", size: "1.2rem" },
  { emoji: "🌸", left: "45%", delay: "0.8s", duration: "11s", size: "0.9rem" },
  { emoji: "🌷", left: "58%", delay: "2.2s", duration: "9s", size: "1.3rem" },
  { emoji: "🌼", left: "70%", delay: "4s", duration: "8.5s", size: "1rem" },
  { emoji: "🌸", left: "82%", delay: "1s", duration: "12s", size: "1.1rem" },
  { emoji: "✿", left: "92%", delay: "3.5s", duration: "7.5s", size: "0.8rem" },
];

export default function Index() {
  const [contactOpen, setContactOpen] = useState(false);
  const [affirmationIndex, setAffirmationIndex] = useState(0);

  const nextAffirmation = () => {
    setAffirmationIndex((prev) => (prev + 1) % featuredAffirmations.length);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 sm:px-6 py-20 md:py-28">
        <div className="absolute inset-0 gradient-hero opacity-60" />
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-purple-200/30 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-yellow-200/30 blur-3xl" />

        {/* Falling petals */}
        {petals.map((p, i) => (
          <span
            key={i}
            className="flower-deco petal"
            style={{
              left: p.left,
              top: "-30px",
              fontSize: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          >
            {p.emoji}
          </span>
        ))}

        {/* Static decorative flowers in corners */}
        <span className="flower-deco text-4xl left-6 top-24 opacity-25 flower-sway" style={{ animationDuration: "4s" }}>🌸</span>
        <span className="flower-deco text-3xl right-8 top-20 opacity-20 flower-sway" style={{ animationDuration: "5s", animationDelay: "1s" }}>🌺</span>
        <span className="flower-deco text-2xl left-16 bottom-16 opacity-20 flower-sway" style={{ animationDuration: "6s", animationDelay: "0.5s" }}>🌷</span>
        <span className="flower-deco text-3xl right-16 bottom-12 opacity-25 flower-sway" style={{ animationDuration: "4.5s", animationDelay: "2s" }}>🌼</span>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-border rounded-full px-4 py-1.5 mb-6">
            <span className="text-base">🌸</span>
            <span className="text-sm text-foreground/70 font-medium">Место для внутреннего света</span>
            <span className="text-base">🌸</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <span className="text-foreground">Найди </span>
            <span className="text-gradient">гармонию</span>
            <br />
            <span className="text-foreground">внутри себя</span>
          </h1>

          {/* Princess subtitle */}
          <p className="logo-text text-2xl md:text-3xl text-primary/70 mb-4 italic">
            ✿ Дорогая принцесса ✿
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Аффирмации, молитвы и практики для тех, кто ищет покой, силу и радость в повседневной жизни
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base font-medium shadow-lg shadow-primary/20"
            >
              <Link to="/affirmations">🌸 Начать практику</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-border hover:bg-muted px-8 py-3 text-base font-medium"
              onClick={() => setContactOpen(true)}
            >
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      {/* Flower divider */}
      <div className="flex items-center justify-center gap-3 text-2xl py-2 opacity-50">
        🌸 🌺 🌷 🌼 🌸 🌺 🌷 🌼 🌸
      </div>

      {/* Daily Affirmation */}
      <section className="px-4 sm:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="relative gradient-card rounded-3xl border border-border p-8 md:p-12 text-center glow-purple overflow-hidden">
            {/* flower corners */}
            <span className="absolute top-3 left-4 text-3xl opacity-20">🌸</span>
            <span className="absolute top-3 right-4 text-3xl opacity-20">🌸</span>
            <span className="absolute bottom-3 left-4 text-2xl opacity-15">🌷</span>
            <span className="absolute bottom-3 right-4 text-2xl opacity-15">🌷</span>

            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-widest font-medium">
              🌼 Аффирмация дня 🌼
            </p>
            <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed italic mb-6 px-4">
              "{featuredAffirmations[affirmationIndex]}"
            </p>
            <button
              onClick={nextAffirmation}
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <Icon name="RefreshCw" size={14} />
              Следующая аффирмация
            </button>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              Что вас ждёт
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Три направления для вашего духовного пути
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link
                key={section.path}
                to={section.path}
                className={`group relative rounded-3xl bg-gradient-to-br ${section.colorClass} border border-border p-8 card-hover block overflow-hidden`}
              >
                {/* Background flower */}
                <span className="absolute -bottom-2 -right-2 text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 group-hover:scale-110 transform">
                  {section.flower}
                </span>

                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/70 flex items-center justify-center text-2xl">
                    {section.flower}
                  </div>
                  <span className="text-xs font-medium bg-white/60 text-primary px-3 py-1 rounded-full border border-white/80">
                    {section.badge}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{section.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{section.description}</p>
                <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Перейти <Icon name="ArrowRight" size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Flower divider 2 */}
      <div className="flex items-center justify-center gap-4 py-4 opacity-30">
        <div className="h-px flex-1 max-w-32 bg-border" />
        <span className="text-xl">🌸</span>
        <span className="text-base">✿</span>
        <span className="text-xl">🌺</span>
        <span className="text-base">✿</span>
        <span className="text-xl">🌸</span>
        <div className="h-px flex-1 max-w-32 bg-border" />
      </div>

      {/* Blog preview */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                Из блога
              </h2>
              <p className="text-muted-foreground">Статьи о духовном росте и практиках</p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-1 text-primary hover:text-primary/80 font-medium text-sm transition-colors">
              Все статьи <Icon name="ArrowRight" size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <Link to="/blog" key={i} className="group bg-white/70 rounded-2xl border border-border p-6 card-hover block relative overflow-hidden">
                <span className="absolute -top-1 -right-1 text-3xl opacity-10 group-hover:opacity-20 transition-opacity">🌸</span>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {post.tag}
                </span>
                <h3 className="font-serif text-lg font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                <p className="text-xs text-muted-foreground/70">{post.date}</p>
              </Link>
            ))}
          </div>

          <div className="md:hidden text-center mt-6">
            <Link to="/blog" className="inline-flex items-center gap-1 text-primary font-medium text-sm">
              Все статьи <Icon name="ArrowRight" size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-3xl bg-gradient-to-br from-purple-100 to-yellow-100 border border-border p-10 md:p-14 relative overflow-hidden">
            {/* Flower decorations */}
            <span className="absolute top-4 left-6 text-4xl opacity-20">🌸</span>
            <span className="absolute top-6 right-6 text-3xl opacity-15">🌺</span>
            <span className="absolute bottom-4 left-10 text-2xl opacity-15">🌷</span>
            <span className="absolute bottom-6 right-8 text-3xl opacity-20">🌼</span>

            <p className="text-5xl mb-4">🌸</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Готовы начать свой путь?
            </h2>
            <p className="logo-text text-xl text-primary/60 italic mb-3">Дорогая принцесса, ты этого достойна</p>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Присоединяйтесь к тысячам людей, которые находят покой и силу через ежедневные практики
            </p>
            <Button
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 font-medium shadow-lg shadow-primary/20"
              onClick={() => setContactOpen(true)}
            >
              🌸 Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </Layout>
  );
}
