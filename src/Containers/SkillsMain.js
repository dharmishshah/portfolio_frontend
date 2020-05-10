import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import '../css/styles.css'
import {Animated} from "react-animated-css"

import VisibilitySensor from "react-visibility-sensor"

import IconAmazonwebservices from 'react-devicon/amazonwebservices/plain-wordmark'
import IconJava from 'react-devicon/java/plain-wordmark'
import IconMongodb from 'react-devicon/mongodb/plain-wordmark'
import IconMysql from 'react-devicon/mysql/plain-wordmark'
import IconNodejs from 'react-devicon/nodejs/plain-wordmark'
import IconReact from 'react-devicon/react/original-wordmark'
import IconAngularjs from 'react-devicon/angularjs/plain-wordmark'
import IconHtml5 from 'react-devicon/html5/original-wordmark'
import IconCss3 from 'react-devicon/css3/original-wordmark'
import IconDjango from 'react-devicon/django/plain'
import IconGit from 'react-devicon/git/original-wordmark'
import IconJavascript from 'react-devicon/javascript/original'
import IconOracle from 'react-devicon/oracle/original'
import IconPhp from 'react-devicon/php/original'
import IconPython from 'react-devicon/python/original'
import IconC from 'react-devicon/c/original'
import IconJquery from 'react-devicon/jquery/original-wordmark'

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


export default class SkillsMain extends Component {
    constructor() {
        super();
        this.portfolioService = PortfolioService.instance;

        this.state = {
            experiences: [],
            education: [],
            skills: [],
            projects: [],
            height : 80,
            width : 80,
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
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset="300" duration="3">
                <div className="container">

                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Skills</h2>

                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon">
                                <i className="fa fa-cogs fa-fw"></i>
                            </div>
                        <div className="divider-custom-line"></div>
                    </div>


                    <div className="row">
                        <div className="col-md-3 col-lg-2 mb-5">

                            <span><IconJava height={this.state.height} width ={this.state.width}/></span>

                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">

                            <span><IconPython height={this.state.height} width ={this.state.width}/></span>

                        </div>

                        <div className="col-md-3 col-lg-2 mb-5">

                            <span><IconPhp height={this.state.height} width ={this.state.width}/></span>

                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">

                            <span><IconC height={this.state.height} width ={this.state.width}/></span>

                        </div>

                        <div className="col-md-3 col-lg-2 mb-5">

                            <img src={spring} height={this.state.height} width ={this.state.width} ></img>

                        </div>

                        <div className="col-md-3 col-lg-2 mb-5">

                            <img src={hibernate} height={this.state.height} width ={this.state.width}></img>

                        </div>

                        <div className="col-md-3 col-lg-2 mb-5">

                            <span><IconDjango height={this.state.height} width ={this.state.width}/></span>

                        </div>


                        <div className="col-md-3 col-lg-2 mb-5">

                            <span><IconMysql height={this.state.height} width ={this.state.width}/></span>

                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">

                            <span><IconOracle height={this.state.height} width ={this.state.width}/></span>

                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">

                            <span><IconMongodb height={this.state.height} width ={this.state.width}/></span>

                        </div>

                        <div className="col-md-3 col-lg-2 mb-5">

                            <img src={hadoop} height={this.state.height} width ={this.state.width}></img>

                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">

                            <img src={spark} height={this.state.height} width ={this.state.width}></img>

                        </div>


                        <div className="col-md-3 col-lg-2 mb-5">

                            <span><IconHtml5 height={this.state.height} width ={this.state.width}/></span>

                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">

                            <span><IconCss3 height={this.state.height} width ={this.state.width}/></span>

                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">

                            <span><IconJavascript height={this.state.height} width ={this.state.width}/></span>

                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">

                            <span><IconJquery height={this.state.height} width ={this.state.width}/></span>

                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">

                            <span><IconReact height={this.state.height} width ={this.state.width}/></span>

                        </div>

                        <div className="col-md-3 col-lg-2 mb-5">

                            <img src={reactNative} height={this.state.height} width ={this.state.width}></img>

                        </div>



                        <div className="col-md-3 col-lg-2 mb-5">

                            <img src={redux} height={this.state.height} width ={this.state.width}></img>

                        </div>

                        <div className="col-md-3 col-lg-2 mb-5">

                            <span><IconAngularjs height={this.state.height} width ={this.state.width}/></span>

                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">

                            <span><IconNodejs height={this.state.height} width ={this.state.width}/></span>

                        </div>



                        <div className="col-md-3 col-lg-2 mb-5">

                            <span><IconAmazonwebservices height={this.state.height} width ={this.state.width}/></span>

                        </div>

                        <div className="col-md-3 col-lg-2 mb-5">

                            <span><IconGit height={this.state.height} width ={this.state.width}/></span>

                        </div>

                        <div className="col-md-3 col-lg-2 mb-5">

                            <img src={jenkins} height={this.state.height} width ={this.state.width}></img>

                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">

                            <img src={rabbit} height={this.state.height} width ={this.state.width}></img>

                        </div>

                        <div className="col-md-3 col-lg-2 mb-5">

                            <img src={jira} height={this.state.height} width ={this.state.width}></img>
                        </div>
                    </div>

                    <div className="form-group text-center mt-4">
                            <button className="btn btn-primary btn-sendmail" data-toggle="modal"
                                    data-target="#portfolioModal3"
                                    type="submit"> More Info <i className="fa fa-angle-double-right fa-fw"/>
                            </button>
                    </div>
                </div>
                </ScrollAnimation>
            </section>
            </div>
        )
    }
}