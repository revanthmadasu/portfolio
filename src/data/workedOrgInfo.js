import ctSvg from "assets/img/experience/colortokensFull.svg";
import trSvg from "assets/img/experience/thomson-reuters.svg";

export const WorkedOrgInfo = [
    {
        name: "Colortokens",
        displayName: false,
        timeline: "2019 August - 2021 October",
        description: [
            "Work in frontend development of new applications from scratch, new features, and maintenance of the existing scalable web application with utmost quality.",
            "Liaising with UX team, product managers, and UI team to implement product and technical designs.",
            "Developing reusable components in the micro-frontend architecture, UI Development, API Integration, Unit testing, bug fixes, maintaining and improving existing codebases, and peer code reviews.",
        ],
        achievements: [
            "Developed multiple core features of the application with a smooth responsive design which are being used by various security admins.",
            "Led UI development teams effectively with planning (architecture, API design, work assignment, coordinating with UX teams), implementation along with individual development contribution.",
            "Successfully refactored the application which helped us achieve a robust application that made development processes quicker and bugless."
        ],
        skills: ['angular', 'typescript', 'javascript', 'jasmine', 'html', 'css', 'bootstrap', 'git'],
        displayTechnologies: "Angular, Typescript, Javascript, D3, Karma, HTML5, SCSS, Bootstrap, Git, Postman, Atlassian, Clusman, Kubectl.",
        orgLink: "https://colortokens.com",
        iconCss: "",
        svgComponent: ctSvg
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
            "Independently developed “Assembled Renditions” feature.",
            "Implemented filter functionality to tables which brought search functionality to multiple pages",
            "Increased unit testing code coverage from 54% to 87% of a large module containing 12+ pages"
        ],
        skills: ['angular', 'typescript', 'javascript', 'html', 'css', 'ngrx', 'jasmine', 'cypress', 'git'],
        displayTechnologies: "Angular, Typescript, Javascript, HTML, CSS, NGRX, Jasmine, Karma, Cypress, Postman, GIT, Bitbucket, Jenkins, Azure Boards",
        orgLink: "https://www.thomsonreuters.com/",
        iconCss: "",
        svgComponent: trSvg
    }
];