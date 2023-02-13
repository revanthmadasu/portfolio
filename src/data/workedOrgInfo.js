import ctSvg from "assets/img/experience/colortokensFull.svg";
import trSvg from "assets/img/experience/thomson-reuters.svg";
import swiggySvg from "assets/img/experience/swiggy.svg";
export const WorkedOrgInfo = [
    {
        name: "Swiggy",
        displayName: false,
        timeline: "2022 February - 2022 December",
        description: [
            "Worked on Frontend for Swiggy App (consumer app) which has {***text=10 Million+;type=bold***} downloads and millions of users",
            "Worked on building pixel perfect user interfaces for swiggy application in desktop, mobile platforms that will be used by millions of users.",
            "Worked on building independent webviews that can be embedded in swiggy mobile applications or independently hosted.",
            "Worked as release manager actively working with QA, product managers and development teams, managing the release content, deploying and monitoring the prod behavior during release.",
            "Worked as On Call actively monitoring the performance metrics, health of nodes, writing queries in new relic to debug prod errors, generating performance reports and charts, root cause analysis of pagerduty alerts",
            "Closely worked with UX teams, product teams, product managers on critical product tasks that impact lakhs of users."
        ],
        achievements: [
            "Independently built spotlight project for friendship day event activity called \"Roast Your Dost\" that has been used by {***text=10lakh+ users;type=bold***} and has been ranked {***text=4th;type=bold***} by Best Friendship Day Campaigns by {***text=Mad Over Marketing;type=link;link=https://mad-over-marketing.com/here-are-the-best-friendship-day-campaigns-of-2022/***}",
            "Independently build and lead solutioning for {***text=business critical spotlight project \"One Tap Add\";type=bold***} which enables single tap add membership feature for Swiggy Loyalty program",
            "Independently built {***text=Independent Webviews;type=bold***} in {***text=Next;type=bold***} framework which can be hosted and rendered in Android, iOS and web apps.",
            "Implemented {***text=CI/CD;type=bold***} workflows to get reports of package sizes, {***text=LHCI metrics;type=bold***}, test coverage on the PRs.",
            "Successfully resolved mutliple {***text=prod issues;type=bold***} immediately with minimal impact on business"
        ],
        skills: ['react', 'redux', 'typescript', 'javascript', 'next', 'html', 'css', 'jest', 'cypress', 'git', 'jenkins'],
        displayTechnologies: "Angular, Typescript, Javascript, HTML, CSS, NGRX, Jasmine, Karma, Cypress, Postman, GIT, Bitbucket, Jenkins, Azure Boards",
        orgLink: "https://www.swiggy.com/",
        iconCss: "",
        svgComponent: swiggySvg
    },
    {
        name: "Thomson Reuters",
        displayName: false,
        timeline: "2021 October - 2022 February",
        description: [
            "Work in fullstack development (frontend focussed) of legal applications, implementing designs from product managers, bug fixes, unit testing, code reviews etc.",
            "Liaising with UX team, product managers, and UI team to implement product and technical designs.",
            "Developing reusable components in the micro-frontend architecture, UI Development, API Integration, Unit testing, bug fixes, maintaining and improving existing codebases, and peer code reviews.",
        ],
        achievements: [
            "Independently developed {***text=“Assembled Renditions”;type=bold***} feature.",
            "Implemented filter functionality to tables which brought search functionality to multiple pages",
            "Increased unit testing code coverage from 54% to 87% of a large module containing 12+ pages"
        ],
        skills: ['angular', 'typescript', 'javascript', 'html', 'css', 'ngrx', 'jasmine', 'cypress', 'git'],
        displayTechnologies: "Angular, Typescript, Javascript, HTML, CSS, NGRX, Jasmine, Karma, Cypress, Postman, GIT, Bitbucket, Jenkins, Azure Boards",
        orgLink: "https://www.thomsonreuters.com/",
        iconCss: "",
        svgComponent: trSvg
    },
    {
        name: "Colortokens",
        displayName: false,
        timeline: "2019 August - 2021 October",
        description: [
            "Work in frontend development of new applications from scratch, new features, and maintenance of the existing scalable web application with utmost quality.",
            "Liaising with UX team, product managers, and UI team to implement product and technical designs.",
            "Developing reusable components in the micro-frontend architecture, UI Development, API Integration, Unit testing, bug fixes, maintaining and improving existing codebases, and peer code reviews.",
            "Production support responsibilities which includes responsibilities like prod bug fixes, resolving system outages, point of contact for different UI team"
        ],
        achievements: [
            "Developed multiple core features of the application with a smooth responsive design which are being used by various security admins.",
            "Developed {***text=Policy Builder;type=bold***} feature single handedly which allows to create access policies between different groups",
            "Led UI development teams effectively with planning (architecture, API design, work assignment, coordinating with UX teams), implementation along with individual development contribution.",
            "Successfully refactored the application which helped us achieve a robust application that made development processes quicker and bugless."
        ],
        skills: ['angular', 'typescript', 'javascript', 'jasmine', 'html', 'css', 'bootstrap', 'git'],
        displayTechnologies: "Angular, Typescript, Javascript, D3, Karma, HTML5, SCSS, Bootstrap, Git, Postman, Atlassian, Clusman, Kubectl.",
        orgLink: "https://colortokens.com",
        iconCss: "",
        svgComponent: ctSvg
    },
];