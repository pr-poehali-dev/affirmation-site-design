import { useState } from "react";
import Layout from "@/components/Layout";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const categories = ["Все", "Медитация", "Дыхание", "Визуализация", "Движение"];

const practices = [
  {
    id: 1,
    title: "Утренняя медитация",
    duration: "10 мин",
    level: "Начинающий",
    category: "Медитация",
    description: "Мягкое пробуждение сознания. Сядьте удобно, закройте глаза и просто наблюдайте за дыханием, не управляя им.",
    steps: [
      "Сядьте удобно, выпрямите спину",
      "Закройте глаза и сделайте 3 глубоких вдоха",
      "Наблюдайте за естественным дыханием",
      "При появлении мыслей мягко возвращайтесь к дыханию",
      "Завершите практику словами благодарности",
    ],
    icon: "Sun",
    color: "from-yellow-50 to-amber-50",
  },
  {
    id: 2,
    title: "Дыхание 4-7-8",
    duration: "5 мин",
    level: "Начинающий",
    category: "Дыхание",
    description: "Техника для мгновенного успокоения нервной системы. Снимает тревогу и помогает заснуть.",
    steps: [
      "Вдох через нос — считайте до 4",
      "Задержка дыхания — считайте до 7",
      "Выдох через рот — считайте до 8",
      "Повторите 4 раза",
      "Почувствуйте, как расслабляется тело",
    ],
    icon: "Wind",
    color: "from-purple-50 to-blue-50",
  },
  {
    id: 3,
    title: "Визуализация изобилия",
    duration: "15 мин",
    level: "Средний",
    category: "Визуализация",
    description: "Мощная практика для привлечения желаемого через образы и чувства. Создайте в уме картину своей лучшей жизни.",
    steps: [
      "Расслабьтесь и закройте глаза",
      "Представьте себя через год — счастливой и процветающей",
      "Добавьте детали: что вы видите, слышите, ощущаете",
      "Почувствуйте радость и благодарность уже сейчас",
      "Поблагодарите эту реальность",
    ],
    icon: "Sparkles",
    color: "from-purple-50 to-yellow-50",
  },
  {
    id: 4,
    title: "Сканирование тела",
    duration: "20 мин",
    level: "Начинающий",
    category: "Медитация",
    description: "Техника для снятия напряжения и восстановления связи с телом. Особенно хороша перед сном.",
    steps: [
      "Лягте на спину, закройте глаза",
      "Начните с кончиков пальцев ног",
      "Медленно двигайтесь вверх, замечая ощущения",
      "Расслабляйте каждую часть тела",
      "Завершите на макушке головы",
    ],
    icon: "Heart",
    color: "from-pink-50 to-purple-50",
  },
  {
    id: 5,
    title: "Танец стихий",
    duration: "20 мин",
    level: "Средний",
    category: "Движение",
    description: "Свободное движение под музыку для освобождения эмоций и пробуждения творческой энергии.",
    steps: [
      "Включите спокойную музыку",
      "Начните с медленных движений рук",
      "Позвольте телу двигаться по своему желанию",
      "Не думайте — просто чувствуйте",
      "Завершите в тишине, поблагодарив своё тело",
    ],
    icon: "Leaf",
    color: "from-green-50 to-yellow-50",
  },
  {
    id: 6,
    title: "Дыхание в квадрат",
    duration: "7 мин",
    level: "Начинающий",
    category: "Дыхание",
    description: "Балансирующая техника для концентрации и ясности ума. Подходит перед важными делами.",
    steps: [
      "Вдох — 4 секунды",
      "Задержка — 4 секунды",
      "Выдох — 4 секунды",
      "Пауза — 4 секунды",
      "Повторите 5-10 раз",
    ],
    icon: "Square",
    color: "from-blue-50 to-purple-50",
  },
];

export default function Practices() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [openPractice, setOpenPractice] = useState<typeof practices[0] | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  const filtered = practices.filter(
    (p) => activeCategory === "Все" || p.category === activeCategory
  );

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-primary rounded-full px-4 py-1.5 mb-4">
            <Icon name="Leaf" size={14} />
            <span className="text-sm font-medium">Практики</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
            Ежедневные ритуалы
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Практики для тела, ума и духа — от 5 до 20 минут в день
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-white/70 text-foreground/70 border border-border hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((practice) => (
            <div
              key={practice.id}
              className={`bg-gradient-to-br ${practice.color} rounded-2xl border border-border p-6 card-hover flex flex-col`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-white/70 flex items-center justify-center">
                  <Icon name={practice.icon as "Sun"} size={20} className="text-primary" />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs font-medium text-muted-foreground bg-white/60 px-2.5 py-0.5 rounded-full">
                    {practice.duration}
                  </span>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                    {practice.level}
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{practice.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{practice.description}</p>

              <Button
                variant="outline"
                onClick={() => setOpenPractice(practice)}
                className="mt-4 w-full rounded-full border-white/80 bg-white/50 hover:bg-white hover:text-primary text-sm"
              >
                Начать практику
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="rounded-3xl bg-gradient-to-br from-purple-100 to-yellow-100 border border-border p-8 max-w-2xl mx-auto">
            <p className="text-3xl mb-3">✦</p>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Нужна индивидуальная практика?
            </h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Мы подберём практики под ваши цели и ситуацию
            </p>
            <Button
              onClick={() => setContactOpen(true)}
              className="rounded-full bg-primary hover:bg-primary/90 text-white font-medium"
            >
              Написать нам
            </Button>
          </div>
        </div>
      </div>

      {/* Practice steps modal */}
      {openPractice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                  {openPractice.category}
                </span>
                <h2 className="font-serif text-2xl font-bold text-foreground mt-2">{openPractice.title}</h2>
              </div>
              <button onClick={() => setOpenPractice(null)} className="text-muted-foreground hover:text-foreground p-1">
                <Icon name="X" size={20} />
              </button>
            </div>
            <div className="flex gap-3 mb-5">
              <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">{openPractice.duration}</span>
              <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">{openPractice.level}</span>
            </div>
            <ol className="space-y-3">
              {openPractice.steps.map((step, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-foreground/80 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
            <Button
              onClick={() => setOpenPractice(null)}
              className="w-full mt-6 rounded-full bg-primary hover:bg-primary/90 text-white"
            >
              Понятно, начинаю
            </Button>
          </div>
        </div>
      )}

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </Layout>
  );
}
