import Layout from "@/components/Layout";
import { Sparkle, RetroFlower, Flower4, CrossStar, Dot, Asterisk } from "@/components/Deco";

const prayerLines = [
  "Я благодарна за этот новый день,",
  "полный возможностей и чудес.",
  "Я благодарна за своё тело,",
  "которое служит мне с любовью и преданностью.",
  "Я благодарна за свой ум,",
  "способный мыслить, творить и выбирать.",
  "Я благодарна за свою жизнь,",
  "за всё, что в ней есть — и за всё, что придёт.",
  "Я благодарна за любовь,",
  "которая наполняет моё сердце.",
  "Я благодарна за изобилие,",
  "которое свободно течёт ко мне.",
  "Я благодарна за всё хорошее,",
  "что есть в моей жизни прямо сейчас.",
  "И так оно и есть.",
];

const affirmations = [
  { text: "Жизнь любит меня", color: "bg-[hsl(275,52%,75%)]", textColor: "text-white" },
  { text: "Я в безопасности", color: "bg-[hsl(54,95%,58%)]", textColor: "text-[hsl(280,30%,12%)]" },
  { text: "Я достойна любви", color: "bg-[hsl(330,75%,78%)]", textColor: "text-white" },
  { text: "Вселенная заботится обо мне", color: "bg-white", textColor: "text-[hsl(280,30%,12%)]" },
  { text: "Каждый день — это дар", color: "bg-[hsl(275,52%,75%)]", textColor: "text-white" },
  { text: "Я открыта чудесам жизни", color: "bg-[hsl(54,95%,58%)]", textColor: "text-[hsl(280,30%,12%)]" },
];

export default function GratitudePrayer() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative bg-[hsl(275,52%,75%)] border-b-[3px] border-[hsl(280,30%,12%)] overflow-hidden">
        <Sparkle size={70} color="#FAEF5D" className="absolute top-8 right-12 opacity-80 float" />
        <RetroFlower size={60} color="#F472B6" centerColor="#FAEF5D" className="absolute bottom-6 left-8 opacity-60" />
        <Dot size={16} color="#FAEF5D" className="absolute top-16 left-1/4 opacity-70" />
        <Dot size={22} color="white" className="absolute bottom-10 right-1/3 opacity-40" />
        <CrossStar size={32} color="white" className="absolute top-10 left-10 opacity-30 spin-slow" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[hsl(54,95%,58%)] border-2 border-[hsl(280,30%,12%)] rounded-full px-5 py-2 mb-6 shadow-[3px_3px_0px_hsl(280,30%,12%)]">
                <span className="font-body font-extrabold text-xs uppercase tracking-widest text-[hsl(280,30%,12%)]">
                  ♡ Молитва дня ♡
                </span>
              </div>
              <h1 className="font-display italic font-bold text-5xl md:text-6xl text-white leading-tight mb-4">
                Молитва<br />благодарности
              </h1>
              <p className="font-display italic text-xl text-white/80 mb-2">Луиза Хей</p>
              <div className="text-[hsl(330,75%,78%)] text-2xl tracking-widest mb-6">〰〰〰〰〰〰</div>
              <p className="font-body text-white/80 leading-relaxed">
                Каждое утро начинай с благодарности — и Вселенная откроет перед тобой двери изобилия и радости.
              </p>
            </div>
            {/* Flower photo */}
            <div className="flex justify-center">
              <div
                className="w-72 h-72 border-[3px] border-[hsl(280,30%,12%)] shadow-[8px_8px_0px_hsl(280,30%,12%)] overflow-hidden"
                style={{ borderRadius: "60% 40% 60% 40% / 40% 60% 40% 60%" }}
              >
                <img
                  src="https://cdn.poehali.dev/projects/4cf41188-5395-41e4-8d67-7a5eb0b6447f/files/a28e35ff-d03e-45c6-a12d-fbbb5bf9f52a.jpg"
                  alt="Молитва благодарности"
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
          {Array(6).fill(["БЛАГОДАРНОСТЬ", "✦", "GRATITUDE", "♡", "ЛУИЗА ХЕЙ", "✦", "МОЛИТВА", "♡"]).flat().map((item, i) => (
            <span key={i} className="font-display italic text-sm text-white uppercase tracking-widest px-4">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* PRAYER TEXT */}
      <section className="px-4 sm:px-6 py-16 bg-white border-b-[3px] border-[hsl(280,30%,12%)] relative overflow-hidden">
        <Asterisk size={80} color="#C084FC" className="absolute -left-6 top-10 opacity-10 spin-slow" />
        <RetroFlower size={60} color="#FAEF5D" centerColor="white" className="absolute -right-4 bottom-10 opacity-15" />

        <div className="max-w-2xl mx-auto text-center relative">
          <p className="font-body font-bold text-xs uppercase tracking-[0.2em] text-[hsl(275,52%,75%)] mb-6">✦ Читай каждое утро ✦</p>
          <div className="bg-[hsl(280,40%,97%)] border-[3px] border-[hsl(280,30%,12%)] rounded-3xl p-8 md:p-12 shadow-[6px_6px_0px_hsl(280,30%,12%)] relative">
            <Sparkle size={28} color="#FAEF5D" className="absolute -top-4 -right-4" />
            <Sparkle size={20} color="#F472B6" className="absolute -bottom-3 -left-3" />
            <div className="space-y-1">
              {prayerLines.map((line, i) => (
                <p
                  key={i}
                  className={`font-display text-xl md:text-2xl text-[hsl(280,30%,12%)] leading-snug ${i % 2 === 1 ? "italic text-[hsl(275,52%,75%)]" : ""}`}
                >
                  {line}
                </p>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t-2 border-[hsl(275,25%,85%)]">
              <p className="font-display italic text-lg text-[hsl(275,52%,75%)]">— Луиза Хей</p>
            </div>
          </div>
        </div>
      </section>

      {/* AFFIRMATIONS GRID */}
      <section className="px-4 sm:px-6 py-16 bg-[hsl(54,95%,58%)] border-b-[3px] border-[hsl(280,30%,12%)] relative overflow-hidden">
        <Flower4 size={80} color="white" className="absolute -right-6 top-4 opacity-20 spin-slow" />
        <Dot size={20} color="#F472B6" className="absolute left-8 bottom-8 opacity-50" />

        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-10">
            <h2 className="font-display italic font-bold text-4xl md:text-5xl text-[hsl(280,30%,12%)] mb-2">
              Аффирмации Луизы Хей
            </h2>
            <div className="text-[hsl(330,75%,78%)] text-xl tracking-widest">〰〰〰〰〰〰〰</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {affirmations.map((a, i) => (
              <div
                key={i}
                className={`${a.color} ${a.textColor} border-[3px] border-[hsl(280,30%,12%)] rounded-2xl p-6 card-pop text-center`}
              >
                <p className="font-display italic font-bold text-xl leading-snug">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="px-4 sm:px-6 py-16 bg-[hsl(330,75%,78%)] border-b-[3px] border-[hsl(280,30%,12%)] relative overflow-hidden">
        <Sparkle size={60} color="#FAEF5D" className="absolute top-6 left-8 opacity-40 float" />
        <CrossStar size={40} color="white" className="absolute bottom-6 right-10 opacity-30 spin-slow" />

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-white border-[3px] border-[hsl(280,30%,12%)] rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_hsl(280,30%,12%)]">
            <h2 className="font-display italic font-bold text-3xl md:text-4xl text-[hsl(280,30%,12%)] mb-6 text-center">
              Как использовать молитву
            </h2>
            <div className="space-y-4">
              {[
                { step: "01", text: "Каждое утро, сразу после пробуждения, сядь удобно и сделай три глубоких вдоха" },
                { step: "02", text: "Прочитай молитву вслух или про себя — медленно, чувствуя каждое слово" },
                { step: "03", text: "Закрой глаза и 1 минуту побудь в состоянии благодарности" },
                { step: "04", text: "Запиши в дневник 3 вещи, за которые ты сегодня особенно благодарна" },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[hsl(275,52%,75%)] border-2 border-[hsl(280,30%,12%)] rounded-full flex items-center justify-center font-display font-black text-sm text-white flex-shrink-0 shadow-[2px_2px_0px_hsl(280,30%,12%)]">
                    {item.step}
                  </div>
                  <p className="font-body text-[hsl(280,30%,12%)] leading-relaxed pt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
