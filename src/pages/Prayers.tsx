import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const prayers = [
  {
    id: 1,
    title: "Молитва о благодарности",
    preview: "Благодарю за каждый миг, за каждый вздох, за каждый свет...",
    full: `Благодарю за каждый миг,
За каждый вздох, за каждый свет.
За тишину и за движение,
За всё, что есть и чего нет.

За утро, что встречает нежно,
За вечер, полный тишины.
За всех, кто рядом неизменно,
За ваши сны и мои сны.`,
    category: "Благодарность",
    price: "Бесплатно",
    isPaid: false,
  },
  {
    id: 2,
    title: "Молитва о любви и защите",
    preview: "Пусть любовь окружает меня, как свет звезды...",
    full: null,
    category: "Любовь",
    price: "290 ₽",
    isPaid: true,
  },
  {
    id: 3,
    title: "Молитва об исцелении",
    preview: "Да исцелится моё тело, да успокоится мой ум...",
    full: null,
    category: "Здоровье",
    price: "290 ₽",
    isPaid: true,
  },
  {
    id: 4,
    title: "Утренняя молитва",
    preview: "С первым светом дня я открываю сердце навстречу миру...",
    full: `С первым светом дня
Я открываю сердце навстречу миру.
Пусть сегодняшний день будет наполнен
Любовью, светом и добром.

Пусть мои слова несут тепло,
А дела — пользу и радость.
Пусть каждый встреченный человек
Почувствует мою искренность.`,
    category: "Утро",
    price: "Бесплатно",
    isPaid: false,
  },
  {
    id: 5,
    title: "Молитва об изобилии",
    preview: "Открываю своё сердце потоку изобилия вселенной...",
    full: null,
    category: "Изобилие",
    price: "390 ₽",
    isPaid: true,
  },
  {
    id: 6,
    title: "Вечерняя молитва",
    preview: "Благодарю уходящий день за всё, что он принёс...",
    full: `Благодарю уходящий день
За всё, что он принёс.
За радости и за уроки,
За всё, что сердце разожгло.

Ложусь я в тишине и мире,
Отпуская всё, что было.
И в снах мне пусть приснится свет —
Тот свет, что не угас и не погас.`,
    category: "Вечер",
    price: "Бесплатно",
    isPaid: false,
  },
];

export default function Prayers() {
  const [selectedPrayer, setSelectedPrayer] = useState<typeof prayers[0] | null>(null);
  const [buyModal, setBuyModal] = useState<typeof prayers[0] | null>(null);
  const [email, setEmail] = useState("");
  const [purchased, setPurchased] = useState(false);

  const handleBuy = (e: React.FormEvent) => {
    e.preventDefault();
    setPurchased(true);
    setTimeout(() => {
      setPurchased(false);
      setEmail("");
      setBuyModal(null);
    }, 2500);
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 rounded-full px-4 py-1.5 mb-4">
            <Icon name="Heart" size={14} />
            <span className="text-sm font-medium">Молитвы</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
            Слова силы и света
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Молитвы для обретения покоя, силы и связи с собой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prayers.map((prayer) => (
            <div key={prayer.id} className="bg-gradient-to-br from-white to-yellow-50/40 rounded-2xl border border-border p-6 card-hover flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-medium text-yellow-800 bg-yellow-100 px-2.5 py-0.5 rounded-full">
                  {prayer.category}
                </span>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                  prayer.isPaid
                    ? "bg-primary/10 text-primary"
                    : "bg-green-100 text-green-700"
                }`}>
                  {prayer.price}
                </span>
              </div>

              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{prayer.title}</h3>
              <p className="text-sm text-muted-foreground italic leading-relaxed flex-1">{prayer.preview}</p>

              <div className="mt-4">
                {prayer.isPaid ? (
                  <Button
                    onClick={() => setBuyModal(prayer)}
                    className="w-full rounded-full bg-primary hover:bg-primary/90 text-white text-sm"
                  >
                    <Icon name="Lock" size={14} className="mr-1.5" />
                    Купить полную версию
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    onClick={() => setSelectedPrayer(prayer)}
                    className="w-full rounded-full border-border hover:border-primary/40 hover:text-primary text-sm"
                  >
                    <Icon name="BookOpen" size={14} className="mr-1.5" />
                    Читать молитву
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Read modal */}
      <Dialog open={!!selectedPrayer} onOpenChange={() => setSelectedPrayer(null)}>
        <DialogContent className="sm:max-w-lg rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl text-foreground">{selectedPrayer?.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-2">
            <span className="text-xs font-medium text-yellow-800 bg-yellow-100 px-2.5 py-0.5 rounded-full">
              {selectedPrayer?.category}
            </span>
            <p className="font-serif text-base leading-relaxed text-foreground mt-4 whitespace-pre-line italic">
              {selectedPrayer?.full}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Buy modal */}
      <Dialog open={!!buyModal} onOpenChange={() => { setBuyModal(null); setPurchased(false); }}>
        <DialogContent className="sm:max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl text-primary">
              {purchased ? "Спасибо за покупку!" : "Купить молитву"}
            </DialogTitle>
          </DialogHeader>

          {purchased ? (
            <div className="py-6 text-center">
              <div className="text-5xl mb-3">✦</div>
              <p className="font-serif text-lg text-foreground mb-1">{buyModal?.title}</p>
              <p className="text-sm text-muted-foreground">Ссылка для доступа отправлена на ваш email.</p>
            </div>
          ) : (
            <div>
              <div className="bg-yellow-50 rounded-xl p-4 mb-5">
                <p className="font-serif text-base font-semibold text-foreground">{buyModal?.title}</p>
                <p className="text-2xl font-bold text-primary mt-1">{buyModal?.price}</p>
              </div>
              <form onSubmit={handleBuy} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Ваш email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-xl"
                  />
                  <p className="text-xs text-muted-foreground mt-1">На него придёт ссылка для доступа</p>
                </div>
                <Button type="submit" className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-medium">
                  Оплатить {buyModal?.price}
                </Button>
              </form>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
