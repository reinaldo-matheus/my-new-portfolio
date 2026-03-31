import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
     {
      title: 'CodeSharp#',
      description: 'O CodeSharp é um protótipo de plataforma gamificada inspirado em Duolingo e Mimo, criado para ensinar C# e .NET de forma prática, divertida e progressiva.',
      tech: ['TypeScript', 'React', 'Tailwind CSS'],
      github: 'https://github.com/reinaldo-matheus/codesharp-adventures.git',
      status: 'Em desenvolvimento'
    },
    {
      title: 'Clone TabNews',
      description: 'Projeto piloto de aprendizagem aplicando conceitos do curso.dev - em desenvolvimento.',
      tech: ['Next.js', 'React', 'Node.js', 'Docker', 'Jest'],
      github: 'https://github.com/reinaldo-matheus/clone-tabnews',
      demo: 'https://clone-tabnews-snowy-seven-88.vercel.app/',
    },
    {
      title: 'PetDev',
      description: 'Sistema de gerenciamento para petshops com funcionalidades completas.',
      tech: ['React', 'TypeScript', 'Node.js'],
      github: 'https://github.com/reinaldo-matheus/petDev',
    },
    {
      title: 'Landing Page GTA',
      description: 'Landing page temática do GTA com design moderno e responsivo.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/reinaldo-matheus/landingPage-gta',
    },
    {
      title: 'E-commerce WebStore',
      description: 'Plataforma de e-commerce desenvolvida aplicando os conhecimentos adiquiridos em Typescript, Next.Js, Prisma e outras tecnologias abordadas na instituição Dev Quest.',
      tech: ['Next.js', 'Typescript', 'Prisma'],
      gradient: 'from-primary to-secondary',
      github: 'https://github.com/reinaldo-matheus/ecommerce-dev-em-dobro',
    },
    {
      title: 'Registration User React',
      description: 'Sistema de cadastro de usuários desenvolvido em duas etapas, utilizando React no Front-End. Já em seu Back-End, utilizei Node.Js, Prisma e MongoDB.',
      tech: ['React', 'JavaScript', 'Node.Js', 'MongoDB'],
      github: 'https://github.com/reinaldo-matheus/registration-user-react',
    },
  ];

  return (
    <section id="projetos" className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto">
          <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Portfólio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient tracking-tight">
            Projetos em Destaque
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
               className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300 hover:glow-primary"
            >
                 <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground">
                  {project.title}
                </h3>

                {project.status && (
                  <Badge variant="outline" className="text-xs border-accent/40 text-accent shrink-0 ml-2">
                    {project.status}
                  </Badge>
                )}
              </div>
              
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {project.description}
              </p>

                <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-medium bg-muted/50 rounded-md text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

                <div className="flex gap-3 pt-2 border-t border-border/50">
                <Button
                  size="sm"
                  variant="ghost"
                  className="flex-1 text-muted-foreground hover:text-foreground"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Código
                </Button>
                {project.demo && (
                    <Button
                      size="sm"
                      variant="ghost"
                    className="flex-1 text-accent hover:text-accent"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                     <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  )}
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
