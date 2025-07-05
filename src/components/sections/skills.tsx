import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skills } from '@/lib/data';
import Image from 'next/image';

export function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Technical Expertise</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed lg:text-xl/relaxed">
              A collection of the technologies and tools I master, while continuously learning and expanding my skillset.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl justify-center gap-6 py-12 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5">
          {skills.map(skill => {
            return (
              <Card key={skill.name} className="flex flex-col items-center justify-center text-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="p-0 mb-4">
                  <Image
                    src={skill.imageUrl}
                    alt={`${skill.name} logo`}
                    width={64}
                    height={64}
                    className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
                  />
                </CardHeader>
                <CardContent className="p-0">
                  <CardTitle className="text-md font-medium">{skill.name}</CardTitle>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
