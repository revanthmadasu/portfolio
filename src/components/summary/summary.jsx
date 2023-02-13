import React, { Component } from 'react';
import { getHighlighted } from 'stripts/utils';
import { BlastString } from '../blast-string/blast-string';
import './summary.scss';
export function Summary() {
    const summaryDesc = [
        "Proven software developer with 3+ years experience at top tier product based companies",
        "Experienced in building consumer applications with {{100 Million+}} downloads that require {{high uptime}}, and {{pixel-perfect UI}}",
        "Experienced in working with startup organizations of small size and large enterprise organizations.",
        "Expertise in Frontend Technologies: Typescript, Javascript, React, Redux, Angular, NGRX, Cloud Technologies: GCP, AWS",
        "Experienced in production support of application with {{160000+}} restaurant partners {{1 million+}} weekly orders.",
        "Problem solver, team player, constant learner, and result-oriented person. I never compromise on the quality of work and take pride in my work.",
    ];
    const summaryDescTags = summaryDesc.map(desc => <p dangerouslySetInnerHTML={{__html: getHighlighted(desc)}}/>);
    return (
        <React.Fragment>
            <div className="w3-animate-right">
                <h5 className="section-title p-2">
                    <BlastString stringValue="About"></BlastString>
                </h5>
                <div className="container-fluid my-4 py-2 rounded-box">
                    <div className="badge blue-dark">
                        <div className="circle"> <i className="fa fa-rocket"></i></div>
                        <div className="ribbon">Problem Solver</div>
                    </div>
                    <div className="badge yellow">
                        <div className="circle"> <i className="fa fa-bolt"></i></div>
                        <div className="ribbon">Productive</div>
                    </div>
                    <div className="badge green-dark">
                        <div className="circle"> <i className="fa fa-check"></i></div>
                        <div className="ribbon">Quality</div>
                    </div>
                    <div className="badge blue">
                        <div className="circle"> <i className="fa fa-users"></i></div>
                        <div className="ribbon">Team Work</div>
                    </div>
                </div>
                <div className="section-content">
                    {summaryDescTags}
                </div>
            </div>
        </React.Fragment>
    );
}