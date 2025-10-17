import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Clone TabNews',
      description: 'Projeto piloto de aprendizagem aplicando conceitos do curso.dev - em desenvolvimento.',
      tech: ['Next.js', 'React', 'Node.js', 'Docker', 'Jest'],
      gradient: 'from-primary to-accent',
      github: 'https://github.com/reinaldo-matheus/clone-tabnews',
      demo: 'https://clone-tabnews-snowy-seven-88.vercel.app/',
    },
    {
      title: 'PetDev',
      description: 'Sistema de gerenciamento para petshops com funcionalidades completas.',
      tech: ['React', 'TypeScript', 'Node.js'],
      gradient: 'from-secondary to-primary',
      github: 'https://github.com/reinaldo-matheus/petDev',
    },
    {
      title: 'Landing Page GTA',
      description: 'Landing page temática do GTA com design moderno e responsivo.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      gradient: 'from-accent to-secondary',
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
      title: 'Gerenciador de Tarefas',
      description: 'Aplicação Java web para gestão de tarefas utilizando framework JSF.                                                                                                                                                                                                     ',
      tech: ['Java', 'JSF', 'Web'],
      gradient: 'from-secondary to-accent',
      github: 'https://github.com/reinaldo-matheus/gerenciador-de-tarefas-java',
    },
    {
      title: 'Registration User React',
      description: 'Sistema de cadastro de usuários desenvolvido em duas etapas, utilizando React no Front-End. Já em seu Back-End, utilizei Node.Js, Prisma e MongoDB.',
      tech: ['React', 'JavaScript', 'Node.Js', 'MongoDB'],
      gradient: 'from-accent to-primary',
      github: 'https://github.com/reinaldo-matheus/registration-user-react',
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
