import React, { Component } from 'react';
import { skills } from './skills';
import { SkillItem } from './skill-item/skill-item';
import './skills-animation.scss';
export class SkillsAnimation extends React.Component {
    skills = skills;
    constructor() {
        super();
    }
    componentDidMount() {
        
    }
    render() {
        const allSkills = [];
        for (let key in skills) {
            skills[key].forEach(item => {
                allSkills.push(item);
            });
        }
        const tags = allSkills.sort((itemA, itemB) => itemB.rating - itemA.rating)
            .map(item => <SkillItem className={item.skill} rating={item.rating} skill={item.skill}></SkillItem>);
        return (
            <div className="skill-badges-container">
                <div className="skill-badges">
                    {tags}
                </div>
            </div>
        )
    }
}