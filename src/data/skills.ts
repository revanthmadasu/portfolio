export interface Skill {
  name: string;
  /** filename (no ext) in assets/img/skill-icons */
  iconKey: string;
  rating: number;
  categories: string[];
}

export interface SkillGroup {
  label: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: [
      { name: 'TypeScript', iconKey: 'typescript', rating: 4.5, categories: ['programming', 'frontend'] },
      { name: 'JavaScript', iconKey: 'javascript', rating: 4.5, categories: ['programming', 'backend', 'frontend'] },
      { name: 'Python', iconKey: 'python', rating: 4, categories: ['programming', 'backend', 'datascience'] },
      { name: 'Java', iconKey: 'java', rating: 4, categories: ['programming', 'backend', 'android'] },
      { name: 'HTML', iconKey: 'html', rating: 4.5, categories: ['markup', 'frontend'] },
      { name: 'SQL', iconKey: 'sql', rating: 3.5, categories: ['query', 'backend'] },
      { name: 'PHP', iconKey: 'php', rating: 3, categories: ['programming', 'web'] },
      { name: 'C', iconKey: 'c', rating: 3, categories: ['programming'] },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    skills: [
      { name: 'React', iconKey: 'react', rating: 4.5, categories: ['library', 'frontend'] },
      { name: 'Redux', iconKey: 'redux', rating: 4.5, categories: ['library', 'frontend'] },
      { name: 'Angular', iconKey: 'angular', rating: 4.5, categories: ['framework', 'frontend'] },
      { name: 'Next.js', iconKey: 'next', rating: 4, categories: ['framework', 'frontend'] },
      { name: 'NgRx', iconKey: 'ngrx', rating: 4, categories: ['framework', 'frontend'] },
      { name: 'CSS', iconKey: 'css', rating: 4, categories: ['styles', 'frontend'] },
      { name: 'Bootstrap', iconKey: 'bootstrap', rating: 3.5, categories: ['styles', 'frontend'] },
      { name: 'Spring', iconKey: 'spring', rating: 3.5, categories: ['framework', 'backend'] },
      { name: 'Express', iconKey: 'express-js', rating: 3, categories: ['framework', 'backend'] },
      { name: 'wxPython', iconKey: 'wxicon', rating: 3.5, categories: ['toolkit', 'frontend'] },
      { name: 'Android', iconKey: 'android', rating: 3, categories: ['framework', 'mobile'] },
      { name: 'scikit-learn', iconKey: 'scikitlearn', rating: 3, categories: ['library', 'datascience'] },
      { name: 'Seaborn', iconKey: 'seaborn', rating: 3, categories: ['library', 'datascience'] },
    ],
  },
  {
    label: 'Testing',
    skills: [
      { name: 'Jest', iconKey: 'jest', rating: 4, categories: ['testing'] },
      { name: 'Jasmine', iconKey: 'jasmine', rating: 4.5, categories: ['testing'] },
      { name: 'Cypress', iconKey: 'cypress', rating: 4, categories: ['testing'] },
    ],
  },
  {
    label: 'Databases & Cloud',
    skills: [
      { name: 'MySQL', iconKey: 'mysql', rating: 3.5, categories: ['database'] },
      { name: 'MongoDB', iconKey: 'mongodb', rating: 3, categories: ['database'] },
      { name: 'Firebase', iconKey: 'firebase', rating: 3.5, categories: ['database', 'cloud'] },
      { name: 'GCP', iconKey: 'gcp', rating: 3, categories: ['cloud'] },
    ],
  },
  {
    label: 'DevOps & Tools',
    skills: [
      { name: 'Git', iconKey: 'git', rating: 4, categories: ['tools'] },
      { name: 'Jenkins', iconKey: 'jenkins', rating: 4, categories: ['devops'] },
      { name: 'New Relic', iconKey: 'newrelic', rating: 3.5, categories: ['monitoring'] },
    ],
  },
];

/** Flat list, sorted by rating desc — handy for marquee / cloud views. */
export const allSkills: Skill[] = skillGroups
  .flatMap((g) => g.skills)
  .sort((a, b) => b.rating - a.rating);

export interface HackerRankBadge {
  name: string;
  iconUrl: string;
  tier: 'gold' | 'silver';
  stars: number;
}

export const hackerRankBadges: HackerRankBadge[] = [
  { name: 'Problem Solving', iconUrl: 'https://hrcdn.net/community-frontend/assets/badges/problem-solving-ecaf59a612.svg', tier: 'gold', stars: 5 },
  { name: 'Python', iconUrl: 'https://hrcdn.net/community-frontend/assets/badges/python-f70befd824.svg', tier: 'gold', stars: 5 },
  { name: 'Java', iconUrl: 'https://hrcdn.net/community-frontend/assets/badges/java-9d05b1f559.svg', tier: 'gold', stars: 5 },
  { name: 'SQL', iconUrl: 'https://hrcdn.net/community-frontend/assets/badges/sql-89e76e7082.svg', tier: 'silver', stars: 4 },
  { name: 'C++', iconUrl: 'https://hrcdn.net/community-frontend/assets/badges/cpp-739b350881.svg', tier: 'silver', stars: 4 },
  { name: 'C', iconUrl: 'https://hrcdn.net/community-frontend/assets/badges/c-d1985901e6.svg', tier: 'silver', stars: 4 },
];
