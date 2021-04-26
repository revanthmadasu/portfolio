import {SkillsList} from '../skills-list/skills-list';
import {SkillsAnimation} from '../skills-animation/skills-animation';
import { BlastString } from '../blast-string/blast-string';
export function SkillsRoute () {
    return (          
    <div className="section skills-section h-100 overflow-auto custom-scroll">
    <div className="">
      <h5 className="section-title w3-animate-left p-2">
          <BlastString stringValue="Skills"></BlastString>
      </h5>
      <div className="row">
        <div className="w3-animate-left col-xs-12 col-sm-12 col-lg-12 col-xl-6 col-md-12">
          <SkillsList></SkillsList>
        </div>
        <div className="col-xs-12 col-sm-12 col-lg-12 col-xl-6 col-md-12 rounded-box w3-animate-right">
          <SkillsAnimation></SkillsAnimation>
        </div>
      </div>
    </div>
  </div>)
}