import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dynamic theme-aware overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Animated particles effect overlay - theme-aware brightness */}
      <div className="absolute inset-0 hero-particles">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-float glow-accent" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-float glow-primary" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-secondary rounded-full animate-float glow-secondary" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-accent rounded-full animate-float glow-accent" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-primary rounded-full animate-float glow-primary" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 z-10 text-center animate-slide-in-up">
        <div className="inline-block mb-4 px-4 py-2 glass-card rounded-full text-sm font-medium text-accent glow-accent">
          Desenvolvedor Full Stack
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Orbitron']">
          Olá, me chamo{' '}
          <span className="text-gradient-neon animate-glow-pulse">Matheus</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Transformando ideias em experiências digitais inovadoras com a linguagem mais adequada, sem esquecer dos princípios do clean code
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-primary font-semibold px-8 py-6 text-lg group"
          >
            Ver Meus Projetos
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-accent text-accent hover:bg-accent hover:text-background font-semibold px-8 py-6 text-lg transition-all"
          >
            Curtiu? Entre em Contato 😉
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
