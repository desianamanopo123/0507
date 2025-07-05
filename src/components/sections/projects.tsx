'use client';

import type { Project } from '@/lib/types';
import { ProjectCard } from '../project-card';
import { initialProjects } from '@/lib/data';

export function Projects() {
  const projects: Project[] = initialProjects;

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Work Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed lg:text-xl/relaxed">
              Here are some of the projects I am proud of.
            </p>
          </div>
        </div>
        <div className="mx-auto grid w-full max-w-7xl items-start gap-8 py-12 md:gap-12 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
          {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}
