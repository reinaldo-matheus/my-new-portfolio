import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'JavaScript', level: 95, color: 'bg-accent' },
    { name: 'TypeScript', level: 90, color: 'bg-primary' },
    { name: 'React / Next.js', level: 92, color: 'bg-secondary' },
    { name: 'Node.js', level: 88, color: 'bg-accent' },
    { name: 'PostgreSQL', level: 85, color: 'bg-primary' },
    { name: 'Git / DevOps', level: 87, color: 'bg-secondary' },
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express',
    'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Git', 'Tailwind CSS',
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
    <section id="skills" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient font-['Orbitron']">
          Habilidades
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Bars - HUD Style */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-bold text-gradient-neon mb-6">Core Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                </div>
                <div className="h-3 glass-card rounded-full overflow-hidden relative">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                    }}
                  >
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Grid */}
          <div className="animate-slide-in-up">
            <h3 className="text-2xl font-bold text-gradient-neon mb-6">Tech Stack</h3>
            <Card className="glass-card p-6 glow-primary">
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 glass-card rounded-lg text-sm font-medium hover:glow-accent transition-all duration-300 cursor-pointer hover:scale-105 border border-accent/20"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            {/* Fun stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Card className="glass-card p-6 text-center hover:glow-secondary transition-all duration-300 group cursor-pointer">
                <div className="text-4xl font-bold text-gradient-neon mb-2 group-hover:scale-110 transition-transform">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">Clean Code</div>
              </Card>
              <Card className="glass-card p-6 text-center hover:glow-accent transition-all duration-300 group cursor-pointer">
                <div className="text-4xl font-bold text-gradient-neon mb-2 group-hover:scale-110 transition-transform">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">Learning</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
