import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '../assets/profile-photo.jpeg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-background pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Matheus
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Desenvolvedor Full Stack apaixonado por criar experiências digitais 
              inovadoras e performáticas, transformando ideias em soluções práticas 
              com foco em código limpo e qualidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('sobre')}
                className="btn-modern group"
              >
                Sobre mim
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToSection('projetos')}
                className="px-6 py-3 rounded-full font-medium border-border hover:bg-muted/50 hover:border-primary/50 transition-all"
              >
                Ver Projetos
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="profile-photo-container">
              <div className="relative">
                {/* Decorative glow background - purple */}
                <div 
                  className="hero-glow"
                  aria-hidden="true"
                />
                
                {/* Photo */}
                <img
                  src={profilePhoto}
                  alt="Matheus - Full Stack Developer"
                  className="profile-photo relative w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[420px] object-cover border-4 border-background shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
