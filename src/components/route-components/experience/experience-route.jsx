import React from 'react';
import './experience.scss';
import ColortokensIcon from './colortokens-icon';
import {SkillItem} from '../../skills-animation/skill-item/skill-item';
import { skills } from '../../skills-animation/skills';
import { BlastString } from '../../blast-string/blast-string';
export default class ExperienceRoute extends React.Component {

    skills = ['angular', 'typescript', 'javascript', 'jasmine', 'html', 'css', 'bootstrap', 'git'];
    skillTags = this.skills.map(skill => <SkillItem hideRating={true} skill={skill}></SkillItem>);
    render() {
        return (
            <div className="w3-animate-left">
                <h5 className="section-title p-2">
                    <BlastString stringValue="Experience"></BlastString>
                </h5>
                <div className="experience-wrapper rounded-box p-2 mx-1 my-4">
                    <div>
                        <span className="row">
                            <ColortokensIcon></ColortokensIcon>
                            <span className="align-middle timeline col-sm-8 col-md-9 col-lg-9 px-lg-2 px-md-4 mt-2">2019 August to Present</span>
                        </span>
                    </div>
                    <div className="mt-3 my-2">
                        <span>
                            Work in frontend development of new applications from scratch, new features, and maintenance of the existing scalable web application with utmost quality.
                        </span>
                    </div>
                    <div className="my-2">
                        <span>
                            Liaising with UX team, product managers, and UI team to implement product and technical designs.
                        </span>
                    </div>
                    <div className="my-2">
                        <span>
                            Developing reusable components in the micro-frontend architecture, UI Development, API Integration, Unit testing, bug fixes, maintaining and improving existing codebases, and peer code reviews.
                        </span>
                    </div>
                    <div className="my-2">
                        {this.skillTags}
                    </div>
                    <div className="row my-2">
                        <div className="col-xl-1 col-lg-2 col-md-2"><u>Technologies:</u></div>
                        <div className="col-xl-11col-lg-10 col-md-8">
                            <span>
                                Angular, Typescript, Javascript, D3, Karma, HTML5, SCSS, Bootstrap, Git, Postman, Atlassian, Clusman, Kubectl.
                            </span>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}