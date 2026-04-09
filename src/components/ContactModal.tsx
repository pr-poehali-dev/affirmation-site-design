import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
}

export default function ContactModal({ open, onClose, title = "Написать нам" }: ContactModalProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl text-primary">{title}</DialogTitle>
        </DialogHeader>

        {sent ? (
          <div className="py-8 text-center">
            <div className="text-4xl mb-3">✦</div>
            <p className="font-serif text-lg text-primary">Спасибо!</p>
            <p className="text-sm text-muted-foreground mt-1">Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div>
              <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Ваше имя</label>
              <Input
                placeholder="Введите имя"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="rounded-xl"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Email</label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="rounded-xl"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Сообщение</label>
              <Textarea
                placeholder="Напишите ваш вопрос или пожелание..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="rounded-xl resize-none"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white font-medium">
              Отправить
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
