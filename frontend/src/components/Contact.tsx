import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate sending
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível enviar a mensagem.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    {
      name: 'Email',
      value: 'reinaldomatheus.dev@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:reinaldomatheus.dev@gmail.com',
    },
    {
      name: 'GitHub',
      value: 'reinaldo-matheus',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/reinaldo-matheus',
    },
    {
      name: 'LinkedIn',
      value: 'matheus-reinaldo',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/matheus-reinaldo',
    },
  ];

  return (
    <section id="contato" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-16">
          <div className="accent-line-primary" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Entre em Contato
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="card-modern p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Seu nome"
                className="w-full bg-muted/30 border border-border rounded-xl p-3 text-foreground 
                         focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
                         placeholder:text-muted-foreground transition-all"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                className="w-full bg-muted/30 border border-border rounded-xl p-3 text-foreground 
                         focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
                         placeholder:text-muted-foreground transition-all"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Sua mensagem..."
                rows={5}
                className="w-full bg-muted/30 border border-border rounded-xl p-3 text-foreground 
                         focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
                         resize-none placeholder:text-muted-foreground transition-all"
                required
              />
            </div>
            
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full btn-modern"
            >
              {isLoading ? (
                "Enviando..."
              ) : (
                <>
                  Enviar Mensagem
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Social Links */}
            <div className="card-modern p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Redes Sociais</h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 
                             hover:border-primary/30 hover:bg-muted/50 transition-all group"
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground block">{link.name}</span>
                      <span className="text-foreground font-medium">{link.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="card-modern p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Disponibilidade</h3>
              <p className="text-muted-foreground leading-relaxed">
                Atualmente disponível para projetos freelance e oportunidades full-time.
                Sempre aberto para discutir ideias inovadoras e desafios técnicos interessantes.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">Disponível para novos projetos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
