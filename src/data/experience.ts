import oracleLogo from '../assets/img/skill-icons/oracle.svg';

export interface Experience {
  company: string;
  logoUrl?: string;
  role: string;
  timeline: string;
  period: string;
  /** optional status pill, e.g. for a pre-launch personal venture */
  status?: string;
  link: string;
  description: string[];
  achievements: string[];
  skills: string[];
  technologies: string;
}

const ctLogo =
  'https://res.cloudinary.com/revanthm/image/upload/v1684279011/portfolio-project/experience/colortokensFull_fxybt5.svg';
const swiggyLogo =
  'https://res.cloudinary.com/revanthm/image/upload/v1684279010/portfolio-project/experience/swiggy_tbhq8e.svg';
const trLogo =
  'https://res.cloudinary.com/revanthm/image/upload/v1684279012/portfolio-project/experience/thomson-reuters_ekdumm.svg';

// Rich-text markup supported in strings below:
//   {{highlight}}                              -> accent-coloured span
//   {***text=Label;type=bold***}               -> bold accent span
//   {***text=Label;type=link;link=https://***} -> link
export const experiences: Experience[] = [
  {
    company: 'Scrollwise',
    logoUrl: '/scrollwise-logo.svg',
    role: 'Founder & Founding Engineer',
    timeline: 'May 2026 — Present',
    period: 'Pre-launch',
    status: 'In development',
    link: '',
    description: [
      'Building an {***text=AI-native microlearning platform;type=bold***} independently from concept to production-ready pre-launch — owning product strategy, UX, architecture, full-stack development, testing, infrastructure, and release workflows.',
      'Architected the frontend from the ground up with React 18, TypeScript, Vite, React Router and TanStack Query — a swipeable multi-level feed, a reusable data-driven {***text=SVG/Lottie template renderer;type=bold***}, light/dark theming and protected/admin routes with RBAC.',
      'Designed backend APIs in Python (FastAPI, Pydantic, async SQLAlchemy) with {***text=JWT auth;type=bold***} (access/refresh), Google OIDC login, a personalized feed-ranking service and progress tracking on PostgreSQL.',
      'Owned full {***text=serverless deployment on AWS;type=bold***} — FastAPI on Lambda (arm64 via Mangum), a React SPA on S3 + CloudFront and event-driven generation on ECS Fargate over shared RDS PostgreSQL.',
    ],
    achievements: [
      'Engineered an {***text=LLM content pipeline;type=bold***} on the Anthropic Claude API and {***text=AWS Bedrock;type=bold***} — scope planner, curriculum generation, tiered SVG/Lottie asset pipeline and semantic de-duplication via {***text=pgvector embeddings;type=bold***}.',
      'Migrated an EC2 poller to {***text=Fargate/Lambda;type=bold***}, cutting idle cost to near-zero.',
      'Built {***text=CI/CD;type=bold***} in GitHub Actions with path-filtered per-component deploys, Docker multi-arch image builds and least-privilege IAM — plus VPC networking, Route 53 DNS/TLS and CloudWatch logging.',
    ],
    skills: ['react', 'typescript', 'javascript', 'python', 'aws', 'postgresql', 'docker', 'git'],
    technologies:
      'React 18, TypeScript, Vite, TanStack Query, Python, FastAPI, SQLAlchemy, Pydantic, PostgreSQL, pgvector, AWS (Lambda, API Gateway, ECS Fargate, RDS, S3, CloudFront, Route 53, IAM), AWS Bedrock, Anthropic Claude API, Docker, GitHub Actions, JWT, OAuth2/OIDC',
  },
  {
    company: 'Oracle Cloud Infrastructure',
    logoUrl: oracleLogo,
    role: 'Software Development Engineer 2',
    timeline: 'Aug 2024 — Apr 2026',
    period: '1 yr 9 months',
    link: 'https://www.oracle.com/cloud/',
    description: [
      'Engineer on a {***text=tier-1, customer-facing OCI service;type=bold***} with a {***text=99.99% availability SLA;type=bold***}, running continuously across {***text=~100 global regions;type=bold***}.',
      'Work across backend and frontend using Java, JavaScript, TypeScript, Angular, Spring Boot, Terraform, Ansible, SQL, REST and Kafka in a dockerized microservices architecture.',
      'Delivered end-to-end features for {***text=petabyte-scale;type=bold***} data ingestion and indexing pipelines — consuming from Kafka and indexing via Elasticsearch and Lucene across SQL/NoSQL datastores, caches, kRPC and REST — with services in Java and Python on RocksDB, Docker and Kubernetes.',
      'Built logging UI modules in a {***text=micro-frontend;type=bold***} architecture (Angular, NgRx, TypeScript, Jasmine) so internal users can search and visualize logs across services.',
      'Wrote {***text=Infrastructure-as-code;type=bold***} in Terraform to provision load balancers, compute, IAM, alarms, databases and object storage — standardizing provisioning and scaling across ~100 regions.',
      'Automated host configuration and deployment with Ansible and shell scripts, and built Grafana dashboards and alerting to cut time to detect failures.',
    ],
    achievements: [
      'Built an {***text=AI incident assistant;type=bold***} on open-source LLMs (OLLAMA) trained on runbooks and architecture docs — evaluating fine-tuning, embeddings and {***text=RAG with vector databases;type=bold***} to surface resolution steps during on-call.',
      'Primary on-call engineer across 24/7 rotations, resolving {***text=200+ Sev-2 incidents;type=bold***} for mission-critical services via real-time scaling, throttling and fault isolation under strict SLAs.',
      'Authored unit, integration and {***text=canary suites;type=bold***} (Java, JUnit, Mockito) — including end-to-end canaries running every 10 minutes to validate ingestion, search and service health across regions.',
      'Implemented {***text=heavy-query and source-scan detection;type=bold***} to block expensive searches before execution, improving performance and reducing compute cost.',
      'Executed {***text=CPU shape migrations;type=bold***} across multiple regions, significantly reducing sustained CPU pressure.',
      '{***text=Mentored;type=bold***} junior engineers, new hires and interns — leading sessions on system architecture, on-call readiness and PR review practices.',
    ],
    skills: ['java', 'typescript', 'javascript', 'python', 'angular', 'ngrx', 'spring', 'terraform', 'ansible', 'kafka', 'docker', 'kubernetes', 'postgresql', 'grafana', 'oracle', 'linux', 'git'],
    technologies:
      'Java, JavaScript, TypeScript, Python, Angular, NgRx, Spring Boot, Terraform, Ansible, Kafka, Lucene, Docker, Kubernetes, RocksDB, PostgreSQL, OCI, Grafana, Linux',
  },
  {
    company: 'Freelance',
    role: 'Full-Stack Engineer — 3D Model Data Analysis',
    timeline: 'Mar 2023 — Jun 2024',
    period: '1 yr 4 months',
    link: '',
    description: [
      'Built {***text=web and desktop reporting applications;type=bold***} to run data analysis on 3D mechanical models exported from Teamcenter as .jt models.',
      'Developed the frontend and analysis tooling with React, JavaScript, TypeScript, Python, Pandas, NumPy and wxFormBuilder.',
      'Partnered directly with mechanical engineers to gather requirements and build automated analyses producing accurate Excel reports.',
    ],
    achievements: [
      'Built automated analyses that {***text=saved engineers days;type=bold***} of manual work per report.',
      'Delivered both a browser-based and a native desktop reporting experience from a shared analysis core.',
    ],
    skills: ['react', 'typescript', 'javascript', 'python', 'pandas', 'numpy', 'wxicon'],
    technologies:
      'React, TypeScript, JavaScript, Python, Pandas, NumPy, wxPython, wxFormBuilder',
  },
  {
    company: 'Swiggy',
    logoUrl: swiggyLogo,
    role: 'Software Development Engineer',
    timeline: 'Feb 2022 — Dec 2022',
    period: '11 months',
    link: 'https://www.swiggy.com/',
    description: [
      'Frontend for the Swiggy consumer app — {***text=10 Million+;type=bold***} downloads and millions of users — across desktop web, mobile web and app using JavaScript, TypeScript, React, Redux, Next.js and Node.js.',
      'Built independent webviews in Next.js/React that embed in the Swiggy mobile app or run standalone.',
      'Managed and optimized {***text=AWS;type=bold***} infrastructure (EC2, S3, ELB) to improve reliability, scalability and deployment efficiency for high-traffic services.',
      'Architected promotional/campaign flows end to end — engineering design, capacity estimation, {***text=Node.js/Express backend APIs;type=bold***} and AWS infra — and led releases through change management.',
      'Served as {***text=Release Manager;type=bold***} coordinating QA, product and engineering, and as on-call developer building New Relic dashboards and doing root-cause analysis on PagerDuty alerts.',
    ],
    achievements: [
      'Independently built {***text=Roast Your Dost;type=bold***}, a Friendship Day campaign that drew {***text=1 million+ users;type=bold***} and ranked {***text=4th;type=bold***} in Best Friendship Day Campaigns by {***text=Mad Over Marketing;type=link;link=https://mad-over-marketing.com/here-are-the-best-friendship-day-campaigns-of-2022/***}.',
      'Built multiple core features following {***text=TDD;type=bold***} (Cypress, Jest), clean API design and Agile delivery.',
      'Implemented {***text=CI/CD;type=bold***} in Jenkins and GitHub Actions surfacing package-size, Lighthouse and coverage reports directly on PRs.',
    ],
    skills: ['react', 'redux', 'typescript', 'javascript', 'next', 'node', 'express-js', 'aws', 'jest', 'cypress', 'git', 'jenkins', 'newrelic'],
    technologies:
      'React, Next.js, TypeScript, JavaScript, Redux, Node.js, Express, AWS, Jest, Cypress, Git, Jenkins, New Relic',
  },
  {
    company: 'Thomson Reuters',
    logoUrl: trLogo,
    role: 'Software Engineer',
    timeline: 'Oct 2021 — Feb 2022',
    period: '5 months',
    link: 'https://www.thomsonreuters.com/',
    description: [
      'Full-stack development on legal applications — implementing product designs, integrating RESTful services, unit and E2E testing and code reviews with JavaScript, TypeScript, Angular, Python and AWS.',
      'Built a {***text=state-management layer;type=bold***} with NgRx to manage local UI state, eliminating redundant API calls and speeding up rendering.',
      'Added filter and search functionality to data tables, extending it across multiple pages.',
    ],
    achievements: [
      'Developed the {***text=Assembled Renditions;type=bold***} feature end to end with UI and led its deployment in AWS.',
      'Improved unit-test coverage from {***text=62% to 85%;type=bold***} in Jasmine (TDD) and added Cypress E2E cases for BDD.',
    ],
    skills: ['angular', 'ngrx', 'typescript', 'javascript', 'python', 'cypress', 'aws', 'git'],
    technologies:
      'Angular, NgRx, TypeScript, JavaScript, Python, AWS, Jasmine, Cypress, Git',
  },
  {
    company: 'ColorTokens',
    logoUrl: ctLogo,
    role: 'Member of Technical Staff',
    timeline: 'Aug 2019 — Oct 2021',
    period: '2 yrs 3 months',
    link: 'https://colortokens.com',
    description: [
      'Full-stack (frontend-focused) development of {***text=cyber-security SaaS;type=bold***} applications from scratch — building reusable micro-frontend components (Angular, NgRx, React, Redux, RxJS, D3) and designing APIs in Java, Spring and GraphQL.',
      '{***text=Led UI development teams;type=bold***} — planning architecture, API design and work assignment while coordinating with UX.',
      'Built APIs in Java/Spring and Python/Flask using OOP and ORM patterns against Oracle and MongoDB, deployed via Docker, Kubernetes and Jenkins CI/CD.',
      '{***text=Production support;type=bold***}: primary point of contact for bug fixes, customer issue resolution and outage response.',
    ],
    achievements: [
      '{***text=Architected;type=bold***} and implemented role-based access control {***text=(RBAC);type=bold***} on the UI — distinct workflows for security admin, policy admin, asset admin and view-only users.',
      'Delivered the customer-specific {***text=UserAccess Group;type=bold***} project in just two weeks, helping secure a {***text=2-year contract;type=bold***}.',
      'Built {***text=Chart.js and D3;type=bold***} visualizations for zone/asset security posture and traffic flow between workloads, assets and networks.',
    ],
    skills: ['react', 'redux', 'angular', 'typescript', 'javascript', 'java', 'spring', 'graphql', 'mongodb', 'rxjs', 'd3', 'bootstrap', 'jasmine', 'jenkins', 'git'],
    technologies:
      'React, Redux, Angular, NgRx, RxJS, TypeScript, JavaScript, Java, Spring, GraphQL, MongoDB, D3, Chart.js, Docker, Kubernetes, Jenkins',
  },
];
