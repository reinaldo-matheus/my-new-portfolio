import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'JavaScript', level: 70 },
    { name: 'TypeScript', level: 60 },
    { name: 'C#', level: 50 },
    { name: 'React / Next.js', level: 70 },
    { name: '.NET', level: 50 },
    { name: 'Node.js', level: 50 },
    { name: 'PostgreSQL', level: 60 },
    { name: 'Git / DevOps', level: 60 },
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'C#', 'Java', 'React', 'Next.js', 'Node.js', 'Express',
    'PostgreSQL', '.NET', 'MongoDB', 'Prisma', 'Docker', 'Git', 'Tailwind CSS',
    'GraphQL', 'REST API', 'WebSockets', 'Jest',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-24 px-6 bg-[hsl(var(--background-secondary))]"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="accent-line" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Habilidades
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-foreground mb-6">Core Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Grid */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Tech Stack</h3>
            <div className="card-modern p-6">
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="skill-tag"
                    style={{ 
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                      transition: `all 0.3s ease ${index * 50}ms`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Fun Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="card-modern p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Clean Code</div>
              </div>
              <div className="card-modern p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
