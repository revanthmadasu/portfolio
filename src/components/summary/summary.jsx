import React, { Component } from 'react';
import './summary.scss';
export function Summary() {
    const summaryDesc1 = `I'm a passionate software developer with the main area of expertise in frontend development.
     Building applications that solve real-world problems is what drives me.`;
    const sumaryDesc2 = `Problem solver, team player, constant learner, and result-oriented person. I never compromise on the quality of work and take pride in my work.`;
    const summaryDesc3 = `Apart from front-end development, I'm interested in FullStack and Machine Learning roles.`;
    const summaryDesc4 = `In the early stage of my career and looking for a great engineering team that would kick start my career.`;
    const summaryDesc5 = `I'm open to relocate to any place in the world and prefer remote employment.`;
    return (
        <React.Fragment>
            <div className="w3-animate-right">
                <h5 className="section-title text-uppercase p-2">About</h5>
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
                    <p>
                        {summaryDesc1}
                    </p>
                    <p>
                        {sumaryDesc2}
                    </p>
                    <p>
                        {summaryDesc3}
                    </p>
                    <p>
                        {summaryDesc4}
                    </p>
                    <p>
                        {summaryDesc5}
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
}