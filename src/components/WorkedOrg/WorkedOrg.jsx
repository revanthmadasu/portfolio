import SkillItem from "components/skills-animation/skill-item";
import React, {Component} from "react";
import { getFormattedTag } from "stripts/utils";
import OrgIcon from "./OrgIcon";
import './WorkedOrg.scss';

export const WorkedOrg = (props) => {
    const { orgInfo } = props;
    const skillTags = orgInfo.skills.map(skill => <SkillItem hideRating={true} skill={skill}></SkillItem>);

    return <>
        <div className="rounded-box p-3 mx-1 my-4">
            <div className="mb-3">
                <span className="row">
                    {<OrgIcon {...orgInfo} ></OrgIcon>}
                    <span className="align-middle timeline col-sm-8 col-md-9 col-lg-9 px-lg-2 px-md-4 mt-2">{orgInfo.timeline}</span>
                </span>
            </div>
            {[...orgInfo.description, ...orgInfo.achievements].map(description => <div className="my-2">
                <span> {getFormattedTag(description)} </span>
            </div>)}
            <div className="my-2">
                {skillTags}
            </div>
            <div className="row my-2">
                <div className="col-xl-1 col-lg-2 col-md-2"><u>Technologies:</u></div>
                <div className="col-xl-11col-lg-10 col-md-8">
                    <span>
                        {orgInfo.displayTechnologies}
                    </span>
                </div>
            </div>
        </div>
    </>
}