import profilePhoto from '../assets/img/revanth-headshot.webp';

export const profile = {
  name: 'Revanth Madasu',
  title: 'AI Product Engineer',
  photoUrl: profilePhoto,
  greeting: "Hi, I'm",
  tagline: 'I turn ambitious AI ideas into reliable, polished products — from model orchestration to production infrastructure.',
  location: 'Austin, TX',
  resumeUrl: '',
  links: {
    linkedin: 'https://www.linkedin.com/in/revanth-madasu-465396107/',
    github: 'https://github.com/revanthmadasu',
    email: 'revanthmadasu913@gmail.com',
  },
};

export interface Highlight {
  icon: 'brain' | 'workflow' | 'layers' | 'shield';
  label: string;
}

export const highlights: Highlight[] = [
  { icon: 'brain', label: 'Agentic AI' },
  { icon: 'workflow', label: 'Model Orchestration' },
  { icon: 'layers', label: 'Multimodal Generation' },
  { icon: 'shield', label: 'Production AI' },
];

// Rich-text markup: wrap emphasis in {{ ... }}
export const summary: string[] = [
  'Product-minded engineer with {{7 years of experience}} building AI-powered products, developer tools, and globally distributed systems.',
  'Founder of {{Scrollwise}}, an AI-native microlearning platform that turns a prompt into educational content, imagery, structured layouts, and interactive SVG/Lottie experiences.',
  'I design {{agentic workflows, RAG systems, embeddings, vector search, and multi-model pipelines}} using AWS Bedrock, Claude, OpenAI, Gemini, and Ollama.',
  'My AI work is grounded in production engineering: {{React and TypeScript}} experiences, {{Python and Java}} services, cloud infrastructure, observability, evaluation, and release operations.',
  'At {{Oracle Cloud}}, I built an AI operations assistant and operated petabyte-scale services with {{99.99% availability}} across {{~100 global regions}}.',
];

export const stats = [
  { value: '7', label: 'Years engineering' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '~100', label: 'Global regions' },
  { value: '1M+', label: 'Users engaged' },
];

export const aiWorkflow = [
  { step: '01', title: 'Plan', detail: 'Scope, curricula, and structured generation contracts' },
  { step: '02', title: 'Orchestrate', detail: 'Route tasks across specialized models and tools' },
  { step: '03', title: 'Create', detail: 'Generate copy, images, layouts, SVG, and Lottie' },
  { step: '04', title: 'Validate', detail: 'Check quality, prevent duplicates, and ship reliably' },
];
