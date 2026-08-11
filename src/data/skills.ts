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
    label: 'AI Engineering',
    skills: [
      { name: 'AWS Bedrock', iconKey: 'aws', rating: 4, categories: ['ai', 'cloud'] },
      { name: 'Claude API', iconKey: 'claude', rating: 4, categories: ['ai', 'model'] },
      { name: 'OpenAI API', iconKey: 'openai', rating: 4, categories: ['ai', 'model'] },
      { name: 'RAG', iconKey: 'rag', rating: 4, categories: ['ai', 'retrieval'] },
      { name: 'Agentic AI', iconKey: 'agentic', rating: 4, categories: ['ai', 'agents'] },
      { name: 'Embeddings', iconKey: 'embeddings', rating: 4, categories: ['ai', 'retrieval'] },
      { name: 'Vector DBs', iconKey: 'postgresql', rating: 3.5, categories: ['ai', 'database'] },
      { name: 'MCP', iconKey: 'mcp', rating: 3.5, categories: ['ai', 'agents'] },
      { name: 'Gemini', iconKey: 'gemini', rating: 3.5, categories: ['ai', 'model'] },
      { name: 'Ollama', iconKey: 'ollama', rating: 3.5, categories: ['ai', 'model'] },
    ],
  },
  {
    label: 'Languages',
    skills: [
      { name: 'TypeScript', iconKey: 'typescript', rating: 4.5, categories: ['programming', 'frontend'] },
      { name: 'JavaScript', iconKey: 'javascript', rating: 4.5, categories: ['programming', 'backend', 'frontend'] },
      { name: 'Java', iconKey: 'java', rating: 4, categories: ['programming', 'backend'] },
      { name: 'Python', iconKey: 'python', rating: 4, categories: ['programming', 'backend', 'datascience'] },
      { name: 'SQL', iconKey: 'sql', rating: 3.5, categories: ['query', 'backend'] },
      { name: 'HTML', iconKey: 'html', rating: 4.5, categories: ['markup', 'frontend'] },
      { name: 'CSS', iconKey: 'css', rating: 4, categories: ['styles', 'frontend'] },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { name: 'React', iconKey: 'react', rating: 4.5, categories: ['library', 'frontend'] },
      { name: 'Redux', iconKey: 'redux', rating: 4.5, categories: ['library', 'frontend'] },
      { name: 'Angular', iconKey: 'angular', rating: 4.5, categories: ['framework', 'frontend'] },
      { name: 'NgRx', iconKey: 'ngrx', rating: 4, categories: ['framework', 'frontend'] },
      { name: 'Next.js', iconKey: 'next', rating: 4, categories: ['framework', 'frontend'] },
      { name: 'RxJS', iconKey: 'rxjs', rating: 3.5, categories: ['library', 'frontend'] },
      { name: 'D3', iconKey: 'd3', rating: 3.5, categories: ['library', 'frontend', 'dataviz'] },
      { name: 'Bootstrap', iconKey: 'bootstrap', rating: 3.5, categories: ['styles', 'frontend'] },
    ],
  },
  {
    label: 'Backend & Cloud',
    skills: [
      { name: 'Node.js', iconKey: 'node', rating: 4, categories: ['runtime', 'backend'] },
      { name: 'Express', iconKey: 'express-js', rating: 3.5, categories: ['framework', 'backend'] },
      { name: 'Spring', iconKey: 'spring', rating: 3.5, categories: ['framework', 'backend'] },
      { name: 'GraphQL', iconKey: 'graphql', rating: 3.5, categories: ['api', 'backend'] },
      { name: 'OCI', iconKey: 'oracle', rating: 4, categories: ['cloud'] },
      { name: 'AWS', iconKey: 'aws', rating: 4, categories: ['cloud'] },
      { name: 'Azure', iconKey: 'azure', rating: 3.5, categories: ['cloud'] },
      { name: 'Kafka', iconKey: 'kafka', rating: 3.5, categories: ['messaging', 'backend'] },
      { name: 'PostgreSQL', iconKey: 'postgresql', rating: 3.5, categories: ['database'] },
      { name: 'MongoDB', iconKey: 'mongodb', rating: 3.5, categories: ['database'] },
    ],
  },
  {
    label: 'DevOps & Infra',
    skills: [
      { name: 'Docker', iconKey: 'docker', rating: 4, categories: ['devops'] },
      { name: 'Kubernetes', iconKey: 'kubernetes', rating: 3.5, categories: ['devops'] },
      { name: 'Terraform', iconKey: 'terraform', rating: 4, categories: ['devops', 'iac'] },
      { name: 'Ansible', iconKey: 'ansible', rating: 3.5, categories: ['devops', 'iac'] },
      { name: 'Linux', iconKey: 'linux', rating: 4, categories: ['os', 'devops'] },
      { name: 'Git', iconKey: 'git', rating: 4.5, categories: ['tools'] },
      { name: 'Jenkins', iconKey: 'jenkins', rating: 4, categories: ['devops'] },
      { name: 'Grafana', iconKey: 'grafana', rating: 3.5, categories: ['monitoring'] },
    ],
  },
  {
    label: 'Testing & Data',
    skills: [
      { name: 'Jest', iconKey: 'jest', rating: 4, categories: ['testing'] },
      { name: 'Jasmine', iconKey: 'jasmine', rating: 4.5, categories: ['testing'] },
      { name: 'Cypress', iconKey: 'cypress', rating: 4, categories: ['testing'] },
      { name: 'Pandas', iconKey: 'pandas', rating: 4, categories: ['datascience'] },
      { name: 'NumPy', iconKey: 'numpy', rating: 3.5, categories: ['datascience'] },
      { name: 'scikit-learn', iconKey: 'scikitlearn', rating: 3, categories: ['datascience'] },
      { name: 'Seaborn', iconKey: 'seaborn', rating: 3, categories: ['datascience'] },
      { name: 'wxPython', iconKey: 'wxicon', rating: 3.5, categories: ['toolkit'] },
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
