import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Wind, Layers, Bot, Palette, Server } from 'lucide-react';

const skills = [
  { name: 'JavaScript (ES6+)', icon: <Code className="w-10 h-10 text-primary" /> },
  { name: 'TypeScript', icon: <Code className="w-10 h-10 text-primary" /> },
  { name: 'React & Next.js', icon: <Code className="w-10 h-10 text-primary" /> },
  { name: 'Node.js & Express', icon: <Server className="w-10 h-10 text-primary" /> },
  { name: 'HTML5 & CSS3', icon: <Palette className="w-10 h-10 text-primary" /> },
  { name: 'Tailwind CSS', icon: <Wind className="w-10 h-10 text-primary" /> },
  { name: 'SQL & NoSQL', icon: <Database className="w-10 h-10 text-primary" /> },
  { name: 'REST & GraphQL', icon: <Layers className="w-10 h-10 text-primary" /> },
  { name: 'GenAI & LLMs', icon: <Bot className="w-10 h-10 text-primary" /> },
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Technical Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A collection of technologies and tools I am proficient with, continuously learning and expanding my expertise.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl justify-center gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {skills.map(skill => (
            <Card key={skill.name} className="flex flex-col items-center justify-center text-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="p-0 mb-4">
                {skill.icon}
              </CardHeader>
              <CardContent className="p-0">
                <CardTitle className="text-md font-medium">{skill.name}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
