import React, { Component } from 'react';
import { skills } from './skills';
import { SkillItem } from './skill-item/skill-item';
import './skills-animation.scss';
import { BlastString } from '../blast-string/blast-string';
import { HackerRankBadgesImgs }  from './hackerrank-badges';
export class SkillsAnimation extends React.Component {
    skills = skills;
    hackerrankBadges = ['problemsolving', 'python', 'java', 'sql', 'cpp', 'c'];
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
        const hackerrankBadgeTags = this.hackerrankBadges.map(skill => {
            return (
                <div className='hr-badge flex-item'>
                    {HackerRankBadgesImgs[skill]}
                </div>
            );
        });
        return (
            <React.Fragment>
                <div className="skill-badges-container">
                    <div className="skill-badges">
                        {tags}
                    </div>
                </div>
                <div className="hackerrank-badges-section mx-2 px-1 my-3">
                <h5 class="section-title w3-animate-left p-2 mb-3">
                    <BlastString stringValue={'Hackerrank Badges'}></BlastString>
                    </h5>
                    <div className="hackerrank-badges d-flex flex-wrap">
                        {hackerrankBadgeTags}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}