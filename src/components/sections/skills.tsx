import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, FileText, Layers, PenTool, SquarePen, Construction, Wrench } from 'lucide-react';

const skills = [
  { name: 'AutoCAD', icon: <SquarePen className="w-10 h-10 text-primary" /> },
  { name: 'Revit', icon: <Building2 className="w-10 h-10 text-primary" /> },
  { name: 'BIM Modeling', icon: <Layers className="w-10 h-10 text-primary" /> },
  { name: 'Structural Detailing', icon: <Construction className="w-10 h-10 text-primary" /> },
  { name: 'MEP Drafting', icon: <Wrench className="w-10 h-10 text-primary" /> },
  { name: 'Tekla Structures', icon: <PenTool className="w-10 h-10 text-primary" /> },
  { name: 'Blueprint Reading', icon: <FileText className="w-10 h-10 text-primary" /> },
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Keahlian Teknis Saya</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Kumpulan teknologi dan alat yang saya kuasai, sambil terus belajar dan memperluas keahlian saya.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl justify-center gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
