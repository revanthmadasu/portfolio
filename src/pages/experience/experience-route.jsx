import React from 'react';
import SkillItem from 'components/skills-animation/skill-item';
import BlastString from 'components/blast-string';
import { WorkedOrg } from 'components/WorkedOrg/WorkedOrg';
import { WorkedOrgInfo } from 'data/workedOrgInfo';
export default class ExperienceRoute extends React.Component {

    skills = ['angular', 'typescript', 'javascript', 'jasmine', 'html', 'css', 'bootstrap', 'git'];
    skillTags = this.skills.map(skill => <SkillItem hideRating={true} skill={skill}></SkillItem>);
    WorkedOrgs = WorkedOrgInfo.map(itemInfo => <WorkedOrg orgInfo={itemInfo}></WorkedOrg>);
    render() {
        return (
            <div className="w3-animate-left h-100 overflow-auto custom-scroll">
                <h5 className="section-title p-2">
                    <BlastString stringValue="Experience"></BlastString>
                </h5>
                {this.WorkedOrgs}
            </div>
        )
    }
}