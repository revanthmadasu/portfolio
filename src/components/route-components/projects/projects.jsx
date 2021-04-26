import React from 'react';
import { BlastString } from '../../blast-string/blast-string';
import ProjectCard from './project-card/project-card';
import ProjectModal from './projects-modal/projects-modal';
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
        this.projectTags = this.projects.map(item => <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-0 m-0 my-2"><ProjectCard project={item} onOpenModal={this.openModal} parent={this}></ProjectCard></div>)

    }
    render() {
        return (
            <div className="w3-animate-left h-100 averflow-auto custom-scroll">
                <ProjectModal modalObj = {this.state.modalObj} onHideModal={this.hideModal} parent={this}></ProjectModal>
                <h5 className="section-title p-2">
                    <BlastString stringValue="Projects"></BlastString>
                </h5>
                <div className="row p-2 m-1">
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