import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Contact() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      toast({
        title: "Sucesso!",
        description: "Sua mensagem foi enviada com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro!",
        description: "Ocorreu um erro ao enviar sua mensagem.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6 text-accent" />,
      href: 'mailto:reinaldomatheus.dev@gmail.com',
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6 text-primary" />,
      href: 'https://github.com/reinaldo-matheus',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6 text-secondary" />,
      href: 'https://www.linkedin.com/in/reinaldo-matheus',
    },
  ];

  return (
    <section className="min-h-screen bg-background py-24 px-4" id="contact">
      <h1 className="text-5xl font-bold text-center mb-16 text-gradient-neon font-orbitron">
        Entre em Contato
      </h1>

      <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Formulário */}
        <div className="space-y-6 glass-card p-8 rounded-lg border border-border/50 shadow-lg glow-primary">
          <div>
            <label htmlFor="name" className="block text-foreground mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              placeholder="Seu nome"
              className="w-full bg-card/50 border border-border/50 rounded-md p-3 text-foreground 
                       focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="seu@email.com"
              className="w-full bg-card/50 border border-border/50 rounded-md p-3 text-foreground 
                       focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-foreground mb-2">
              Mensagem
            </label>
            <textarea
              id="message"
              placeholder="Sua mensagem..."
              rows={6}
              className="w-full bg-card/50 border border-border/50 rounded-md p-3 text-foreground 
                       focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none placeholder:text-muted-foreground"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-md font-semibold 
                     hover:opacity-90 transition-all duration-200 glow-primary disabled:opacity-50"
          >
            {isLoading ? (
              "Enviando..."
            ) : (
              <span className="flex items-center justify-center gap-2">
                Enviar Mensagem
              </span>
            )}
          </button>
        </div>

        {/* Info Cards */}
        <div className="space-y-8">
          {/* Redes Sociais */}
          <Card className="glass-card p-8 glow-secondary">
            <h2 className="text-2xl font-bold text-gradient-neon mb-6">Redes Sociais</h2>
            <div className="grid gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border/30 
                           hover:border-secondary/50 transition-all duration-200 hover:glow-secondary"
                >
                  {link.icon}
                  <span className="text-foreground">{link.name}</span>
                </a>
              ))}
            </div>
          </Card>

          {/* Disponibilidade */}
          <Card className="glass-card p-8 glow-accent">
            <h2 className="text-2xl font-bold text-gradient mb-4">Disponibilidade</h2>
            <p className="text-foreground leading-relaxed">
              Atualmente disponível para projetos freelance e oportunidades full-time.
              Sempre aberto para discutir ideias inovadoras e desafios técnicos interessantes.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
