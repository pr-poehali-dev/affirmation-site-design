import { useState } from "react";
import Layout from "@/components/Layout";
import { Sparkle, RetroFlower, Flower4, CrossStar, Dot, Asterisk, Daisy } from "@/components/Deco";
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/ContactModal";

const includes = [
  { icon: "🧼", title: "Мыло с люфой", desc: "Научишься делать мыло с вставкой из натуральной люфы — отшелушивающее и нежное" },
  { icon: "✨", title: "Кофейный скраб", desc: "Приготовишь скраб для тела из кофе, кокосового масла и натуральных масел" },
  { icon: "🌸", title: "Декор и аромат", desc: "Украсишь изделия сухоцветами, освоишь ароматизацию и окрашивание" },
  { icon: "📦", title: "Упаковка в подарок", desc: "Покажу красивую упаковку — твои изделия станут идеальным handmade-подарком" },
  { icon: "📋", title: "Рецепты с собой", desc: "Получишь PDF с рецептами и списком ингредиентов для самостоятельного повторения" },
  { icon: "💬", title: "Поддержка в чате", desc: "30 дней поддержки в личном чате — отвечу на любые вопросы после мастер-класса" },
];

const formats = [
  {
    name: "Онлайн",
    price: "2 900 ₽",
    oldPrice: "4 500 ₽",
    color: "bg-[hsl(275,52%,75%)]",
    textColor: "text-white",
    badgeBg: "bg-[hsl(54,95%,58%)]",
    badgeText: "text-[hsl(280,30%,12%)]",
    features: ["Запись мастер-класса", "PDF с рецептами", "Чат поддержки 30 дней", "Доступ навсегда"],
  },
  {
    name: "Живой МК",
    price: "4 500 ₽",
    oldPrice: "",
    color: "bg-[hsl(280,30%,12%)]",
    textColor: "text-white",
    badgeBg: "bg-[hsl(330,75%,78%)]",
    badgeText: "text-white",
    badge: "HIT",
    features: ["Офлайн встреча в студии", "Все материалы включены", "Готовые изделия забираешь", "Фотосессия работ", "Чат поддержки 30 дней"],
  },
  {
    name: "VIP",
    price: "8 900 ₽",
    oldPrice: "",
    color: "bg-[hsl(330,75%,78%)]",
    textColor: "text-white",
    badgeBg: "bg-[hsl(54,95%,58%)]",
    badgeText: "text-[hsl(280,30%,12%)]",
    features: ["Индивидуальный урок", "Дата и время — твои", "Все материалы включены", "Готовые изделия забираешь", "Набор для дома в подарок", "Чат 60 дней"],
  },
];

const reviews = [
  { name: "Аня К.", text: "Я никогда не делала мыло, а теперь не могу остановиться! Мастер-класс просто волшебный 🌸", emoji: "🌸" },
  { name: "Маша Л.", text: "Люфа в мыле — это гениально. Кожа после такого скраба невероятно мягкая. Подруги в восторге!", emoji: "✨" },
  { name: "Света Д.", text: "Купила онлайн-формат, пересматриваю уже третий раз. Такое удовольствие — делать красоту своими руками", emoji: "♡" },
];

export default function SoapMasterclass() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative bg-[hsl(330,75%,78%)] border-b-[3px] border-[hsl(280,30%,12%)] overflow-hidden">
        <Sparkle size={80} color="#FAEF5D" className="absolute top-6 right-10 opacity-80 float" />
        <Flower4 size={60} color="white" className="absolute bottom-6 left-8 opacity-30 spin-slow" />
        <Dot size={18} color="#FAEF5D" className="absolute top-14 left-1/3 opacity-70" />
        <CrossStar size={32} color="white" className="absolute top-8 left-12 opacity-30 spin-slow" />
        <Daisy size={55} className="absolute bottom-4 right-1/4 opacity-25" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[hsl(54,95%,58%)] border-2 border-[hsl(280,30%,12%)] rounded-full px-5 py-2 mb-6 shadow-[3px_3px_0px_hsl(280,30%,12%)]">
                <span className="font-body font-extrabold text-xs uppercase tracking-widest text-[hsl(280,30%,12%)]">
                  🧼 Мастер-класс ✦ Онлайн & Офлайн
                </span>
              </div>
              <h1 className="font-display italic font-bold text-5xl md:text-6xl text-white leading-tight mb-2">
                Мыло с люфой
              </h1>
              <h2 className="font-display italic font-bold text-3xl md:text-4xl text-[hsl(280,30%,12%)] leading-tight mb-6">
                & кофейный скраб
              </h2>
              <div className="text-white text-2xl tracking-widest mb-6">〰〰〰〰〰〰</div>
              <p className="font-body text-white/90 leading-relaxed mb-8 max-w-md">
                Создай своими руками нежное мыло с натуральной люфой и бодрящий кофейный скраб. Идеальный подарок себе и близким!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="rounded-full bg-[hsl(280,30%,12%)] hover:bg-[hsl(280,30%,20%)] text-white font-extrabold uppercase tracking-wide px-8 shadow-[4px_4px_0px_hsl(54,95%,58%)] border-2 border-[hsl(280,30%,12%)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
                  onClick={() => setContactOpen(true)}
                >
                  Записаться ✦
                </Button>
                <div className="inline-flex items-center gap-2 bg-white border-2 border-[hsl(280,30%,12%)] rounded-full px-5 py-3 shadow-[3px_3px_0px_hsl(280,30%,12%)]">
                  <span className="font-body font-black text-lg text-[hsl(280,30%,12%)]">от 2 900 ₽</span>
                  <span className="font-body text-sm text-[hsl(275,15%,50%)] line-through">4 500 ₽</span>
                </div>
              </div>
            </div>
            {/* Photo */}
            <div className="flex justify-center relative">
              <div
                className="w-72 h-72 border-[3px] border-[hsl(280,30%,12%)] shadow-[8px_8px_0px_hsl(280,30%,12%)] overflow-hidden"
                style={{ borderRadius: "50% 40% 60% 40% / 40% 60% 40% 60%" }}
              >
                <img
                  src="https://cdn.poehali.dev/projects/4cf41188-5395-41e4-8d67-7a5eb0b6447f/files/2c76eaad-8386-41b0-b891-989a8f246bc4.jpg"
                  alt="Мастер-класс по мылу"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[hsl(54,95%,58%)] border-[3px] border-[hsl(280,30%,12%)] rounded-2xl px-4 py-3 shadow-[4px_4px_0px_hsl(280,30%,12%)] rotate-3">
                <p className="font-display italic font-bold text-[hsl(280,30%,12%)] text-sm">Старт сразу</p>
                <p className="font-body font-black text-[hsl(280,30%,12%)] text-xs uppercase">после оплаты</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-[hsl(280,30%,12%)] overflow-hidden py-3 border-b-[3px] border-[hsl(280,30%,12%)]">
        <div className="marquee-inner">
          {Array(5).fill(["МЫЛО С ЛЮФОЙ", "✦", "СКРАБ", "♡", "HANDMADE", "✦", "МАСТЕР-КЛАСС", "♡"]).flat().map((item, i) => (
            <span key={i} className="font-display italic text-sm text-white uppercase tracking-widest px-4">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* INCLUDES */}
      <section className="px-4 sm:px-6 py-16 bg-white border-b-[3px] border-[hsl(280,30%,12%)] relative overflow-hidden">
        <Asterisk size={80} color="#C084FC" className="absolute -left-6 top-10 opacity-10 spin-slow" />
        <RetroFlower size={65} color="#FAEF5D" centerColor="white" className="absolute -right-5 bottom-8 opacity-15" />

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="font-display italic font-bold text-4xl md:text-5xl text-[hsl(280,30%,12%)] mb-2">
              Что входит в программу
            </h2>
            <div className="text-[hsl(275,52%,75%)] text-xl tracking-widest">〰〰〰〰〰〰〰</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {includes.map((item, i) => (
              <div
                key={item.title}
                className={`border-[3px] border-[hsl(280,30%,12%)] rounded-3xl p-6 card-pop ${
                  i % 3 === 0 ? "bg-[hsl(275,52%,75%)] text-white" :
                  i % 3 === 1 ? "bg-[hsl(54,95%,58%)] text-[hsl(280,30%,12%)]" :
                  "bg-[hsl(330,75%,78%)] text-white"
                }`}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-display italic font-bold text-xl mb-2">{item.title}</h3>
                <p className="font-body text-sm leading-relaxed opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS / PRICING */}
      <section className="px-4 sm:px-6 py-16 bg-[hsl(280,40%,97%)] border-b-[3px] border-[hsl(280,30%,12%)] relative overflow-hidden">
        <Sparkle size={70} color="#C084FC" className="absolute top-8 right-8 opacity-20 float" />
        <CrossStar size={45} color="#F472B6" className="absolute bottom-8 left-6 opacity-15 spin-slow" />

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="font-display italic font-bold text-4xl md:text-5xl text-[hsl(280,30%,12%)] mb-2">
              Выбери формат
            </h2>
            <div className="text-[hsl(330,75%,78%)] text-xl tracking-widest">〰〰〰〰〰〰〰</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formats.map((f) => (
              <div key={f.name} className={`${f.color} ${f.textColor} border-[3px] border-[hsl(280,30%,12%)] rounded-3xl p-7 card-pop flex flex-col`}>
                {f.badge && (
                  <span className={`${f.badgeBg} ${f.badgeText} text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border-2 border-[hsl(280,30%,12%)] self-start mb-3`}>
                    {f.badge}
                  </span>
                )}
                <h3 className="font-display italic font-bold text-2xl mb-1">{f.name}</h3>
                <div className="flex items-baseline gap-2 mb-5">
                  <span className="font-display font-bold text-4xl">{f.price}</span>
                  {f.oldPrice && <span className="font-body text-sm opacity-60 line-through">{f.oldPrice}</span>}
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {f.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 font-body text-sm opacity-90">
                      <span className="text-base">✦</span> {feat}
                    </li>
                  ))}
                </ul>
                <Button
                  className="rounded-full bg-white text-[hsl(280,30%,12%)] border-2 border-[hsl(280,30%,12%)] font-extrabold uppercase tracking-wide w-full shadow-[3px_3px_0px_hsl(280,30%,12%)] hover:bg-[hsl(54,95%,58%)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
                  onClick={() => setContactOpen(true)}
                >
                  Записаться
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-4 sm:px-6 py-16 bg-[hsl(54,95%,58%)] border-b-[3px] border-[hsl(280,30%,12%)] relative overflow-hidden">
        <Flower4 size={70} color="white" className="absolute -right-6 top-4 opacity-20 spin-slow" />
        <Dot size={20} color="#F472B6" className="absolute left-8 bottom-8 opacity-50" />

        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-10">
            <h2 className="font-display italic font-bold text-4xl md:text-5xl text-[hsl(280,30%,12%)] mb-2">
              Отзывы участниц
            </h2>
            <div className="text-[hsl(330,75%,78%)] text-xl tracking-widest">〰〰〰〰〰〰〰</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white border-[3px] border-[hsl(280,30%,12%)] rounded-3xl p-6 card-pop">
                <div className="text-3xl mb-3">{r.emoji}</div>
                <p className="font-body text-[hsl(280,30%,12%)] leading-relaxed mb-4 italic">"{r.text}"</p>
                <p className="font-display italic font-bold text-[hsl(275,52%,75%)] text-lg">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-16 bg-[hsl(275,52%,75%)] border-b-[3px] border-[hsl(280,30%,12%)] relative overflow-hidden">
        <Sparkle size={90} color="#FAEF5D" className="absolute -left-8 top-4 opacity-40 float" />
        <RetroFlower size={70} color="#F472B6" centerColor="#FAEF5D" className="absolute -right-6 bottom-2 opacity-30" />

        <div className="max-w-2xl mx-auto text-center relative">
          <div className="bg-white border-[3px] border-[hsl(280,30%,12%)] rounded-3xl p-10 md:p-14 shadow-[8px_8px_0px_hsl(280,30%,12%)]">
            <Sparkle size={36} color="#FAEF5D" className="absolute -top-5 left-8 opacity-80 float" />
            <Flower4 size={30} color="#F472B6" className="absolute -top-4 right-8 opacity-60 float" />
            <p className="font-display italic text-[hsl(275,52%,75%)] text-sm font-bold uppercase tracking-widest mb-3">✦ Осталось мест: 5 ✦</p>
            <h2 className="font-display italic font-bold text-4xl md:text-5xl text-[hsl(280,30%,12%)] leading-tight mb-4">
              Готова создать<br />красоту своими руками?
            </h2>
            <p className="font-body text-[hsl(275,15%,50%)] mb-8 max-w-sm mx-auto leading-relaxed">
              Запишись прямо сейчас — и получи PDF с рецептами в подарок сразу после оплаты
            </p>
            <Button
              size="lg"
              className="rounded-full bg-[hsl(280,30%,12%)] hover:bg-[hsl(280,30%,20%)] text-white font-extrabold uppercase tracking-wide px-10 shadow-[4px_4px_0px_hsl(275,52%,75%)] border-2 border-[hsl(280,30%,12%)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
              onClick={() => setContactOpen(true)}
            >
              Записаться на мастер-класс ♡
            </Button>
          </div>
        </div>
      </section>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </Layout>
  );
}
