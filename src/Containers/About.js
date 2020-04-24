import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";

export default class About extends Component {
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
                <section className="page-section bg-primary text-white mb-0" id="about">
                    <div className="container">
                        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fa fa-user fa-fw"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 ml-auto"><p className="lead aboutme-text">I am a Master of Science graduate
                                (Computer Science) from Northeastern University,Boston.
                                I am passionate about software development and love to code.
                                I have experience of almost 3 years in Software Development
                                working extensively in Java, Python, MySQL. MongoDB and Oracle. I also have experience with front
                                end technologies (HTML,CSS, Javascript, ReactJs, Angular).
                                I am familiar working with AWS cloud services and Big Data technologies.
                                I have good understanding about object-oriented principles and design patterns.
                            </p>
                            </div>
                            <div className="col-lg-6 mr-auto"><p className="lead aboutme-text">

                                I enjoy being challenged
                                and getting engaged with projects that require me to work outside my comfort and
                                knowledge set. I am a team player
                                and a very good listener. I like working with people. I like to have discussions about new innovations
                                and discoveries happening around the world.
                                I am an adaptable professional who has been consistently praised as efficient by my
                                coworker and management.
                                Overall I have consistently demonstrated
                                team work, management and problem solving abilities in every aspect of my
                                software engineering roles and I invite you to review my detailed achievements
                                in my resume.
                                I am looking for a full-time role starting June
                                2020. Please contact me at dharmish21@gmail.com to arrange a
                                convenient meeting time.
                            </p></div>
                        </div>
                        <div className="text-center mt-4">
                            <a className="btn btn-xl btn-outline-light"
                               target="_blank" href="https://portfolio-personal123.s3.amazonaws.com/DharmishShahResume_3_Mar_SE.pdf"><i
                                className="fa fa-file fa-fw"></i>Have a look at my Resume</a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
