import { SkillItem } from "../../../skills-animation/skill-item/skill-item";
export default function ReckonModal(props) {
    return (
        <div className="modal-wrapper achat">
            <section className="project-description">
                <p>
                    Achieved job prediction by taking a psychometric test and generating MBTI personality type.
                </p>
                <p>
                    Implemented Naive Bayes algorithm in PHP to perform sentiment analysis for Facebook posts.
                </p>
            </section>
            <section className="sections-content mt-3">
                <h5 className="section-title p-1 pl-2">Features</h5>
                <div className="features-content p-2">
                    <div className="row my-2 py-1">
                        <div className="col-lg-2 col-md-4 col-sm-12">
                            Job Recommendations
                        </div>
                        <div className="col-lg-10 col-md-8 col-sm-12">
                            <p>
                                This feature recommends job suitable to user by taking a psychometric test and generating MBTI personality type.
                            </p>
                            <p>
                                From the MBTI personality type, job recommendations are shown.
                            </p>
                        </div>
                    </div>
                    <div className="row my-2 py-1">
                        <div className="col-lg-2 col-md-4 col-sm-12">
                            Sentiment Analysis
                        </div>
                        <div className="col-lg-10 col-md-8 col-sm-12">
                            <p>
                                Does sentiment analysis for facebook posts and shows how people reacted on that post.
                            </p>
                            <p>
                                Implemented Naive Bayes Algorithm in PHP to perform Sentiment Analysis.
                            </p>
                        </div>
                    </div>
                    <div className="row my-2 py-1">
                        <div className="col-lg-2 col-md-4 col-sm-12">
                            Symptoms Analysis and Disease Prediction
                        </div>
                        <div className="col-lg-10 col-md-8 col-sm-12">
                            <p>
                                User inputs the symptoms he/she has and the system displays the probabilities of diseases he/she might have.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sections-content mt-3">
                <h5 className="section-title p-1 pl-2">Technologies</h5>
                <div className="features-content p-2">
                    <div className="row my-2 py-1">
                        <div className="col-auto">
                            <SkillItem className='php' hideRating={true} skill='php'></SkillItem>
                        </div>
                        <div className="col-auto">
                            <SkillItem className='MySql' hideRating={true} skill='MySql'></SkillItem>
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