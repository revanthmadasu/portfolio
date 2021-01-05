import React from 'react';
import  './project-card.scss';
export default function ProjectCard(props) {
    function openModal() {
        props.onOpenModal(props.project, props.parent);
    }
    return(<React.Fragment>
        <div className="d-inline-block card-container position-relative" onClick={() => openModal()}>
            <span className="background d-inline-block w-100 h-100">
                {
                    props.project.title === 'Reckon' && <span className="image-bg reckon-bg d-inline-block h-100 w-100"></span>
                }
                {
                    props.project.title === 'aChat' && <span className="aChat image-bg d-inline-block h-100 w-100">
                            <h3 className="text-center">aChat</h3>
                    </span>
                }
                {
                    props.project.title === 'Data Management' && <span className="data image-bg d-inline-block h-100 w-100">
                            <h3 className="text-center">Data Management</h3>
                    </span>
                }
                {
                    props.project.backgroundType !== 'image' && 
                        <h3 className={`text-bg d-inline-block h-100 w-100 align-middle text-center ${props.project.title}`}> 
                            {props.project.title}
                        </h3>
                }
            </span>
            <span className="position-absolute view-project text-center rounded-circle py-3 cursor-pointer"> View Project</span>
        </div>
    </React.Fragment>)
}