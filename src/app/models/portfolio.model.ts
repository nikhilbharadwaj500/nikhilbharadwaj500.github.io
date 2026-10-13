export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  location?: string;
  projectName?: string;
  technologies: string[];
  shortDescription: string;
  description: string;
  responsibilities: string[];
  award?: string;
  highlightsBadge?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  grade: string;
  details?: string;
  logoUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  category: 'Enterprise' | 'AI & ML' | 'Full-Stack' | 'Systems';
  description: string;
  technologies: string[];
  highlights: string[];
  link?: string;
  linkText?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  type: 'Award' | 'Publication' | 'Certification';
  issuer: string;
  year?: string;
  subtitle?: string;
  description: string;
  link?: string;
  linkText?: string;
  badge?: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
}
