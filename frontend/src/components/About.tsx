import { Code2, Rocket, Zap } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.jpeg';

const About = () => {
  const stats = [
    { icon: Code2, label: 'Projetos', value: '20+' },
    { icon: Rocket, label: 'Experiência', value: '2+ anos' },
    { icon: Zap, label: 'Tecnologias', value: '15+' },
  ];

  const skills = [
    { name: 'JavaScript', level: 4 },
    { name: 'TypeScript', level: 4 },
    { name: 'React', level: 3 },
    { name: 'Next.js', level: 4 },
    { name: 'Node.js', level: 2 },
    { name: 'PostgreSQL', level: 2 },
  ];

  return (
    <section id="sobre" className="py-24 px-6 bg-[hsl(var(--background-secondary))]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="accent-line" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Sobre mim
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Character Card */}
          <div className="card-modern p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-border">
                <img 
                  src={profilePhoto} 
                  alt="Matheus" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Matheus</h3>
                <p className="text-sm text-muted-foreground">Full Stack Developer</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center p-3 rounded-xl bg-muted/30 border border-border/50"
                >
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <div className="flex gap-1.5">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full transition-colors ${
                          i < skill.level 
                            ? 'bg-primary' 
                            : 'bg-border'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desenvolvedor apaixonado por criar experiências digitais inovadoras e performáticas.
              Especializado em JavaScript, TypeScript e Next.js, sempre buscando aplicar 
              os princípios de clean code e arquiteturas escaláveis.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Minha missão é transformar ideias complexas em soluções práticas, priorizando
              qualidade de código, performance e experiência do usuário em cada projeto.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="card-modern p-5 text-center"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
