import React from 'react';
import ProjectCard from './project-card/project-card';
import ProjectModal from './projects-modal/projects-modal';
export default class ProjectsRoute extends React.Component {
    projects = [
        {
            title: 'aChat',
            backgroundType: 'image',
        },
        {
            title: 'Reckon',
            backgroundType: 'image',
        },
        {
            title: 'Data Management',
            backgroundType: 'image',
        }
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
            <div>
                <ProjectModal modalObj = {this.state.modalObj} onHideModal={this.hideModal} parent={this}></ProjectModal>
                <h5 className="section-title w3-animate-left p-2">Projects</h5>
                <div className="row p-2 m-1">
                        {this.projectTags}
                </div>
            </div>
        );
    }
    openModal(project, self) {
        self.state.modalObj = {
            project: project.title,
            show: true
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