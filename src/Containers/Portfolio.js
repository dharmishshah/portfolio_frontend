import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";

import '../css/styles.css'
import logo from '../images/img/avataaars.svg'
import p1 from '../images/img/p1.png'
import facebook from '../images/effects/cart.gif'

export default class Portfolio extends Component {
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
            <div id="portfolio">
                <header className="masthead bg-primary text-white text-center">
                    <div className="container d-flex align-items-center flex-column">
                        <img className="masthead-avatar mb-5"
                             src={p1} alt=""/>
                        <h1 className="masthead-heading text-uppercase mb-0">Dharmish Shah</h1>
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fa fa-laptop fa-fw"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <p className="masthead-subheading font-weight-light mb-0">Software Engineer - Full Stack Developer
                        - Data Engineer</p>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <a className="btn btn-outline-light btn-social mx-1"
                               href="mailto: dharmish21@gmail.com"><i
                                className="fa fa-google fa-fw"></i></a>
                            <a
                                className="btn btn-outline-light btn-social mx-1"
                                href="https://www.linkedin.com/in/dharmish-shah" target="_blank"><i
                                className="fa fa-linkedin fa-fw"></i></a><a
                            className="btn btn-outline-light btn-social mx-1"
                            href="https://www.github.com/dharmishshah" target="_blank"><i
                            className="fa fa-github fa-fw"></i></a>

                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
