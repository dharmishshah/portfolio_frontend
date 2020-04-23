import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";

import '../css/styles.css'
import logo from '../images/img/avataaars.svg'

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
                             src={logo} alt=""/>
                        <h1 className="masthead-heading text-uppercase mb-0">Dharmish Shah</h1>
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fa fa-laptop fa-fw"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <p className="masthead-subheading font-weight-light mb-0">Software Engineer - Data Engineer -
                            Web Developer</p>
                    </div>
                </header>
            </div>
        )
    }
}
