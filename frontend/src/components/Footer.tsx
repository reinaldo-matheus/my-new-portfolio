import { useState, useEffect } from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const [terminalText, setTerminalText] = useState('');
  const fullText = 'console.log("Thanks for visiting! 🎮");';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contato', href: '#contato' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/reinaldo-matheus', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/matheus-reinaldo', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:reinaldomatheus.dev@gmail.com', label: 'Email' },
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[hsl(var(--background-secondary))]">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">
              MATHEUS
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Full Stack Developer
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center
                           text-muted-foreground hover:text-foreground hover:bg-muted
                           transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Terminal Easter Egg */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Easter Egg
            </h4>
            <div className="terminal">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="mt-3">
                <span className="terminal-prompt">$ </span>
                <span>{terminalText}</span>
                <span className="terminal-cursor" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[hsl(220,20%,12%)] dark:bg-[hsl(220,20%,8%)] text-white/80">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm flex items-center gap-2">
              Desenvolvido com <Heart className="w-4 h-4 text-red-400" /> por{' '}
              <span className="font-semibold text-white">Matheus Reinaldo</span>
            </p>
            <p className="text-sm text-white/60">
              © {currentYear} Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
