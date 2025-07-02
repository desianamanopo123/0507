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
    title: 'Metropolis Tower: Structural Detailing',
    description: 'Memimpin pembuatan gambar detail baja struktural dan beton bertulang untuk gedung pencakar langit komersial 40 lantai. Memastikan semua cetak biru mematuhi kode seismik dan spesifikasi teknik.',
    url: '#',
    interactions: 250,
    tags: ['AutoCAD', 'Revit', 'Structural Steel', 'High-Rise'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'skyscraper blueprint',
  },
  {
    id: 'proj2',
    title: 'Perluasan Pabrik Industri Apex',
    description: 'Mengembangkan model 3D dan tata letak 2D terperinci untuk perluasan pabrik industri besar, termasuk perpipaan, penempatan peralatan, dan rencana pondasi menggunakan metodologi BIM.',
    url: '#',
    interactions: 180,
    tags: ['BIM', 'Plant 3D', 'P&ID', 'Industrial'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'industrial plant blueprint',
  },
  {
    id: 'proj3',
    title: 'Kompleks Hunian Mewah Azure Vista',
    description: 'Menghasilkan satu set lengkap gambar arsitektur dan MEP (Mekanikal, Elektrikal, Plumbing) untuk kompleks hunian mewah, berkoordinasi dengan berbagai disiplin ilmu teknik.',
    url: '#',
    interactions: 120,
    tags: ['Architectural Drafting', 'MEP', 'AutoCAD', 'Residential'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'luxury apartment blueprint',
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
        userQuery: 'Sorot proyek yang menunjukkan keahlian dalam penyusunan struktural dan industri berisiko tinggi.',
      });

      const orderedProjects = result.recommendedOrder.map(id => {
        return projects.find(p => p.id === id)!;
      }).filter(Boolean); // Filter out any potential undefined values

      setProjects(orderedProjects);

      toast({
        title: 'Proyek Diatur Ulang oleh AI ✨',
        description: result.reasoning,
        duration: 8000,
      });
    } catch (error) {
      console.error('AI Curation Error:', error);
      toast({
        variant: 'destructive',
        title: 'Terjadi kesalahan',
        description: 'Tidak dapat mengatur ulang proyek. Silakan coba lagi nanti.',
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Karya Kreatif Saya</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Berikut adalah beberapa proyek yang saya banggakan. Klik tombol untuk membiarkan AI mengaturnya agar dapat menyoroti keahlian saya dengan baik.
            </p>
          </div>
          <Button onClick={handleAiCuration} disabled={isLoading} style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
            <Wand2 className="mr-2 h-4 w-4" />
            {isLoading ? 'Berpikir...' : 'Atur dengan AI'}
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
