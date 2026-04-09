import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const tags = ["Все", "Аффирмации", "Молитвы", "Практики", "Осознанность", "Вдохновение"];

const posts = [
  {
    id: 1,
    title: "Как начать день с намерением",
    excerpt: "Утренние практики, которые меняют качество всего дня. Простые ритуалы, которые заряжают энергией и помогают сохранить фокус.",
    date: "5 апреля 2024",
    readTime: "5 мин",
    tag: "Практики",
    featured: true,
    content: `Утро задаёт тон всему дню. Как вы начинаете своё утро — так и пройдёт день.

Вот три простых ритуала, которые изменят ваше утро:

**1. Благодарность до телефона**
Прежде чем тянуться к смартфону, назовите три вещи, за которые вы благодарны. Это занимает 30 секунд, но меняет химию мозга.

**2. Аффирмация дня**
Выберите одну фразу, которую будете повторять сегодня. Например: «Сегодня я действую с лёгкостью и радостью».

**3. Намерение**
Спросите себя: «Каким человеком я хочу быть сегодня?» Не что сделать, а каким быть.`,
  },
  {
    id: 2,
    title: "Сила слова: как работают аффирмации",
    excerpt: "Научный взгляд на то, почему регулярное повторение позитивных утверждений меняет наш мозг и, в конечном счёте, нашу судьбу.",
    date: "28 марта 2024",
    readTime: "7 мин",
    tag: "Аффирмации",
    featured: false,
    content: `Аффирмации — это не магия. Это нейронаука.

Наш мозг обладает нейропластичностью — способностью меняться под воздействием повторяющихся мыслей и действий. Когда мы регулярно повторяем позитивные утверждения, мы буквально создаём новые нейронные пути.

Как правильно работать с аффирмациями:
- Повторяйте их в настоящем времени («Я есть», а не «Я буду»)
- Добавляйте чувства — просто слова без эмоций работают слабее
- Делайте это регулярно — минимум 21 день`,
  },
  {
    id: 3,
    title: "Молитва как разговор с собой",
    excerpt: "Почему молитва — это не просьба, а диалог с глубинным «я» и вселенной. Новый взгляд на древнюю практику.",
    date: "20 марта 2024",
    readTime: "6 мин",
    tag: "Молитвы",
    featured: false,
    content: `Многие думают, что молитва — это просьба о помощи к кому-то снаружи. Но есть другой взгляд.

Молитва — это разговор с той частью нас, которая знает больше, чем наш разум. С интуицией. С мудростью.

Когда мы молимся, мы:
- Замедляемся и становимся присутствующими
- Выражаем то, что важно нам по-настоящему
- Открываемся ответам, которые уже есть внутри нас`,
  },
  {
    id: 4,
    title: "Дыхание: самый быстрый способ успокоиться",
    excerpt: "Три дыхательные техники, которые работают за 5 минут. Без подготовки, без специального места, в любой ситуации.",
    date: "12 марта 2024",
    readTime: "4 мин",
    tag: "Практики",
    featured: false,
    content: `Дыхание — это мост между телом и умом. Управляя дыханием, мы управляем состоянием.

**Техника 4-7-8**
Вдох 4 секунды, задержка 7, выдох 8. Активирует парасимпатическую нервную систему.

**Дыхание в квадрат**
По 4 секунды на каждую фазу. Балансирует и успокаивает.

**Сигхинг (двойной выдох)**
Глубокий вдох + ещё один маленький вдох сверху, затем долгий выдох. Мгновенно снимает напряжение.`,
  },
  {
    id: 5,
    title: "Как найти время для практики в занятом дне",
    excerpt: "Вы не найдёте время для практики — вы должны его создать. Конкретные стратегии для тех, кто всегда занят.",
    date: "5 марта 2024",
    readTime: "5 мин",
    tag: "Осознанность",
    featured: false,
    content: `Главная ложь, которую мы говорим себе: «У меня нет времени».

Правда: мы всегда находим время для того, что считаем важным.

Стратегии для занятых:
- Привяжите практику к уже существующей привычке (кофе = аффирмации)
- Начните с 2 минут — всегда можно найти 2 минуты
- Считайте практику инвестицией, а не расходом времени`,
  },
  {
    id: 6,
    title: "Почему благодарность меняет всё",
    excerpt: "Научные исследования показывают: регулярная практика благодарности буквально меняет структуру мозга.",
    date: "26 февраля 2024",
    readTime: "6 мин",
    tag: "Вдохновение",
    featured: false,
    content: `Благодарность — это не просто красивое слово. Это мощный инструмент трансформации.

Исследования показывают, что люди, регулярно практикующие благодарность:
- Спят лучше
- Чувствуют себя счастливее
- Более устойчивы к стрессу

Простая практика: каждый вечер записывайте три вещи, за которые вы благодарны. Конкретно. Не «семья», а «сегодня дочь засмеялась, и это было прекрасно».`,
  },
];

export default function Blog() {
  const [activeTag, setActiveTag] = useState("Все");
  const [openPost, setOpenPost] = useState<typeof posts[0] | null>(null);

  const filtered = posts.filter((p) => activeTag === "Все" || p.tag === activeTag);
  const featured = posts.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured || activeTag !== "Все");

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 rounded-full px-4 py-1.5 mb-4">
            <Icon name="BookOpen" size={14} />
            <span className="text-sm font-medium">Блог</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
            Мысли о пути
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Статьи о практиках, осознанности и внутреннем росте
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTag === tag
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-white/70 text-foreground/70 border border-border hover:border-primary/40 hover:text-primary"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Featured post */}
        {activeTag === "Все" && featured && (
          <div
            className="bg-gradient-to-br from-purple-100 to-yellow-100 rounded-3xl border border-border p-8 md:p-10 mb-8 card-hover cursor-pointer"
            onClick={() => setOpenPost(featured)}
          >
            <div className="flex items-start gap-4 flex-wrap mb-4">
              <span className="text-xs font-medium text-primary bg-white/70 px-3 py-1 rounded-full border border-white">
                {featured.tag}
              </span>
              <span className="text-xs font-medium bg-primary text-white px-3 py-1 rounded-full">
                Главная статья
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
              {featured.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">{featured.excerpt}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>{featured.date}</span>
              <span>·</span>
              <span>{featured.readTime} чтения</span>
            </div>
          </div>
        )}

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <div
              key={post.id}
              className="bg-white/70 rounded-2xl border border-border p-6 card-hover cursor-pointer flex flex-col"
              onClick={() => setOpenPost(post)}
            >
              <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full w-fit">
                {post.tag}
              </span>
              <h3 className="font-serif text-lg font-semibold text-foreground mt-3 mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground/70 mt-4">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime} чтения</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Post modal */}
      {openPost && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-10 bg-black/40 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-xl mb-10">
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                {openPost.tag}
              </span>
              <button onClick={() => setOpenPost(null)} className="text-muted-foreground hover:text-foreground p-1">
                <Icon name="X" size={20} />
              </button>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">{openPost.title}</h2>
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-6">
              <span>{openPost.date}</span>
              <span>·</span>
              <span>{openPost.readTime} чтения</span>
            </div>
            <div className="prose prose-sm max-w-none text-foreground/80 leading-relaxed whitespace-pre-line">
              {openPost.content}
            </div>
            <Button
              variant="outline"
              onClick={() => setOpenPost(null)}
              className="mt-6 rounded-full"
            >
              Закрыть
            </Button>
          </div>
        </div>
      )}
    </Layout>
  );
}
