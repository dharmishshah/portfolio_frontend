import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";
import '../css/styles.css'


import education from "../images/img/portfolio/cabin.png"
import experience from "../images/img/portfolio/cake.png"
import skills from "../images/img/portfolio/circus.png"
import projects from "../images/img/portfolio/game.png"
import resume from "../images/img/portfolio/safe.png"
import personal from "../images/img/portfolio/submarine.png"
import PortfolioModal from "./PortfolioModal";

import education_ai from "../images/effects/education.gif"
import experience_ai from "../images/effects/experience.gif"
import skills_ai from "../images/effects/skills.gif"
import projects_ai from "../images/effects/projects.gif"
import pub_ai from "../images/effects/publications.gif"
import personal_ai from "../images/effects/personal.gif"
import recommendation from "../images/effects/recommendations.gif"

export default class PortfolioDetail extends Component {
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
            <section className="page-section portfolio" id="portfolioDetail">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fa fa-info-circle fa-fw"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>


                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal"
                                 data-target="#portfolioModal1">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i
                                        className="fas fa-expand fa-3x"></i></div>
                                </div>
                                <p className="page-section-paragraph text-center text-uppercase text-secondary mb-0">
                                    Education</p>
                                <img className="img-fluid" src={education_ai} alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal"
                                 data-target="#portfolioModal2">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i
                                        className="fas fa-expand fa-3x"></i></div>
                                </div>
                                <p className="page-section-paragraph text-center text-uppercase text-secondary mb-0">
                                    Experience</p>
                                <img className="img-fluid" src={experience_ai} alt=""/>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal"
                                 data-target="#portfolioModal3">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i
                                        className="fas fa-expand fa-3x"></i></div>
                                </div>
                                <p className="page-section-paragraph text-center text-uppercase text-secondary mb-0">
                                    Skills</p>
                                <img className="img-fluid" src={skills_ai} alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                            <div className="portfolio-item mx-auto" data-toggle="modal"
                                 data-target="#portfolioModal4">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i
                                        className="fas fa-expand fa-3x"></i></div>
                                </div>
                                <p className="page-section-paragraph text-center text-uppercase text-secondary mb-0">
                                    Projects</p>
                                <img className="img-fluid" src={projects_ai} alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                            <div className="portfolio-item mx-auto" data-toggle="modal"
                                 data-target="#portfolioModal5">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i
                                        className="fas fa-expand fa-3x"></i></div>
                                </div>
                                <p className="page-section-paragraph text-center text-uppercase text-secondary mb-0">
                                    Certificates </p>
                                <img className="img-fluid" src={pub_ai} alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="portfolio-item mx-auto" data-toggle="modal"
                                 data-target="#portfolioModal6">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i
                                        className="fas fa-expand fa-3x"></i></div>
                                </div>
                                <p className="page-section-paragraph text-center text-uppercase text-secondary mb-0">
                                    Recommendations </p>
                                <img className="img-fluid" src={recommendation} alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal"
                                 data-target="#portfolioModal7">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center
                                    h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i
                                        className="fas fa-expand fa-3x"></i></div>
                                </div>
                                <p className="page-section-paragraph text-center text-uppercase text-secondary mb-0">
                                    Personal </p>
                                <img className="img-fluid" src={personal_ai} alt=""/>
                            </div>
                        </div>
                        <PortfolioModal />
                    </div>
                </div>
            </section>
        )
    }
}