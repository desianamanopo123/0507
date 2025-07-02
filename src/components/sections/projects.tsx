'use client';

import { useState } from 'react';
import type { Project } from '@/lib/types';
import { getProjectRecommendations } from '@/ai/flows/project-recommendation';
import { Button } from '@/components/ui/button';
import { Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ProjectCard } from '../project-card';
import { Skeleton } from '../ui/skeleton';
import { initialProjects } from '@/lib/data';

export function Projects() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleAiCuration = async () => {
    setIsLoading(true);
    try {
      const result = await getProjectRecommendations({
        projects: projects.map(({ id, title, description, url, interactions }) => ({
          id,
          title,
          description,
          url,
          interactions,
        })),
        userQuery: 'Highlight projects that demonstrate expertise in high-risk structural and industrial drafting.',
      });

      const orderedProjects = result.recommendedOrder.map(id => {
        return projects.find(p => p.id === id)!;
      }).filter(Boolean);

      setProjects(orderedProjects);

      toast({
        title: 'Projects Reordered by AI ✨',
        description: result.reasoning,
        duration: 8000,
      });
    } catch (error) {
      console.error('AI Curation Error:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Could not reorder the projects. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Creative Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I am proud of. Click the button to let the AI organize them to best highlight my expertise.
            </p>
          </div>
          <Button onClick={handleAiCuration} disabled={isLoading} style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
            <Wand2 className="mr-2 h-4 w-4" />
            {isLoading ? 'Thinking...' : 'Curate with AI'}
          </Button>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-64 w-full" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              ))
            : projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}
