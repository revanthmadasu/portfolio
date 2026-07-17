export const profile = {
  name: 'Revanth Madasu',
  title: 'Software Developer',
  photoUrl:
    'https://res.cloudinary.com/revanthm/image/upload/v1684275262/portfolio-project/revanth-photo_snj8wg.png',
  greeting: "Hi, I'm",
  tagline: 'I build fast, polished products used by millions.',
  location: 'India',
  resumeUrl: '',
  links: {
    linkedin: 'https://www.linkedin.com/in/revanth-madasu-465396107/',
    github: 'https://github.com/revanthmadasu',
    email: 'revanthmadasu913@gmail.com',
  },
};

export interface Highlight {
  icon: 'rocket' | 'zap' | 'check' | 'users';
  label: string;
}

export const highlights: Highlight[] = [
  { icon: 'rocket', label: 'Problem Solver' },
  { icon: 'zap', label: 'Productive' },
  { icon: 'check', label: 'Quality' },
  { icon: 'users', label: 'Team Work' },
];

// Rich-text markup: wrap emphasis in {{ ... }}
export const summary: string[] = [
  'Proven software developer with {{3+ years}} experience at top-tier product-based companies.',
  'Built consumer applications with {{100 Million+}} downloads requiring {{high uptime}} and {{pixel-perfect UI}}.',
  'Experienced across both small startups and large enterprise organizations.',
  'Expertise in Frontend: {{TypeScript, JavaScript, React, Redux, Angular}} — and Cloud: {{GCP, AWS}}.',
  'Supported production for applications with {{160,000+}} restaurant partners and {{1 million+}} weekly orders.',
  'Problem solver, team player and constant learner — I never compromise on quality and take pride in my work.',
];

export const stats = [
  { value: '3+', label: 'Years experience' },
  { value: '100M+', label: 'App downloads' },
  { value: '10L+', label: 'Users reached' },
  { value: '3', label: 'Product companies' },
];
