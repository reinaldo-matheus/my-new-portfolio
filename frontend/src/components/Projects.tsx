import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'CodeSharp#',
      description: 'Plataforma gamificada inspirada em Duolingo e Mimo, criada para ensinar C# e .NET de forma prática, divertida e progressiva.',
      tech: ['TypeScript', 'React', 'Tailwind CSS'],
      github: 'https://github.com/reinaldo-matheus/codesharp-adventures.git',
      status: 'Em desenvolvimento'
    },
    {
      title: 'Clone TabNews',
      description: 'Projeto de aprendizagem aplicando conceitos do curso.dev com foco em boas práticas.',
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
      description: 'Plataforma de e-commerce desenvolvida com Next.js, Prisma e TypeScript.',
      tech: ['Next.js', 'TypeScript', 'Prisma'],
      github: 'https://github.com/reinaldo-matheus/ecommerce-dev-em-dobro',
    },
    {
      title: 'Registration User',
      description: 'Sistema de cadastro de usuários com React no Front-End e Node.js + MongoDB no Back-End.',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/reinaldo-matheus/registration-user-react',
    },
  ];

  return (
    <section id="projetos" className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="accent-line-primary" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Projetos em Destaque
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 stagger-children">
          {projects.map((project, index) => (
            <article
              key={index}
              className="card-modern p-6 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 rounded-full bg-primary" />
                  <h3 className="text-lg font-bold text-foreground">
                    {project.title}
                  </h3>
                </div>

                {project.status && (
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {project.status}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="skill-tag"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-primary/10">
                <Button
                  size="sm"
                  variant="ghost"
                  className="flex-1 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Código
                </Button>
                {project.demo && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex-1 text-primary hover:text-primary hover:bg-primary/10 rounded-full"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
