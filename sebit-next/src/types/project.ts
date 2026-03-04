export type ProjectCategory = 'public' | 'finance' | 'private' | 'gis';

export interface Project {
  id:            string;
  category:      ProjectCategory;
  categoryLabel: string;
  name:          string;
  year:          number;
  techStack:     string[];
  thumbGradient: string;
  thumbEmoji:    string;
  summary:       string;
  featured:      boolean;
}
