import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const categories = ["Все", "Любовь", "Здоровье", "Успех", "Изобилие", "Спокойствие"];

const affirmations = [
  { id: 1, text: "Я привлекаю в свою жизнь любовь и гармонию", category: "Любовь" },
  { id: 2, text: "Моё тело здорово, сильно и полно энергии", category: "Здоровье" },
  { id: 3, text: "Успех приходит ко мне легко и естественно", category: "Успех" },
  { id: 4, text: "Я открыта для изобилия во всех его формах", category: "Изобилие" },
  { id: 5, text: "В моём сердце живёт глубокий покой и тишина", category: "Спокойствие" },
  { id: 6, text: "Я достойна любви, заботы и уважения", category: "Любовь" },
  { id: 7, text: "С каждым днём я становлюсь всё здоровее", category: "Здоровье" },
  { id: 8, text: "Деньги текут ко мне легко и с радостью", category: "Изобилие" },
  { id: 9, text: "Я выбираю мир и спокойствие в каждый момент", category: "Спокойствие" },
  { id: 10, text: "Мои цели реальны, и я иду к ним уверенно", category: "Успех" },
  { id: 11, text: "Любовь окружает меня со всех сторон", category: "Любовь" },
  { id: 12, text: "Я благодарна за всё хорошее в моей жизни", category: "Спокойствие" },
];

export default function Affirmations() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [showCreate, setShowCreate] = useState(false);
  const [newAffirmation, setNewAffirmation] = useState("");
  const [newCategory, setNewCategory] = useState("Любовь");
  const [myAffirmations, setMyAffirmations] = useState<typeof affirmations>([]);
  const [saved, setSaved] = useState<number[]>([]);

  const filtered = [...affirmations, ...myAffirmations].filter(
    (a) => activeCategory === "Все" || a.category === activeCategory
  );

  const handleCreate = () => {
    if (!newAffirmation.trim()) return;
    const id = Date.now();
    setMyAffirmations((prev) => [...prev, { id, text: newAffirmation, category: newCategory }]);
    setNewAffirmation("");
    setShowCreate(false);
  };

  const toggleSave = (id: number) => {
    setSaved((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-primary rounded-full px-4 py-1.5 mb-4">
            <Icon name="Sparkles" size={14} />
            <span className="text-sm font-medium">Аффирмации</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
            Слова, меняющие жизнь
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Повторяйте аффирмации ежедневно и наблюдайте, как меняется ваш взгляд на мир
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
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

        {/* Create button */}
        <div className="flex justify-end mb-6">
          <Button
            onClick={() => setShowCreate(!showCreate)}
            className="rounded-full bg-primary hover:bg-primary/90 text-white gap-2"
          >
            <Icon name="Plus" size={16} />
            Создать свою аффирмацию
          </Button>
        </div>

        {/* Create form */}
        {showCreate && (
          <div className="bg-white/80 rounded-2xl border border-border p-6 mb-8">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Новая аффирмация</h3>
            <div className="space-y-4">
              <Textarea
                placeholder="Напишите свою аффирмацию... Например: «Я полна сил и вдохновения»"
                value={newAffirmation}
                onChange={(e) => setNewAffirmation(e.target.value)}
                className="rounded-xl resize-none"
                rows={3}
              />
              <div className="flex gap-3 flex-wrap">
                {categories.slice(1).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setNewCategory(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all border ${
                      newCategory === cat
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-foreground/60 border-border hover:border-primary/40"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <Button onClick={handleCreate} className="rounded-full bg-primary text-white hover:bg-primary/90">
                  Сохранить
                </Button>
                <Button variant="ghost" onClick={() => setShowCreate(false)} className="rounded-full">
                  Отмена
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Affirmations grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((aff) => (
            <div
              key={aff.id}
              className="group relative bg-gradient-to-br from-white to-purple-50/50 rounded-2xl border border-border p-6 card-hover"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                  {aff.category}
                </span>
                <button
                  onClick={() => toggleSave(aff.id)}
                  className="text-muted-foreground hover:text-primary transition-colors mt-0.5 flex-shrink-0"
                >
                  <Icon name={saved.includes(aff.id) ? "Heart" : "Heart"} size={16} className={saved.includes(aff.id) ? "fill-primary text-primary" : ""} />
                </button>
              </div>
              <p className="font-serif text-lg leading-relaxed text-foreground mt-3 italic">
                "{aff.text}"
              </p>
            </div>
          ))}
        </div>

        {myAffirmations.length > 0 && (
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Мои аффирмации: {myAffirmations.length} шт. — видны только вам
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}
