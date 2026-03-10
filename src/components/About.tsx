import { Code2, Rocket, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import profilePhoto from '../assets/profile-photo.jpeg';

const About = () => {
  const stats = [
     { icon: Code2, label: 'Projetos', value: '20+' },
    { icon: Rocket, label: 'Experiência', value: '2+ anos' },
    { icon: Zap, label: 'Tecnologias', value: '15+' },
  ];

   const skills = [
    { name: 'JavaScript', dots: 4, color: 'bg-accent' },
    { name: 'TypeScript', dots: 4, color: 'bg-primary' },
    { name: 'React', dots: 3, color: 'bg-secondary' },
    { name: 'Next.js', dots: 4, color: 'bg-accent' },
    { name: 'Node.js', dots: 2, color: 'bg-primary' },
    { name: 'PostgreSQL', dots: 2, color: 'bg-secondary' },
  ];
  

  return (
     <section id="sobre" className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient font-['Orbitron']">
          Um pouco sobre mim ...
        </h2>
          <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Sobre mim</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient tracking-tight">
            Quem sou eu ?
          </h2>
        </div>

           <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Character Card */}
         <Card className="glass-card p-8 glow-primary">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-primary/30">
                <img src={profilePhoto} alt="Matheus - Full Stack Developer" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Matheus</h3>
                <p className="text-sm text-muted-foreground">Front-End Developer</p>
              </div>
            </div>
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <div key={index} className="flex justify-between items-center p-3 rounded-xl bg-muted/30 border border-border/50">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <div className="flex gap-1.5">
                    {[...Array(skill.dots)].map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${skill.color}`} />
                    ))}
                     </div>
                </div>
                  ))}
               </div>
          </Card>

          {/* About Text */}
            <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desenvolvedor apaixonado por criar experiências digitais inovadoras e performáticas.
              Estou me especializado em JavaScript, TypeScript e Next.js, sempre buscando aplicar os princípios de clean code e arquiteturas escaláveis.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Minha missão é transformar ideias complexas em soluções práticas, priorizando
              qualidade de código, performance e experiência do usuário (principalmente !!!) em cada projeto.
            </p>

            {/* Stats */}
             <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                 className="glass-card p-5 text-center group hover:glow-primary transition-all duration-300"
                >
                   <stat.icon className="w-6 h-6 mx-auto mb-3 text-accent" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
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
