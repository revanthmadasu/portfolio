import {SkillsList} from '../skills-list/skills-list';
import {SkillsAnimation} from '../skills-animation/skills-animation';
export function SkillsRoute () {
    return (          
    <div className="section skills-section h-100 overflow-auto">
    <div className="">
      <h5 className="section-title w3-animate-left p-2">
          Skills
      </h5>
      <div className="row">
        <div className="w3-animate-left col-xs-12 col-sm-12 col-lg-12 col-xl-6 col-md-12">
          <SkillsList></SkillsList>
        </div>
        <div className="col-xs-12 col-sm-12 col-lg-12 col-xl-6 col-md-12">
          <SkillsAnimation></SkillsAnimation>
        </div>
      </div>
    </div>
  </div>)
}