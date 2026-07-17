# Experience

Order as rendered (newest first): Scrollwise → Oracle → Freelance → Swiggy →
Thomson Reuters → ColorTokens.

---

## Scrollwise — Founding Engineer (Personal Venture)

- **When:** May 2026 — Present · **Status:** pre-launch, in development (not yet
  incorporated/launched). Rendered at the TOP of experience with an
  "In development" status pill, an "SC" monogram, and no Visit link.
- Founding engineer building an Instagram-style social learning SaaS platform
  end-to-end from scratch — solo, shipping a full-stack product spanning a React
  SPA, a FastAPI backend, and an LLM content-generation service (UI dev, API
  design, unit testing, code reviews).
- Frontend from the ground up: React 18, TypeScript, Vite, React Router,
  TanStack React Query — Instagram-style swipeable multi-level feed, a reusable
  data-driven SVG/Lottie template renderer, light/dark theming, protected/admin
  routes with RBAC.
- Backend APIs in Python (FastAPI, Pydantic, async SQLAlchemy): JWT auth with
  access/refresh tokens, Google OIDC login, a personalized feed-ranking service,
  progress tracking; ORM persistence on PostgreSQL and SQLite.
- LLM content pipeline on the Anthropic Claude API + AWS Bedrock: scope planner,
  curriculum generation, data-driven template fill, tiered SVG/Lottie asset
  pipeline, semantic de-duplication via pgvector embeddings.
- Full serverless deployment on AWS: FastAPI on Lambda (arm64 via Mangum), React
  SPA on S3 + CloudFront, event-driven generation on ECS Fargate over shared RDS
  PostgreSQL; migrated an EC2 poller to Fargate/Lambda to cut idle cost to
  near-zero.
- CI/CD in GitHub Actions with path-filtered per-component deploys, Docker
  multi-arch builds, least-privilege IAM; VPC networking, Route 53 DNS/TLS, ACM
  certs, structured CloudWatch logging.
- **Skills:** React, TypeScript, JavaScript, Python, FastAPI, SQLAlchemy,
  Pydantic, REST, PostgreSQL, pgvector, AWS (Lambda, API Gateway, ECS Fargate,
  RDS, S3, CloudFront, Route 53, IAM), AWS Bedrock, Anthropic Claude API, Docker,
  GitHub Actions, CI/CD, Vite, JWT, OAuth2/OIDC, Git.

---

## Oracle Cloud Infrastructure — Software Engineer

- **When:** Aug 2024 — Present · Austin, USA
- Engineer on a tier-1, customer-facing OCI service with a 99.99% availability
  SLA, running continuously across ~100 global regions. Backend + frontend using
  Java, JavaScript, TypeScript, Angular, Spring Boot, Terraform, Ansible, SQL,
  REST, Docker, Kafka, and OCI services in a dockerized microservices
  architecture.
- Built logging UI modules in a micro-frontend architecture (Angular, NgRx,
  JS/TS, Jasmine) for searching/visualizing logs across services.
- Delivered end-to-end features for petabyte-scale data ingestion and indexing
  pipelines — consuming from Kafka, indexing via Elasticsearch and Lucene across
  SQL/NoSQL datastores, caches, kRPC and REST; services in Java/Python on
  RocksDB, Docker, Kubernetes.
- Built an AI incident assistant on open-source LLMs (OLLAMA) trained on runbooks
  and architecture docs — evaluated fine-tuning, embeddings, and RAG with vector
  databases to surface resolution steps during on-call.
- Adopted AI-assisted dev tools (GitHub Copilot, Claude, OpenAI, Gemini) across
  the team.
- Infrastructure-as-code in Terraform: load balancers, compute, IAM
  policies/roles, monitoring alarms, databases, object storage, app resource
  pools — standardized provisioning + horizontal/vertical scaling across ~100
  regions.
- Automated host configuration/deployment with Ansible and shell scripts
  (encryption setup, disk/hardware health checks).
- Authored unit/integration/canary suites (Java, JUnit, Mockito), including
  end-to-end canaries running every 10 minutes across regions.
- Built Grafana dashboards + alerting; wrote runbooks and Python/shell automation
  for faster incident mitigation.
- Primary on-call across 24/7 rotations (12-hour day/night shifts); resolved
  200+ Sev-2 incidents — CPU bottlenecks, disk mount failures, host issues, load
  spikes — via real-time scaling, throttling, fault isolation.
- Provided direct technical support to external customers within SLA; authored
  design docs, postmortems, RCAs/CAPAs; coordinated with NOC/incident
  management/leadership during escalations.
- Resolved security vulns in Java deps; managed shared client libraries via Maven
  and JFrog Artifactory.
- Implemented heavy-query and source-scan detection to block expensive searches
  before execution.
- Executed CPU shape migrations across regions, reducing sustained CPU pressure.
- Mentored junior engineers, new hires, interns; led sessions on architecture,
  on-call readiness, design/PR reviews.
- **Skills:** Java, JavaScript, TypeScript, Python, Pandas, Spring Boot,
  Terraform, Ansible, Angular, Redux/NgRx, Distributed Systems, System Design,
  Cloud Engineering, OCI, SQL, Postgres, Kafka, Lucene, kRPC, REST, Docker,
  Kubernetes, Linux, shell, Grafana, RocksDB, Object Storage, Load Balancing,
  API Gateway.

---

## Freelance — Full-Stack Engineer, 3D Model Data Analysis

- **When:** Mar 2023 — Jun 2024 · Rendered with an "FR" monogram, no Visit link.
- Built web and desktop reporting applications to run data analysis on 3D
  mechanical models exported from Teamcenter as .jt models — React, JavaScript,
  TypeScript, Python, Pandas, NumPy, wxFormBuilder.
- Partnered with mechanical engineers to gather requirements and build automated
  analyses producing accurate Excel reports.
- Automated analyses saved engineers days of manual work per report.
- **Skills:** Python, wxPython, pandas, numpy, Desktop Application, Data Analysis.

---

## Swiggy — Software Development Engineer

- **When:** Feb 2022 — Dec 2022 · Bengaluru
- Frontend for the Swiggy consumer app (10M+ downloads, millions of users) across
  desktop web, mobile web, app — JavaScript, TypeScript, React, Redux, Next.js,
  Node.js; UI + API code, E2E tests, design/code reviews, tech design docs.
- Built independent web-views (Next.js/React) embeddable in the mobile app or
  hosted standalone.
- Managed/optimized AWS infra (EC2, S3, ELB) for high-traffic services.
- Architected promotional/campaign flows end to end — engineering design,
  capacity estimation, Node.js/Express backend APIs, AWS infra — led releases
  through change management.
- Served as Release Manager (QA/product/eng coordination); on-call developer with
  New Relic dashboards and PagerDuty RCA.
- Independently built "Roast Your Dost" (Friendship Day campaign): 1M+ users,
  ranked 4th in Best Friendship Day Campaigns by Mad Over Marketing.
- Built core features via TDD (Cypress, Jest); CI/CD in Jenkins + GitHub Actions
  surfacing package-size, Lighthouse, and coverage reports on PRs.
- **Skills:** JavaScript, TypeScript, React, Redux, Next.js, Azure, Node.js,
  Express, Webpack, Storybook, Jest, Cypress, Jenkins, New Relic, PagerDuty, npm.

---

## Thomson Reuters — Software Engineer

- **When:** Oct 2021 — Feb 2022 · Bengaluru
- Full-stack on legal applications — implementing product designs, integrating
  RESTful services, unit + E2E testing, code reviews, Agile — JavaScript,
  TypeScript, Angular, Python, AWS.
- Built an NgRx state-management layer to eliminate redundant API calls and speed
  up rendering.
- Developed the Assembled Renditions feature end to end with UI; led deployment
  in AWS.
- Improved unit-test coverage from 62% to 85% (Jasmine, TDD); added Cypress E2E
  (BDD).
- Added filter/search to data tables across multiple pages.
- **Skills:** Angular, NgRx, TypeScript, JavaScript, Cypress, Python, AWS,
  Version Control.

---

## ColorTokens — Member of Technical Staff

- **When:** Aug 2019 — Oct 2021 · Bengaluru
- Full-stack (frontend-focused) development of cyber-security SaaS apps from
  scratch — reusable micro-frontend components (Angular, NgRx, React, Redux,
  RxJS, D3), API design/dev in Java, Spring, GraphQL; unit testing, code reviews.
- Led UI development teams — architecture, API design, work assignment, UX
  coordination.
- Contributed to deploy/release workflows across AWS and Azure for multiple
  products.
- On-call developer / primary POC for prod bug fixes, customer issues, outage
  response.
- Delivered the customer-specific UserAccess Group project in two weeks — helped
  secure a 2-year contract.
- Built APIs in Java/Spring and Python/Flask (OOP + ORM) against Oracle and
  MongoDB in a microservices architecture; deployed via Docker, Kubernetes,
  Jenkins CI/CD.
- Architected and implemented role-based access control (RBAC) on the UI —
  distinct workflows for security admin, policy admin, asset admin, view-only.
- Built Chart.js + D3 visualizations for zone/asset security posture and traffic
  flow between workloads, assets, networks.
- **Skills:** React, Angular, TypeScript, JavaScript, CSS3, Java, Spring,
  MongoDB, Azure, AWS, GraphQL, D3, Chart.js, Webpack, Jasmine, HTML, Bootstrap,
  SCSS, Jenkins, Jira.
