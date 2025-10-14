import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Desenvolvido com <Heart className="w-4 h-4 text-accent animate-glow-pulse" /> por{' '}
          <span className="text-gradient-neon font-bold">Matheus Reinado</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
