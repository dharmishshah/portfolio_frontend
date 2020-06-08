import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import '../css/styles.css'
import {Animated} from "react-animated-css"
import PortfolioList from "./PortfolioList";


import spring from "../images/skills/spring.png"
import hibernate from "../images/skills/hibernate.png"

import reactNative from "../images/skills/reactNative.png"
import redux from "../images/skills/redux.png"

import hadoop from "../images/skills/hadoop.png"
import spark from "../images/skills/spark.png"

import rabbit from "../images/skills/rabbit.png"
import jira from "../images/skills/jira.webp"
import jenkins from "../images/skills/jenkins.webp"
import ScrollAnimation from "react-animate-on-scroll";
import {
    Angular, AWS,
    C,
    CSS,
    Django, Git,
    HTML,
    Java,
    Javascript,
    JQuery,
    Mongodb,
    MySQL, NodeJS,
    Oracle,
    PHP,
    Python, ReactJS
} from "../SkillsConstants";
import ProjectsTimeline from "../Components/ProjectsTimeline";


export default class SkillsMain extends Component {
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

            <div data-aos='fade-up' id="projectsMain">
                <section className="page-section portfolio" >
                    <div className="container">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset="300" duration="1">
                            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Projects</h2>

                            <div className="divider-custom">
                                <div className="divider-custom-line"></div>
                                <div className="divider-custom-icon">
                                    <i className="fa fa-code fa-fw"></i>
                                </div>
                                <div className="divider-custom-line"></div>
                            </div>
                        </ScrollAnimation>
                            <ProjectsTimeline/>
                        </div>
                </section>
            </div>
        )
    }
}
