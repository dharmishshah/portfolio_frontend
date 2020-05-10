import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";

import '../css/styles.css'

export default class HomePageContainer extends Component {
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
                <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#portfolio">Dharmish Shah</a>
                        <button
                            className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary
                            text-white rounded"
                            type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">More <i className="fas fa-bars"></i></button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item mx-0 mx-lg-1"><a
                                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                    href="#portfolioDetail">Portfolio</a></li>
                                <li className="nav-item mx-0 mx-lg-1"><a
                                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                    href="#about">About Me</a></li>
                                <li className="nav-item mx-0 mx-lg-1"><a
                                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                    href="#skills">Skills</a></li>
                                <li className="nav-item mx-0 mx-lg-1"><a
                                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                    href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
