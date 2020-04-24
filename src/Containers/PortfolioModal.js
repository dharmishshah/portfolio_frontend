import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";
import EducationRow from "../Components/EducationRow";
import Footer from "./Footer";
import ExperienceRow from "../Components/ExperienceRow";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Certificates from "../Components/Certificates";
import Personal from "../Components/Personal";
import Recommendations from "../Components/Recommendations";

export default class HomePageContainer extends Component {
    constructor() {
        super();
        this.portfolioService = PortfolioService.instance;

        this.state = {
            experiences: [],
            education: [],
            skills: [],
            projects: []
        };
    }

    render() {
        return (
            <div>
            <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog"
                     aria-labelledby="portfolioModal1Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                                            Education </h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                            </div>
                                            <div className="divider-custom-line"></div>
                                        </div>

                                        <EducationRow />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


                <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog"
                     aria-labelledby="portfolioModal6Label" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fas fa-times"></i></span>
                            </button>
                            <div className="modal-body text-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                                                Experience</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <ExperienceRow />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog"
            aria-labelledby="portfolioModal3Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="fas fa-times"></i></span>
            </button>
            <div className="modal-body text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Skills</h2>
                            <div className="divider-custom">
                                <div className="divider-custom-line"></div>
                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                </div>
                                <div className="divider-custom-line"></div>
                            </div>
                            <Skills/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>

                <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" role="dialog"
                     aria-labelledby="portfolioModal4Label" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fas fa-times"></i></span>
                            </button>
                            <div className="modal-body text-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                                                Projects</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <Projects/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" role="dialog"
                     aria-labelledby="portfolioModal5Label" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fas fa-times"></i></span>
                            </button>
                            <div className="modal-body text-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                                                Certificates
                                            </h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <Certificates/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" role="dialog"
                     aria-labelledby="portfolioModal6Label" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fas fa-times"></i></span>
                            </button>
                            <div className="modal-body text-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                                                Recommendation </h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                           <Recommendations />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-modal modal fade" id="portfolioModal7" tabIndex="-1" role="dialog"
                     aria-labelledby="portfolioModal6Label" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fas fa-times"></i></span>
                            </button>
                            <div className="modal-body text-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                                                Personal </h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <Personal/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

            )
        }
    }
