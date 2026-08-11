export interface ProjectFeature {
  title: string;
  points: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  imageUrl: string;
  imageBg?: string;
  gitUrl?: string;
  liveUrl?: string;
  description: string[];
  features?: ProjectFeature[];
  skills: string[];
  status?: 'live' | 'ongoing' | 'archived';
  category?: string;
  impact?: string;
  aiOrder?: number;
}

export const projects: Project[] = [
  {
    slug: 'scrollwise',
    title: 'Scrollwise',
    tagline: 'AI-native microlearning, generated end to end',
    imageUrl: '/scrollwise-ai.svg',
    imageBg: 'linear-gradient(135deg, #15121f, #261d3d)',
    liveUrl: 'https://scrollwise.net',
    status: 'ongoing',
    category: 'Flagship AI product',
    impact: 'Prompt → multimodal lesson',
    aiOrder: 1,
    description: [
      'A pre-launch microlearning platform I am building independently from product strategy and UX through model orchestration, full-stack engineering, and AWS infrastructure.',
      'Its prompt-driven pipeline coordinates specialized models to produce educational content, imagery, structured layouts, and reusable SVG/Lottie experiences as one cohesive learning post.',
    ],
    features: [
      {
        title: 'Multi-model generation',
        points: [
          'Routes planning, writing, visual generation, and layout work through specialized model stages on AWS Bedrock.',
          'Uses structured contracts so generated assets compose reliably in the product experience.',
        ],
      },
      {
        title: 'Self-authoring visual system',
        points: [
          'Selects and fills reusable visual templates, validates quality, and prevents semantic duplicates with embeddings.',
          'Generates new layouts when the existing template library cannot express the lesson.',
        ],
      },
      {
        title: 'Production platform',
        points: [
          'React and TypeScript frontend, asynchronous FastAPI services, PostgreSQL, and event-driven AWS infrastructure.',
        ],
      },
    ],
    skills: ['aws bedrock', 'claude', 'python', 'fastapi', 'react', 'typescript', 'postgresql', 'docker'],
  },
  {
    slug: 'ai-operations-assistant',
    title: 'AI Operations Assistant',
    tagline: 'RAG-guided troubleshooting for production incidents',
    imageUrl: '/ai-ops.svg',
    imageBg: 'linear-gradient(135deg, #151f2c, #183c35)',
    status: 'archived',
    category: 'Applied AI · Developer tools',
    impact: 'Runbooks → contextual guidance',
    aiOrder: 2,
    description: [
      'An internal AI assistant built at Oracle Cloud Infrastructure to make operational knowledge easier to retrieve during high-pressure incident response.',
      'It grounds open-source LLM responses in runbooks, architecture documentation, and incident playbooks to surface context-aware troubleshooting and resolution recommendations.',
    ],
    features: [
      {
        title: 'Grounded retrieval',
        points: ['RAG, embeddings, and vector search retrieve relevant operational context before generation.'],
      },
      {
        title: 'Agentic evaluation',
        points: ['Explored MCP, prompt engineering, fine-tuning, and agentic workflows for reliable engineering use cases.'],
      },
      {
        title: 'Production context',
        points: ['Designed from experience supporting petabyte-scale cloud services across approximately 100 regions.'],
      },
    ],
    skills: ['ollama', 'rag', 'embeddings', 'vector database', 'mcp', 'python'],
  },
  {
    slug: 'mastodon',
    title: 'mastodon.co.in',
    tagline: 'Self-hosted decentralized social network',
    imageUrl:
      'https://res.cloudinary.com/revanthm/image/upload/v1684279273/portfolio-project/project-icons/joinmastodon-tile_xaetic.svg',
    imageBg: '#d9f9fa',
    gitUrl: 'https://github.com/revanthmadasu/mastodon',
    status: 'ongoing',
    category: 'Open source · Cloud',
    description: [
      'Mastodon is an open-source, decentralized social network — by the people, for the people.',
      'I deployed my own Mastodon instance on Google Cloud Platform. An ongoing project where I work on the UI.',
    ],
    skills: ['gcp', 'react', 'html', 'css'],
  },
  {
    slug: 'achat',
    title: 'aChat',
    tagline: 'Smart instant-messaging Android app',
    imageUrl:
      'https://res.cloudinary.com/revanthm/image/upload/v1684279273/portfolio-project/project-icons/message_jp52oo.svg',
    imageBg: '#3DDC84',
    gitUrl: 'https://github.com/revanthmadasu/Achat',
    description: [
      'aChat is an instant-messaging Android application built in Android Studio with Java.',
    ],
    category: 'Mobile product',
    impact: 'Rules-based auto-reply',
    features: [
      {
        title: 'Auto-Reply',
        points: [
          'Set auto-reply messages for keywords — when offline and an incoming message matches, the reply is sent automatically.',
          'Categorise contacts and grant per-group auto-reply permissions.',
          'Pivotal when unavailable or hosting events where information must still be passed.',
        ],
      },
      {
        title: 'Scheduled Messaging',
        points: ['Schedule a message for a particular time — useful for greetings.'],
      },
      {
        title: 'Embedded Dictionary',
        points: ['Search words within the chat context.'],
      },
    ],
    skills: ['android', 'java', 'firebase', 'gcp'],
  },
  {
    slug: 'reckon',
    title: 'Reckon',
    tagline: 'ML-driven job prediction & sentiment analysis',
    imageUrl:
      'https://res.cloudinary.com/revanthm/image/upload/v1684279273/portfolio-project/project-icons/reckon_zumcow.png',
    gitUrl: 'https://github.com/revanthmadasu/reckon',
    description: [
      'Job prediction via a psychometric test that generates an MBTI personality type.',
      'Implemented the Naive Bayes algorithm in PHP for sentiment analysis of Facebook posts.',
    ],
    category: 'Machine learning',
    impact: 'Prediction + sentiment',
    aiOrder: 3,
    features: [
      {
        title: 'Job Recommendations',
        points: [
          'Recommends suitable jobs by taking a psychometric test and generating an MBTI personality type.',
          'Job recommendations are derived from the MBTI personality type.',
        ],
      },
      {
        title: 'Sentiment Analysis',
        points: [
          'Sentiment analysis for Facebook posts, showing how people reacted.',
          'Implemented the Naive Bayes algorithm in PHP.',
        ],
      },
      {
        title: 'Disease Prediction',
        points: [
          'User inputs symptoms and the system displays probabilities of possible diseases.',
        ],
      },
    ],
    skills: ['php', 'mysql', 'html', 'css'],
  },
  {
    slug: 'data-management',
    title: 'Data Management',
    tagline: 'Desktop record system for a school (freelance)',
    imageUrl:
      'https://res.cloudinary.com/revanthm/image/upload/v1684279273/portfolio-project/project-icons/data_qiglyb.svg',
    imageBg: '#d9f9fa',
    gitUrl: 'https://github.com/revanthmadasu/School-Administration-System',
    description: [
      'Digitalized record-keeping via a desktop application that stores student and fee data and runs queries over student, fee and audit information — replacing a manual record system.',
      'Built for Rahul Convent School as a freelance project.',
    ],
    features: [
      {
        title: 'Student Data Management',
        points: ['Full CRUD operations on student data.'],
      },
      {
        title: 'Fee Transactions',
        points: ['Records student fee transactions.'],
      },
      {
        title: 'Queries',
        points: [
          'Management can query fees paid between dates, pending fees, and list students who have not paid.',
        ],
      },
    ],
    skills: ['java', 'sql'],
  },
];
