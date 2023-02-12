import React, { Component } from 'react';
import { Rating } from '@mui/lab'
import './skill-item.scss';
export function SkillItem(props) {
    return (
        <React.Fragment>
            <div className={`d-inline-flex flex-column mx-2 px-1 my-3 skill-badge ${props.skill}`}>
                <span className={`d-inline-block skill-badge-icon`}>
                </span>
                <span className="flex-item text-center text-capitalize px-1">{props.skill}</span>
                {
                    !props.hideRating && 
                    <Rating readOnly={true} value={props.rating} precision={0.5}></Rating>
                }
            </div>
        </React.Fragment>
    )
}