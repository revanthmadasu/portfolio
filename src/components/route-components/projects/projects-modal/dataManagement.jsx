import { SkillItem } from "../../../skills-animation/skill-item/skill-item";
export default function DataManagement(props) {
    return (
        <div className="modal-wrapper achat">
            <section className="project-description">
                <p>
                    Achieved digitalization of data by implementing a desktop application that records student data, fee data, executes queries to display student, fee, audit information. Transformed manual record system to digital. 
                </p>
                <p>
                    This application is built for Rahul Convent School as a freelancing project.
                </p>
            </section>
            <section className="sections-content mt-3">
                <h5 className="section-title p-1 pl-2">Features</h5>
                <div className="features-content p-2">
                    <div className="row my-2 py-1">
                        <div className="col-lg-2 col-md-4 col-sm-12">
                            Student Data Management
                        </div>
                        <div className="col-lg-10 col-md-8 col-sm-12">
                            <p>
                                Performs CURD operations on student data.
                            </p>
                        </div>
                    </div>
                    <div className="row my-2 py-1">
                        <div className="col-lg-2 col-md-4 col-sm-12">
                            Fee Transactions
                        </div>
                        <div className="col-lg-10 col-md-8 col-sm-12">
                            <p>
                                Records student fees transactions.
                            </p>
                        </div>
                    </div>
                    <div className="row my-2 py-1">
                        <div className="col-lg-2 col-md-4 col-sm-12">
                            Queries
                        </div>
                        <div className="col-lg-10 col-md-8 col-sm-12">
                            <p>
                                Allows Management to execute queries like how much fee is paid between particular dates, how much fee is pending, list students did not pay fees.
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
                            <SkillItem className='java' hideRating={true} skill='java'></SkillItem>
                        </div>
                        <div className="col-auto">
                            <SkillItem className='sql' hideRating={true} skill='sql'></SkillItem>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}