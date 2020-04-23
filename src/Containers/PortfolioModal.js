import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";

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
                                        <img className="img-fluid rounded mb-5"
                                                                            src="assets/img/portfolio/cabin.png"
                                                                            alt=""/>
                                        <p className="mb-5">Northeastern University</p>
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
                                            <img className="img-fluid rounded mb-5"
                                                 src="assets/img/portfolio/submarine.png"
                                                 alt=""/>
                                            <p className="mb-5">Hotspot Therapeutics</p>
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
                            <img className="img-fluid rounded mb-5"
                                                                src="assets/img/portfolio/circus.png"
                                                                alt=""/>
                            <p className="mb-5">Java</p>
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
                                            <img className="img-fluid rounded mb-5"
                                                                                src="assets/img/portfolio/game.png"
                                                                                alt=""/>
                                            <p className="mb-5">Big-Data Parallel Processing</p>
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
                                                Certificates & Publications
                                            </h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <img className="img-fluid rounded mb-5"
                                                                                src="assets/img/portfolio/safe.png"
                                                                                alt=""/>
                                            <p className="mb-5">Oracle Certified Java Programmer</p>

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
                                                Personal </h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <img className="img-fluid rounded mb-5"
                                                                                src="assets/img/portfolio/submarine.png"
                                                                                alt=""/>
                                            <p className="mb-5">
                                                Achievements
                                                Recommendations
                                                Interests
                                            </p>
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
