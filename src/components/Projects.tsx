import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de e-commerce com Next.js, pagamentos Stripe e dashboard admin.',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      gradient: 'from-primary to-accent',
    },
    {
      title: 'AI Content Generator',
      description: 'Gerador de conteúdo com IA integrado com OpenAI API, sistema de créditos e autenticação.',
      tech: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
      gradient: 'from-secondary to-primary',
    },
    {
      title: 'Real-time Chat App',
      description: 'Aplicação de chat em tempo real com WebSockets, rooms privados e compartilhamento de mídia.',
      tech: ['Socket.io', 'Express', 'React', 'Redis'],
      gradient: 'from-accent to-secondary',
    },
  ];

  return (
    <section id="projetos" className="py-20 px-6 bg-background-secondary">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient font-['Orbitron']">
          Projetos em Destaque
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card p-6 group hover:scale-105 transition-all duration-300 cursor-pointer animate-scale-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 text-gradient-neon group-hover:scale-105 transition-transform">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium glass-card rounded-full text-accent border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
