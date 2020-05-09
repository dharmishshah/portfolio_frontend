import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";
import '../css/styles.css'
import { Fade, Random } from 'react-animation-components'
import {Animated} from "react-animated-css";

import handleViewport from 'react-in-viewport'



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
import ReactVisibilitySensor from 'react-visibility-sensor'
import Example from "./Example";
import VisibilitySensor from "react-visibility-sensor";


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
            isVisible : false,
            animationleftIn : "bounceInLeft",
            animationleftOut : "bounceOutLeft",
            animationRightIn : "bounceInRight",
            animationRightOut : "bounceOutRight",
        };
        this.onChange = this.onChange.bind(this);

    }

    onChange (isVisible) {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
        this.setState({isVisible: isVisible})
    }

    render() {
        return (

            <div id="skills">
            <section className="page-section portfolio" id="portfolioDetail">

                <div className="container">

                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Skills</h2>

                    <div className="divider-custom">

                        <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon">
                                <VisibilitySensor onChange={this.onChange}>
                                    <i className="fa fa-cogs fa-fw"></i>
                                </VisibilitySensor>
                            </div>
                        <div className="divider-custom-line"></div>

                    </div>


                    <div className="row">
                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationleftIn} animationOut={this.state.animationleftOut}
                                      isVisible={this.state.isVisible}>
                                <span><IconJava height={this.state.height} width ={this.state.width}/></span>
                            </Animated>
                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationleftIn} animationOut={this.state.animationleftOut}
                                      isVisible={this.state.isVisible}>
                                <span><IconPython height={this.state.height} width ={this.state.width}/></span>
                            </Animated>
                        </div>

                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationleftIn} animationOut={this.state.animationleftOut}
                                      isVisible={this.state.isVisible}>
                            <span><IconPhp height={this.state.height} width ={this.state.width}/></span>
                        </Animated>
                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationRightIn} animationOut={this.state.animationRightOut}
                                      isVisible={this.state.isVisible}>
                            <span><IconC height={this.state.height} width ={this.state.width}/></span>
                        </Animated>
                        </div>

                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationRightIn} animationOut={this.state.animationRightOut}
                                      isVisible={this.state.isVisible}>
                            <img src={spring} height={this.state.height} width ={this.state.width} ></img>
                        </Animated>
                        </div>

                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationRightIn} animationOut={this.state.animationRightOut}
                                      isVisible={this.state.isVisible}>
                            <img src={hibernate} height={this.state.height} width ={this.state.width}></img>
                        </Animated>
                        </div>

                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationleftIn} animationOut={this.state.animationleftOut}
                                      isVisible={this.state.isVisible}>
                            <span><IconDjango height={this.state.height} width ={this.state.width}/></span>
                            </Animated>
                        </div>


                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationleftIn} animationOut={this.state.animationleftOut}
                                      isVisible={this.state.isVisible}>
                            <span><IconMysql height={this.state.height} width ={this.state.width}/></span>
                            </Animated>
                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationleftIn} animationOut={this.state.animationleftOut}
                                      isVisible={this.state.isVisible}>
                            <span><IconOracle height={this.state.height} width ={this.state.width}/></span>
                            </Animated>
                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationRightIn} animationOut={this.state.animationRightOut}
                                      isVisible={this.state.isVisible}>
                            <span><IconMongodb height={this.state.height} width ={this.state.width}/></span>
                            </Animated>
                        </div>

                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationRightIn} animationOut={this.state.animationRightOut}
                                      isVisible={this.state.isVisible}>
                            <img src={hadoop} height={this.state.height} width ={this.state.width}></img>
                            </Animated>
                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationRightIn} animationOut={this.state.animationRightOut}
                                      isVisible={this.state.isVisible}>
                            <img src={spark} height={this.state.height} width ={this.state.width}></img>
                            </Animated>
                        </div>


                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationleftIn} animationOut={this.state.animationleftOut}
                                      isVisible={this.state.isVisible}>
                            <span><IconHtml5 height={this.state.height} width ={this.state.width}/></span>
                            </Animated>
                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationleftIn} animationOut={this.state.animationleftOut}
                                      isVisible={this.state.isVisible}>
                            <span><IconCss3 height={this.state.height} width ={this.state.width}/></span>
                            </Animated>
                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationleftIn} animationOut={this.state.animationleftOut}
                                      isVisible={this.state.isVisible}>
                            <span><IconJavascript height={this.state.height} width ={this.state.width}/></span>
                            </Animated>
                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationRightIn} animationOut={this.state.animationRightOut}
                                      isVisible={this.state.isVisible}>
                            <span><IconJquery height={this.state.height} width ={this.state.width}/></span>
                            </Animated>
                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationRightIn} animationOut={this.state.animationRightOut}
                                      isVisible={this.state.isVisible}>
                            <span><IconReact height={this.state.height} width ={this.state.width}/></span>
                            </Animated>
                        </div>

                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationRightIn} animationOut={this.state.animationRightOut}
                                      isVisible={this.state.isVisible}>
                            <img src={reactNative} height={this.state.height} width ={this.state.width}></img>
                            </Animated>
                        </div>



                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationleftIn} animationOut={this.state.animationleftOut}
                                      isVisible={this.state.isVisible}>
                            <img src={redux} height={this.state.height} width ={this.state.width}></img>
                            </Animated>
                        </div>

                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationleftIn} animationOut={this.state.animationleftOut}
                                      isVisible={this.state.isVisible}>
                            <span><IconAngularjs height={this.state.height} width ={this.state.width}/></span>
                            </Animated>
                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationleftIn} animationOut={this.state.animationleftOut}
                                      isVisible={this.state.isVisible}>
                            <span><IconNodejs height={this.state.height} width ={this.state.width}/></span>
                            </Animated>
                        </div>



                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationRightIn} animationOut={this.state.animationRightOut}
                                      isVisible={this.state.isVisible}>
                            <span><IconAmazonwebservices height={this.state.height} width ={this.state.width}/></span>
                            </Animated>
                        </div>

                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationRightIn} animationOut={this.state.animationRightOut}
                                      isVisible={this.state.isVisible}>
                            <span><IconGit height={this.state.height} width ={this.state.width}/></span>
                            </Animated>
                        </div>

                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationRightIn} animationOut={this.state.animationRightOut}
                                      isVisible={this.state.isVisible}>
                            <img src={jenkins} height={this.state.height} width ={this.state.width}></img>
                            </Animated>
                        </div>
                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationleftIn} animationOut={this.state.animationleftOut}
                                      isVisible={this.state.isVisible}>
                            <img src={rabbit} height={this.state.height} width ={this.state.width}></img>
                            </Animated>
                        </div>

                        <div className="col-md-3 col-lg-2 mb-5">
                            <Animated animationIn={this.state.animationleftIn} animationOut={this.state.animationleftOut}
                                      isVisible={this.state.isVisible}>
                            <img src={jira} height={this.state.height} width ={this.state.width}></img>
                            </Animated>
                        </div>
                    </div>

                    <div className="form-group text-center mt-4">
                            <button className="btn btn-primary btn-sendmail" data-toggle="modal"
                                    data-target="#portfolioModal3"
                                    type="submit"> More Info <i className="fa fa-angle-double-right fa-fw"/>
                            </button>
                    </div>
                </div>
            </section>
            </div>
        )
    }
}