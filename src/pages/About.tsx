import { useState } from "react";
import Layout from "@/components/Layout";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const values = [
  { icon: "Heart", title: "Искренность", text: "Всё, что мы создаём, идёт от сердца и живого опыта" },
  { icon: "Sparkles", title: "Свет", text: "Мы верим, что каждый человек несёт в себе свет" },
  { icon: "Leaf", title: "Простота", text: "Духовные практики доступны каждому без сложных ритуалов" },
  { icon: "Shield", title: "Безопасность", text: "Мы создаём безопасное пространство для роста и поиска" },
];

export default function About() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-primary rounded-full px-4 py-1.5 mb-4">
            <Icon name="Info" size={14} />
            <span className="text-sm font-medium">О проекте</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-5">
            Место для внутреннего света
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Мы создали это пространство для тех, кто ищет покой, смысл и силу внутри себя. 
            Каждая аффирмация, молитва и практика здесь — это инструмент для вашего роста.
          </p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Наша история</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Проект «Свет Внутри» родился из личного опыта поиска. В моменты, когда жизнь казалась 
                тяжёлой, именно слова — аффирмации, молитвы — возвращали ощущение почвы под ногами.
              </p>
              <p>
                Мы собрали лучшие практики из разных традиций и адаптировали их для современного 
                человека. Здесь нет строгих рамок — только то, что работает.
              </p>
              <p>
                Присоединяйтесь к нашему сообществу людей, которые выбирают путь осознанности 
                и внутреннего роста.
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-purple-100 to-yellow-100 border border-border p-10 text-center">
            <p className="text-6xl mb-4">✦</p>
            <p className="font-serif text-xl italic text-foreground/80 leading-relaxed">
              "Свет, который ты ищешь снаружи, всегда был внутри тебя"
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-8">Наши ценности</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value) => (
              <div key={value.title} className="bg-white/70 rounded-2xl border border-border p-6 flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={value.icon as "Heart"} size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="text-center">
          <div className="rounded-3xl bg-gradient-to-br from-purple-100 to-yellow-100 border border-border p-10">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-3">Свяжитесь с нами</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Есть вопросы, предложения или хотите сотрудничать? Мы всегда рады диалогу.
            </p>
            <Button
              onClick={() => setContactOpen(true)}
              className="rounded-full bg-primary hover:bg-primary/90 text-white font-medium px-8"
            >
              Написать нам
            </Button>
          </div>
        </div>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </Layout>
  );
}
