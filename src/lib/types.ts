export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  hint: string;
}

export interface Skill {
  name: string;
  imageUrl: string;
  hint: string;
}
