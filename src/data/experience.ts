export interface Experience {
  company: string;
  logoUrl: string;
  role: string;
  timeline: string;
  period: string;
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
    company: 'Swiggy',
    logoUrl: swiggyLogo,
    role: 'Software Development Engineer',
    timeline: 'Feb 2022 — Dec 2022',
    period: '11 months',
    link: 'https://www.swiggy.com/',
    description: [
      'Worked on Frontend for the Swiggy consumer app which has {***text=10 Million+;type=bold***} downloads and millions of users.',
      'Built pixel-perfect user interfaces for desktop and mobile platforms used by millions of users.',
      'Built independent webviews that can be embedded in Swiggy mobile applications or hosted independently.',
      'Worked as release manager with QA, product managers and dev teams — managing release content, deploying and monitoring prod behaviour during release.',
      'Worked as On-Call, monitoring performance metrics and node health, writing New Relic queries to debug prod errors, and doing root-cause analysis of PagerDuty alerts.',
      'Closely partnered with UX teams, product teams and product managers on critical tasks impacting lakhs of users.',
    ],
    achievements: [
      'Independently built the friendship-day spotlight project "Roast Your Dost", used by {***text=10 lakh+ users;type=bold***} and ranked {***text=4th;type=bold***} in Best Friendship Day Campaigns by {***text=Mad Over Marketing;type=link;link=https://mad-over-marketing.com/here-are-the-best-friendship-day-campaigns-of-2022/***}.',
      'Independently built and led solutioning for the {***text=business-critical spotlight project "One Tap Add";type=bold***}, enabling single-tap membership add for the Swiggy loyalty program.',
      'Independently built {***text=Independent Webviews;type=bold***} in {***text=Next.js;type=bold***} that render across Android, iOS and web.',
      'Implemented {***text=CI/CD;type=bold***} workflows reporting package sizes, {***text=LHCI metrics;type=bold***} and test coverage on PRs.',
      'Resolved multiple {***text=prod issues;type=bold***} immediately with minimal business impact.',
    ],
    skills: ['react', 'redux', 'typescript', 'javascript', 'next', 'html', 'css', 'jest', 'cypress', 'git', 'jenkins', 'newrelic'],
    technologies:
      'React, Next.js, TypeScript, JavaScript, HTML, CSS, Redux, Jest, Cypress, Git, Jenkins, New Relic',
  },
  {
    company: 'Thomson Reuters',
    logoUrl: trLogo,
    role: 'Software Engineer',
    timeline: 'Oct 2021 — Feb 2022',
    period: '5 months',
    link: 'https://www.thomsonreuters.com/',
    description: [
      'Full-stack development (frontend focused) of legal applications — implementing designs, bug fixes, unit testing and code reviews.',
      'Liaised with UX, product managers and UI teams to implement product and technical designs.',
      'Developed reusable components in a micro-frontend architecture: UI development, API integration, unit testing, bug fixes and peer code reviews.',
    ],
    achievements: [
      'Independently developed the {***text=Assembled Renditions;type=bold***} feature.',
      'Implemented filter functionality for tables, bringing search to multiple pages.',
      'Increased unit-test coverage from 54% to 87% on a large module spanning 12+ pages.',
    ],
    skills: ['angular', 'typescript', 'javascript', 'html', 'css', 'ngrx', 'jasmine', 'cypress', 'git'],
    technologies:
      'Angular, TypeScript, JavaScript, HTML, CSS, NgRx, Jasmine, Karma, Cypress, Git, Jenkins',
  },
  {
    company: 'ColorTokens',
    logoUrl: ctLogo,
    role: 'Software Engineer',
    timeline: 'Aug 2019 — Oct 2021',
    period: '2 yrs 3 months',
    link: 'https://colortokens.com',
    description: [
      'Frontend development of new applications from scratch, new features and maintenance of an existing scalable web application with the utmost quality.',
      'Liaised with UX, product managers and UI teams to implement product and technical designs.',
      'Developed reusable components in a micro-frontend architecture: UI development, API integration, unit testing, bug fixes and peer code reviews.',
      '{***text=Production support;type=bold***} responsibilities: prod bug fixes, resolving system outages, and being a point of contact for the UI teams.',
    ],
    achievements: [
      'Developed multiple core features with smooth responsive design, used by security admins.',
      '{***text=Architected;type=bold***} and developed the {***text=Policy Builder;type=bold***} feature single-handedly — the main feature allowing creation of access policies between groups.',
      'Delivered the customer-specific {***text=UserAccess Group;type=bold***} project in a very short two weeks, which bagged a 2-year customer contract.',
      '{***text=Architected;type=bold***} and implemented role-based access control {***text=(RBAC);type=bold***} on the UI — distinct workflows for security admin, policy admin, asset admin and view-only users.',
      '{***text=Led UI development teams;type=bold***} — architecture, API design, work assignment and UX coordination — alongside individual development.',
      'Refactored the application into a robust codebase, making development quicker and less bug-prone.',
    ],
    skills: ['angular', 'typescript', 'javascript', 'jasmine', 'html', 'css', 'bootstrap', 'git'],
    technologies:
      'Angular, TypeScript, JavaScript, D3, Karma, HTML5, SCSS, Bootstrap, Git, Kubernetes',
  },
];
