import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import '../css/styles.css'

import ScrollAnimation from "react-animate-on-scroll";
import CertificateCarousel from "../Components/CertificateCarousel";



export default class PublicationMain extends Component {
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

            <div data-aos='fade-up' id="skills">
                <section className="page-section portfolio" id="portfolioDetail">
                    <div className="container">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut"  duration="1">
                            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Certificates</h2>
                            <div className="divider-custom">
                                <div className="divider-custom-line"></div>
                                <div className="divider-custom-icon">
                                    <i className="fa fa-cogs fa-fw"></i>
                                </div>
                                <div className="divider-custom-line"></div>
                            </div>
                        </ScrollAnimation>
                        <CertificateCarousel/>
                    </div>
                </section>
            </div>
        )
    }
}
