import type { Project } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={600}
            height={400}
            data-ai-hint={project.hint}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="mb-2 text-xl font-headline">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
