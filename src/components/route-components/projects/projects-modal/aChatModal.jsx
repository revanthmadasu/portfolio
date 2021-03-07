import { BlastString } from "../../../blast-string/blast-string";
import { SkillItem } from "../../../skills-animation/skill-item/skill-item";
export default function AchatModal(props) {
    return (
        <div className="modal-wrapper achat">
            <section className="project-description px-2">
                aChat is an instant messaging android application developed in Android Studio with Java.
            </section>
            <section className="sections-content mt-3">
                <h5 className="section-title p-1 pl-2"><BlastString stringValue='Features'></BlastString></h5>
                <div className="features-content py-2 px-3">
                    <div className="row my-2 py-1">
                        <div className="col-lg-2 col-md-4 col-sm-12">
                            Auto-Reply
                        </div>
                        <div className="col-lg-10 col-md-8 col-sm-12">
                            <p>
                                This feature enables user to set auto-reply messages for keys. When user is offline and an incoming message matches some keys then the auto reply set by user is sent.
                            </p>
                            <p>
                                User can categorise his/her contacts and give permissions to auto reply.
                            </p>
                            <p>
                                This feature becomes pivotal in situations when you are unavailable or hosting events and some information needs to be passed.
                            </p>
                        </div>
                    </div>
                    <div className="row my-2 py-1">
                        <div className="col-lg-2 col-md-4 col-sm-12">
                            Scheduled Messaging
                        </div>
                        <div className="col-lg-10 col-md-8 col-sm-12">
                            <p>
                                You can schedule a message for particular time.
                            </p>
                            <p>
                                Particularly useful in greetings.
                            </p>
                        </div>
                    </div>
                    <div className="row my-2 py-1">
                        <div className="col-lg-2 col-md-4 col-sm-12">
                            Embedded Dictionary
                        </div>
                        <div className="col-lg-10 col-md-8 col-sm-12">
                            <p>
                                Allows you to search words within the chat context.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sections-content mt-3">
                <h5 className="section-title p-1 pl-2">
                    <BlastString stringValue="Technologies"></BlastString>
                </h5>
                <div className="features-content py-2 px-3">
                    <div className="row my-2 py-1">
                        <div className="col-lg-2 col-md-4 col-sm-12">
                            Frontend
                        </div>
                        <div className="col-lg-10 col-md-8 col-sm-12">
                            <span>Android Studio, Java.</span>
                        </div>
                    </div>
                    <div className="row my-2 py-1">
                        <div className="col-lg-2 col-md-4 col-sm-12">
                            Backend
                        </div>
                        <div className="col-lg-10 col-md-8 col-sm-12">
                            <span>Firebase, Google Cloud Functions, SQLite.</span>
                        </div>
                    </div>
                    <div className="row my-2 py-1">
                        <div className="col-auto">
                            <SkillItem className='android studio' hideRating={true} skill='android studio'></SkillItem>
                        </div>
                        <div className="col-auto">
                            <SkillItem className='java' hideRating={true} skill='java'></SkillItem>
                        </div>
                        <div className="col-auto">
                            <SkillItem className='firebase' hideRating={true} skill='firebase'></SkillItem>
                        </div>
                        <div className="col-auto">
                            <SkillItem className='GCP' hideRating={true} skill='GCP'></SkillItem>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}