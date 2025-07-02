import type { Project } from '@/lib/types';
import { Building2, FileText, Layers, PenTool, SquarePen, Construction, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  icon: LucideIcon;
}

export const skills: Skill[] = [
  { name: 'AutoCAD', icon: SquarePen },
  { name: 'Revit', icon: Building2 },
  { name: 'BIM Modeling', icon: Layers },
  { name: 'Structural Detailing', icon: Construction },
  { name: 'MEP Drafting', icon: Wrench },
  { name: 'Tekla Structures', icon: PenTool },
  { name: 'Blueprint Reading', icon: FileText },
];

export const initialProjects: Project[] = [
  {
    id: 'proj1',
    title: 'Metropolis Tower: Structural Detailing',
    description: 'Led the creation of detailed structural steel and reinforced concrete drawings for a 40-story commercial skyscraper. Ensured all blueprints complied with seismic codes and engineering specifications.',
    url: '#',
    interactions: 250,
    tags: ['AutoCAD', 'Revit', 'Structural Steel', 'High-Rise'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'skyscraper blueprint',
  },
  {
    id: 'proj2',
    title: 'Apex Industrial Plant Expansion',
    description: 'Developed detailed 3D models and 2D layouts for a major industrial plant expansion, including piping, equipment placement, and foundation plans using BIM methodology.',
    url: '#',
    interactions: 180,
    tags: ['BIM', 'Plant 3D', 'P&ID', 'Industrial'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'industrial plant blueprint',
  },
  {
    id: 'proj3',
    title: 'Azure Vista Luxury Residential Complex',
    description: 'Produced a full set of architectural and MEP (Mechanical, Electrical, Plumbing) drawings for a luxury residential complex, coordinating with various engineering disciplines.',
    url: '#',
    interactions: 120,
    tags: ['Architectural Drafting', 'MEP', 'AutoCAD', 'Residential'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'luxury apartment blueprint',
  },
];
