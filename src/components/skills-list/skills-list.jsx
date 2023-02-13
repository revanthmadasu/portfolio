import React from 'react';
import './skills-list.scss';
export function SkillsList() {
    return (
        <React.Fragment>
            <div className="container-fluid my-3">
                <div className="skills-table">
                    <div className="row py-2">
                        <div className="col-lg-2 col-md-2 col-xl-2 col-sm-4">
                            <span>
                                Languages:
                            </span>
                        </div>
                        <div className="col-lg-10 col-md-10 col-xl-10 col-sm-8">
                            <span>Javascript, Typescript, Python, Java, C, PHP, SQL, HTML.</span>
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col-lg-2 col-md-2 col-xl-2 col-sm-4">
                            <span>
                            Frameworks:
                            </span>
                        </div>
                        <div className="col-lg-10 col-md-10 col-xl-10 col-sm-8">
                            <span>Angular, NGRX, React, Redux, Next, Spring Boot, Express, Android Studio, Jasmine, Jest.</span>
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col-lg-2 col-md-2 col-xl-2 col-sm-4">
                            <span>
                            Databases:
                            </span>
                        </div>
                        <div className="col-lg-10 col-md-10 col-xl-10 col-sm-8">
                            <span>MySQL, MongoDB, Firebase.</span>
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col-lg-2 col-md-2 col-xl-2 col-sm-4">
                            <span>
                            Libraries:
                            </span>
                        </div>
                        <div className="col-lg-10 col-md-10 col-xl-10 col-sm-8">
                            <span>CSS, Bootstrap, Scikit-Learn, Numpy, Pandas, Matplotlib, Seaborn</span>
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col-lg-2 col-md-2 col-xl-2 col-sm-4">
                            <span>
                            Skills:
                            </span>
                        </div>
                        <div className="col-lg-10 col-md-10 col-xl-10 col-sm-8">
                            <span>GCP, New Relic, REST, Git, CI/CD, Jenkins, Data Structures and Algorithms, Design Patterns, Machine Learning.</span>
                        </div>
                    </div>
                </div>
                <div className="skills-desc dark-rounded-box row p-3 my-3">
                    <p>
                        The main area of my expertise is front-end development.  
                    </p>
                    <p>
                        Building enterprise, scalable web applications with Angular, React, Next, HTML, CSS, Javascript using different design patterns and approaches.
                    </p>
                    <p>
                        I also have expertise in full-stack development with spring, MEA(R)N stack.
                    </p>
                    <p>
                        I am also deeply interested in Machine Learning and would love to take an ML role.
                    </p>
                    <p>
                        I love problem solving and practice my problem solving, data structures, and algorithms skills on <a href="https://www.hackerrank.com/Revanth_Madasu" target="_blank"> Hackerrank</a>.
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}