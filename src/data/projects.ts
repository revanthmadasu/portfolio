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
}

export const projects: Project[] = [
  {
    slug: 'mastodon',
    title: 'mastodon.co.in',
    tagline: 'Self-hosted decentralized social network',
    imageUrl:
      'https://res.cloudinary.com/revanthm/image/upload/v1684279273/portfolio-project/project-icons/joinmastodon-tile_xaetic.svg',
    imageBg: '#d9f9fa',
    gitUrl: 'https://github.com/revanthmadasu/mastodon',
    status: 'ongoing',
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
