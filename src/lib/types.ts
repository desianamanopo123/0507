export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  interactions: number;
  tags: string[];
  imageUrl: string;
  imageHint: string;
  logoUrl?: string;
  logoHint?: string;
}

export interface Skill {
  name: string;
  imageUrl: string;
  imageHint: string;
}
