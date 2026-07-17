export const profile = {
  name: 'Revanth Madasu',
  title: 'Software Engineer',
  photoUrl:
    'https://res.cloudinary.com/revanthm/image/upload/v1684275262/portfolio-project/revanth-photo_snj8wg.png',
  greeting: "Hi, I'm",
  tagline: 'I build reliable, high-scale systems and polished products.',
  location: 'Austin, USA',
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
  { icon: 'rocket', label: 'Distributed Systems' },
  { icon: 'zap', label: 'Cloud & DevOps' },
  { icon: 'check', label: 'Reliability' },
  { icon: 'users', label: 'Mentorship' },
];

// Rich-text markup: wrap emphasis in {{ ... }}
export const summary: string[] = [
  'Software engineer with {{6 years}} across full-stack, frontend, and large-scale distributed systems.',
  'At {{Oracle Cloud}} I support mission-critical services with {{99.99% availability}} across {{~100 global regions}}.',
  'Skilled in {{TypeScript, JavaScript, React, Angular}} on the frontend and {{Java, Python, Kafka, Kubernetes, Terraform}} across multi-cloud {{OCI, AWS, Azure}}.',
  'Track record operating {{petabyte-scale}} data ingestion and search systems, leading incident response, and driving production reliability.',
  'Previously built high-traffic consumer apps at {{Swiggy}} and full-stack SaaS security platforms at {{ColorTokens}}.',
  'Constant learner who owns features end to end — I never compromise on quality and take pride in my work.',
];

export const stats = [
  { value: '6+', label: 'Years experience' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '~100', label: 'Global regions' },
  { value: '10M+', label: 'Users reached' },
];
