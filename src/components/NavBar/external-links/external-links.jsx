import React from 'react';
import './external-links.scss';
export default function ExternalLinks() {
    return(
        <React.Fragment>
            <div className="external-links-wrapper">
                <a href="https://www.linkedin.com/in/revanth-madasu-465396107/" target="_blank" className="linkedin position-relative rounded-circle d-inline-block mx-2">
                    <i className="fa fa-linkedin-square position-absolute"></i>
                </a>
                <a href="https://github.com/revanthmadasu" target="_blank" className="github position-relative rounded-circle d-inline-block mx-2">
                    <i className="fa fa-github-square position-absolute"></i>
                </a>
                <a href="mailto:revanthmadasu913@gmail.com" target="_blank" className="mail position-relative rounded-circle d-inline-block mx-2" title="revanthmadasu913@gmail.com">
                    <i className="fa fa-envelope position-absolute"></i>
                </a>
            </div>
        </React.Fragment>
    )
}