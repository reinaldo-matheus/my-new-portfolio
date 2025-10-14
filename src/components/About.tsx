import { Code2, Rocket, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import profilePhoto from '../assets/profile-photo.jpeg';

const About = () => {
  const stats = [
    { icon: Code2, label: 'Projetos Completos', value: '20+' },
    { icon: Rocket, label: 'Anos de Experiência', value: '3+' },
    { icon: Zap, label: 'Tecnologias', value: '15+' },
  ];

  return (
    <section id="sobre" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient font-['Orbitron']">
          Sobre Mim
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Character Card */}
          <div className="animate-slide-in-right">
            <Card className="glass-card p-8 glow-primary hover:glow-secondary transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary glow-accent">
                    <img src={profilePhoto} alt="Matheus - Full Stack Developer" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gradient-neon">Matheus</h3>
                    <p className="text-muted-foreground">Full Stack Developer</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 glass-card rounded-lg">
                    <span className="text-sm text-muted-foreground">JavaScript</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 glass-card rounded-lg">
                    <span className="text-sm text-muted-foreground">TypeScript</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 glass-card rounded-lg">
                    <span className="text-sm text-muted-foreground">React</span>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-secondary animate-glow-pulse" />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 glass-card rounded-lg">
                    <span className="text-sm text-muted-foreground">Next.js</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 glass-card rounded-lg">
                    <span className="text-sm text-muted-foreground">Node.js</span>
                    <div className="flex gap-1">
                      {[...Array(2)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 glass-card rounded-lg">
                    <span className="text-sm text-muted-foreground">PostgreSQL</span>
                    <div className="flex gap-1">
                      {[...Array(2)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-secondary animate-glow-pulse" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* About Text */}
          <div className="space-y-6 animate-slide-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desenvolvedor apaixonado por criar experiências digitais inovadoras e performáticas.
              Especializado em JavaScript, TypeScript e Next.js, com foco em clean code e arquiteturas escaláveis.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Minha missão é transformar ideias complexas em soluções elegantes, priorizando
              qualidade de código, performance e experiência do usuário em cada projeto.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="glass-card p-4 text-center hover:glow-accent transition-all duration-300 cursor-pointer group"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-accent group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-gradient-neon mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
