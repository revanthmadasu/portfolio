import { BlastString } from "../../../blast-string/blast-string";
import { SkillItem } from "../../../skills-animation/skill-item/skill-item";
export default function MastodonModal(props) {
    return (
        <div className="modal-wrapper achat">
            <section className="project-description px-2">
                <p className="py-1">
                    Mastodon is an open source decentralized social network - by the people for the people.
                </p>
                <p className="py-1">
                    In this project I've deployed my version of mastodon instance on Google Cloud Platform. This is an on going project where I'm working on the UI.
                </p>
            </section>

            <section className="sections-content mt-3">
                <h5 className="section-title p-1 pl-2">
                    <BlastString stringValue="Technologies"></BlastString>
                </h5>
                <div className="features-content py-2 px-3">
                    <div className="row my-2 py-1">
                        <div className="col-auto">
                            <SkillItem className='GCP' hideRating={true} skill='GCP'></SkillItem>
                        </div>
                        <div className="col-auto">
                            <SkillItem className='react' hideRating={true} skill='react'></SkillItem>
                        </div>
                        <div className="col-auto">
                            <SkillItem className='html' hideRating={true} skill='html'></SkillItem>
                        </div>
                        <div className="col-auto">
                            <SkillItem className='css' hideRating={true} skill='css'></SkillItem>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}