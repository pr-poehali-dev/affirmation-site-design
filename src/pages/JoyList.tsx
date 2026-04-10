import { useState } from "react";
import Layout from "@/components/Layout";
import { Sparkle, RetroFlower, Flower4, CrossStar, Dot, Asterisk, Daisy } from "@/components/Deco";

const exampleJoys = [
  "Первый глоток горячего кофе утром ☕",
  "Запах свежих цветов 🌸",
  "Тёплые объятия близкого человека 🤗",
  "Смешное видео, которое рассмешило до слёз 😂",
  "Солнечный луч на лице через окно ☀️",
  "Любимая песня в наушниках 🎵",
  "Мягкие носки в холодный день 🧦",
  "Красивый закат 🌅",
  "Хорошая книга перед сном 📖",
  "Свежие простыни 🛏️",
];

const categories = [
  { label: "Тело", emoji: "🌸", color: "bg-[hsl(275,52%,75%)]", textColor: "text-white" },
  { label: "Природа", emoji: "🌿", color: "bg-[hsl(54,95%,58%)]", textColor: "text-[hsl(280,30%,12%)]" },
  { label: "Люди", emoji: "♡", color: "bg-[hsl(330,75%,78%)]", textColor: "text-white" },
  { label: "Творчество", emoji: "✦", color: "bg-[hsl(280,30%,12%)]", textColor: "text-white" },
];

const tips = [
  {
    title: "Пиши каждый день",
    desc: "Даже 3 пункта в день меняют фокус внимания с проблем на радости",
    color: "bg-[hsl(275,52%,75%)]",
    textColor: "text-white",
  },
  {
    title: "Будь конкретной",
    desc: "Не «солнце», а «солнечный луч упал прямо на мою чашку чая утром»",
    color: "bg-[hsl(54,95%,58%)]",
    textColor: "text-[hsl(280,30%,12%)]",
  },
  {
    title: "Замечай мелочи",
    desc: "Именно в маленьких моментах живёт настоящее счастье и благодарность",
    color: "bg-[hsl(330,75%,78%)]",
    textColor: "text-white",
  },
];

export default function JoyList() {
  const [joys, setJoys] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addJoy = () => {
    if (input.trim()) {
      setJoys((prev) => [input.trim(), ...prev]);
      setInput("");
    }
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="relative bg-[hsl(54,95%,58%)] border-b-[3px] border-[hsl(280,30%,12%)] overflow-hidden">
        <Sparkle size={70} color="#F472B6" className="absolute top-8 right-12 opacity-70 float" />
        <RetroFlower size={55} color="#C084FC" centerColor="white" className="absolute bottom-6 left-6 opacity-50" />
        <Dot size={18} color="white" className="absolute top-16 left-1/4 opacity-60" />
        <CrossStar size={30} color="#F472B6" className="absolute top-10 right-1/3 opacity-40 spin-slow" />
        <Daisy size={50} className="absolute bottom-4 right-8 opacity-30" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[hsl(330,75%,78%)] border-2 border-[hsl(280,30%,12%)] rounded-full px-5 py-2 mb-6 shadow-[3px_3px_0px_hsl(280,30%,12%)]">
                <span className="font-body font-extrabold text-xs uppercase tracking-widest text-white">
                  ♡ Практика радости ♡
                </span>
              </div>
              <h1 className="font-display italic font-bold text-5xl md:text-6xl text-[hsl(280,30%,12%)] leading-tight mb-4">
                Список<br />радостей
              </h1>
              <p className="font-display italic text-xl text-[hsl(280,30%,30%)] mb-2">на каждый день</p>
              <div className="text-[hsl(330,75%,78%)] text-2xl tracking-widest mb-6">〰〰〰〰〰〰</div>
              <p className="font-body text-[hsl(280,30%,20%)] leading-relaxed max-w-md">
                Каждый день замечай маленькие радости — и жизнь начнёт сиять изнутри. Это простая практика, которая меняет всё.
              </p>
            </div>
            {/* Photo */}
            <div className="flex justify-center">
              <div
                className="w-72 h-72 border-[3px] border-[hsl(280,30%,12%)] shadow-[8px_8px_0px_hsl(280,30%,12%)] overflow-hidden"
                style={{ borderRadius: "40% 60% 40% 60% / 60% 40% 60% 40%" }}
              >
                <img
                  src="https://cdn.poehali.dev/projects/4cf41188-5395-41e4-8d67-7a5eb0b6447f/files/122a6597-a158-413c-8e9e-7ca68cbfb248.jpg"
                  alt="Список радостей"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-[hsl(280,30%,12%)] overflow-hidden py-3 border-b-[3px] border-[hsl(280,30%,12%)]">
        <div className="marquee-inner">
          {Array(6).fill(["РАДОСТЬ", "✦", "JOY", "♡", "СЧАСТЬЕ", "✦", "КАЖДЫЙ ДЕНЬ", "♡"]).flat().map((item, i) => (
            <span key={i} className="font-display italic text-sm text-white uppercase tracking-widest px-4">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ADD JOY */}
      <section className="px-4 sm:px-6 py-16 bg-white border-b-[3px] border-[hsl(280,30%,12%)] relative overflow-hidden">
        <Asterisk size={70} color="#C084FC" className="absolute -left-6 top-6 opacity-10 spin-slow" />
        <Flower4 size={55} color="#FAEF5D" className="absolute -right-4 bottom-6 opacity-15" />

        <div className="max-w-2xl mx-auto relative">
          <div className="text-center mb-8">
            <h2 className="font-display italic font-bold text-4xl md:text-5xl text-[hsl(280,30%,12%)] mb-2">
              Моя радость сегодня
            </h2>
            <div className="text-[hsl(275,52%,75%)] text-xl tracking-widest">〰〰〰〰〰〰〰</div>
          </div>

          <div className="bg-[hsl(280,40%,97%)] border-[3px] border-[hsl(280,30%,12%)] rounded-3xl p-6 shadow-[6px_6px_0px_hsl(280,30%,12%)] mb-6">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addJoy()}
                placeholder="Напиши свою радость дня..."
                className="flex-1 bg-white border-2 border-[hsl(280,30%,12%)] rounded-2xl px-4 py-3 font-body text-[hsl(280,30%,12%)] placeholder:text-[hsl(275,15%,65%)] outline-none focus:border-[hsl(275,52%,75%)] transition-colors"
              />
              <button
                onClick={addJoy}
                className="bg-[hsl(275,52%,75%)] hover:bg-[hsl(275,52%,65%)] text-white border-2 border-[hsl(280,30%,12%)] rounded-2xl px-5 py-3 font-body font-extrabold uppercase text-sm tracking-wide shadow-[3px_3px_0px_hsl(280,30%,12%)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-transform"
              >
                ✦ Добавить
              </button>
            </div>
          </div>

          {/* Added joys */}
          {joys.length > 0 && (
            <div className="space-y-3 mb-8">
              {joys.map((joy, i) => (
                <div key={i} className="flex items-center gap-3 bg-[hsl(54,95%,58%)] border-2 border-[hsl(280,30%,12%)] rounded-2xl px-5 py-3 shadow-[2px_2px_0px_hsl(280,30%,12%)]">
                  <span className="text-lg">♡</span>
                  <p className="font-body font-semibold text-[hsl(280,30%,12%)]">{joy}</p>
                </div>
              ))}
            </div>
          )}

          {/* Example joys */}
          <p className="font-body font-bold text-xs uppercase tracking-widest text-[hsl(275,15%,50%)] text-center mb-4">✦ Примеры радостей ✦</p>
          <div className="space-y-2">
            {exampleJoys.map((joy, i) => (
              <div key={i} className={`flex items-center gap-3 border-2 border-[hsl(280,30%,12%)] rounded-2xl px-5 py-3 ${i % 3 === 0 ? "bg-[hsl(275,52%,75%)] text-white" : i % 3 === 1 ? "bg-white text-[hsl(280,30%,12%)]" : "bg-[hsl(330,75%,78%)] text-white"}`}>
                <span className="text-base">♡</span>
                <p className="font-body text-sm font-semibold">{joy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-4 sm:px-6 py-16 bg-[hsl(275,52%,75%)] border-b-[3px] border-[hsl(280,30%,12%)] relative overflow-hidden">
        <Sparkle size={60} color="#FAEF5D" className="absolute top-4 right-6 opacity-50 float" />
        <Dot size={18} color="white" className="absolute bottom-8 left-8 opacity-40" />

        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-10">
            <h2 className="font-display italic font-bold text-4xl md:text-5xl text-white mb-2">
              Категории радостей
            </h2>
            <div className="text-[hsl(54,95%,58%)] text-xl tracking-widest">〰〰〰〰〰〰〰</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <div key={cat.label} className={`${cat.color} ${cat.textColor} border-[3px] border-[hsl(280,30%,12%)] rounded-2xl p-6 text-center card-pop`}>
                <div className="text-4xl mb-3">{cat.emoji}</div>
                <p className="font-display italic font-bold text-xl">{cat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="px-4 sm:px-6 py-16 bg-[hsl(280,40%,97%)] border-b-[3px] border-[hsl(280,30%,12%)] relative overflow-hidden">
        <RetroFlower size={70} color="#F472B6" centerColor="#FAEF5D" className="absolute -right-6 top-8 opacity-15" />
        <CrossStar size={40} color="#C084FC" className="absolute left-6 bottom-6 opacity-15 spin-slow" />

        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-10">
            <h2 className="font-display italic font-bold text-4xl md:text-5xl text-[hsl(280,30%,12%)] mb-2">
              Как вести список
            </h2>
            <div className="text-[hsl(275,52%,75%)] text-xl tracking-widest">〰〰〰〰〰〰〰</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tips.map((tip) => (
              <div key={tip.title} className={`${tip.color} ${tip.textColor} border-[3px] border-[hsl(280,30%,12%)] rounded-3xl p-7 card-pop`}>
                <h3 className="font-display italic font-bold text-2xl mb-3">{tip.title}</h3>
                <p className="font-body text-sm leading-relaxed opacity-90">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
