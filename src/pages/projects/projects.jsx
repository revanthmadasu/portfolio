import React from 'react';
import BlastString from "components/blast-string";
import ProjectCard from 'pages/projects/project-card/project-card';
import ProjectModal from 'pages/projects/projects-modal/projects-modal';
import "./projects.scss";
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';
export default class ProjectsRoute extends React.Component {
    projects = [
        {
            title: 'mastodon.co.in',
            backgroundType: 'image',
            gitUrl: 'https://github.com/revanthmadasu/mastodon'
        },
        {
            title: 'aChat',
            backgroundType: 'image',
            gitUrl: 'https://github.com/revanthmadasu/Achat'
        },
        {
            title: 'Reckon',
            backgroundType: 'image',
            gitUrl: 'https://github.com/revanthmadasu/reckon'
        },
        {
            title: 'Data Management',
            backgroundType: 'image',
            gitUrl: 'https://github.com/revanthmadasu/School-Administration-System'
        },
    ];
    modalObj = {
        project: '',
        show: false
    };
    projectTags = [];
    constructor() {
        super();
        this.state = {
            modalObj: {
            project: '',
            show: false
            }
        };
        this.openModal.bind(this);
        this.hideModal.bind(this);
        this.projectTags = this.projects.map(item => <div className="p-0 m-0 my-2"><ProjectCard project={item} onOpenModal={this.openModal} parent={this}></ProjectCard></div>)

    }
    projectCardsContainerClass = classNames("project-cards-container d-flex p-2 m-1", {
        "project-cards-container-mobile": isMobile,
        "project-cards-container-desktop": !isMobile,
    })
    render() {
        return (
            <div className="w3-animate-left h-100 averflow-auto custom-scroll">
                <ProjectModal modalObj = {this.state.modalObj} onHideModal={this.hideModal} parent={this}></ProjectModal>
                <h5 className="section-title p-2">
                    <BlastString stringValue="Projects"></BlastString>
                </h5>
                <div className={this.projectCardsContainerClass}>
                        {this.projectTags}
                </div>
            </div>
        );
    }
    openModal(project, self) {
        self.state.modalObj = {
            project: project.title,
            show: true,
            gitUrl: project.gitUrl
        }
        self.setState(self.state);
    }
    hideModal(self) {
        self.state.modalObj = {
            project: '',
            show: false
        }
        self.setState(self.state);
    }
}