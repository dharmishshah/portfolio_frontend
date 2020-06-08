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

            <div data-aos='fade-up' id="skills">
            <section className="page-section portfolio" id="portfolioDetail">
                <div className="container">
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut"  duration="1">
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Skills</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon">
                                <i className="fa fa-cogs fa-fw"></i>
                            </div>
                        <div className="divider-custom-line"></div>
                    </div>
                    </ScrollAnimation>





                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset="300" duration="3">
                        <div className="row">

                            <div className="col-xs-3 col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                            <span>
                                <Java  />
                            </span>
                            </div>
                            <div className="col-xs-3 col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                           <span>
                                <Python  />
                            </span>
                            </div>

                            <div className="col-xs-3 col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                            <span>
                                <PHP  />
                            </span>
                            </div>
                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                           <span>
                                <C  />
                            </span>
                            </div>

                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <img src={spring} height={this.state.height} width ={this.state.width} ></img>
                            </div>

                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <img src={hibernate} height={this.state.height} width ={this.state.width}></img>
                            </div>

                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <Django/>
                            </div>


                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <MySQL/>
                            </div>
                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <Oracle/>
                            </div>
                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <Mongodb/>
                            </div>

                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <img src={hadoop} height={this.state.height} width ={this.state.width}></img>
                            </div>
                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <img src={spark} height={this.state.height} width ={this.state.width}></img>
                            </div>


                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <HTML/>

                            </div>
                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <CSS/>
                            </div>
                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <Javascript/>
                            </div>
                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <JQuery/>
                            </div>
                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <ReactJS/>
                            </div>
                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <Angular/>
                            </div>

                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <img src={reactNative} height={this.state.height} width ={this.state.width}></img>
                            </div>

                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <img src={redux} height={this.state.height} width ={this.state.width}></img>
                            </div>

                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <NodeJS/>
                            </div>

                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <AWS/>
                            </div>

                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <Git/>
                            </div>

                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <img src={jenkins} height={this.state.height} width ={this.state.width}></img>
                            </div>
                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <img src={rabbit} height={this.state.height} width ={this.state.width}></img>
                            </div>

                            <div className="col-4  col-sm-3 col-md-3 col-lg-2 mb-5">
                                <img src={jira} height={this.state.height} width ={this.state.width}></img>
                            </div>

                        </div>
                    </ScrollAnimation>

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
