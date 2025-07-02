'use client';

import { useState } from 'react';
import type { Project } from '@/lib/types';
import { getProjectRecommendations } from '@/ai/flows/project-recommendation';
import { Button } from '@/components/ui/button';
import { Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ProjectCard } from '../project-card';
import { Skeleton } from '../ui/skeleton';

const initialProjects: Project[] = [
  {
    id: 'proj1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with a modern UI, payment integration, and an admin dashboard for managing products.',
    url: '#',
    interactions: 150,
    tags: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ecommerce website',
  },
  {
    id: 'proj2',
    title: 'Task Management App',
    description: 'A collaborative task management tool with features like drag-and-drop boards, real-time updates, and user authentication.',
    url: '#',
    interactions: 250,
    tags: ['Next.js', 'Firebase', 'Tailwind CSS'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'task manager',
  },
  {
    id: 'proj3',
    title: 'Portfolio Website',
    description: 'This very portfolio website, built with Next.js and showcasing a clean design and AI-powered project curation.',
    url: '#',
    interactions: 80,
    tags: ['Next.js', 'GenAI', 'Shadcn/UI'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'portfolio design',
  },
  {
    id: 'proj4',
    title: 'Weather App',
    description: 'A simple yet elegant weather application that provides real-time weather data using a third-party API.',
    url: '#',
    interactions: 120,
    tags: ['React', 'API', 'CSS Modules'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'weather interface',
  },
];

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
        userQuery: 'Showcase a variety of skills, especially in full-stack development.',
      });

      const orderedProjects = result.recommendedOrder.map(id => {
        return projects.find(p => p.id === id)!;
      }).filter(Boolean); // Filter out any potential undefined values

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
        description: 'Could not reorder projects. Please try again later.',
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
              Here are some of the projects I'm proud of. Click the button to let AI organize them to best highlight my skills.
            </p>
          </div>
          <Button onClick={handleAiCuration} disabled={isLoading} style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
            <Wand2 className="mr-2 h-4 w-4" />
            {isLoading ? 'Thinking...' : 'Organize with AI'}
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
