export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  imageUrl: string;
  logoUrl?: string;
}

export interface Skill {
  name: string;
  imageUrl: string;
}
