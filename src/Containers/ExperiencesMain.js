import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import '../css/styles.css'

import ScrollAnimation from "react-animate-on-scroll";
import ExperienceTimeline from "../Components/ExperienceTimeline";



export default class ExperiencesMain extends Component {
    constructor() {
        super();
        this.portfolioService = PortfolioService.instance;

        this.state = {
            experiences: [],
            education: [],
            skills: [],
            projects: [],
            height : 65,
            width : 65,
            items : ['a','b','c'],
            isVisible : true,
            skillsButtonVisible : false,
            moreInfoButtonVisible : false,
            animationleftIn : "bounceInLeft",
            animationleftOut : "bounceOutLeft",
            animationRightIn : "bounceInRight",
            animationRightOut : "bounceOutRight",

        };
    }


    render() {
        return (

            <div data-aos='fade-up' id="experienceMain">
                <section className="page-section portfolio">
                    <div className="container">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut"  duration="1">
                            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Experience</h2>
                            <div className="divider-custom">
                                <div className="divider-custom-line"></div>
                                <div className="divider-custom-icon">
                                    <i className="fa fa-briefcase fa-fw"></i>
                                </div>
                                <div className="divider-custom-line"></div>
                            </div>
                        </ScrollAnimation>

                        <ExperienceTimeline/>
                    </div>
                </section>
            </div>
        )
    }
}
