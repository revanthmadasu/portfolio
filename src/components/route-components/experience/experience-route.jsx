import React from 'react';
import './experience.scss';
import ColortokensIcon from './colortokens-icon';
import {SkillItem} from '../../skills-animation/skill-item/skill-item';
import { skills } from '../../skills-animation/skills';
export default class ExperienceRoute extends React.Component {

    skills = ['angular', 'typescript', 'javascript', 'jasmine', 'html', 'css', 'bootstrap', 'git'];
    skillTags = this.skills.map(skill => <SkillItem hideRating={true} skill={skill}></SkillItem>);
    render() {
        return (
            <div>
                <h5 className="section-title w3-animate-left p-2">Experience</h5>
                <div className="experience-wrapper rounded-box p-2 m-1 ">
                    <div className="row">
                        <span>
                            <ColortokensIcon></ColortokensIcon>
                            <span className="align-middle timeline">2019 August to Present</span>
                        </span>
                    </div>
                    <div className="row mt-3 my-2">
                        Work in frontend development of new applications from scratch, new features, and maintenance of the existing scalable web application with utmost quality.
                    </div>
                    <div className="row my-2">
                        Liaising with UX team, product managers, and UI team to implement product and technical designs.
                    </div>
                    <div className="row my-2">
                        Developing reusable components in the micro-frontend architecture, UI Development, API Integration, Unit testing, bug fixes, maintaining and improving existing codebases, and peer code reviews.
                    </div>
                    <div className="row my-2">
                        {this.skillTags}
                    </div>
                    <div className="row my-2">
                        <div className="col-1"><u>Technologies:</u></div>
                        <div className="col-11">Angular, Typescript, Javascript, D3, Karma, HTML5, SCSS, Bootstrap, Git, Postman, Atlassian, Clusman, Kubectl.</div>
                    </div>
                </div>
            </div>
        )
    }
}