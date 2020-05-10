import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";
import ReactRotatingText from "react-rotating-text";
import Typing from 'react-typing-animation'
import ScrollAnimation from "react-animate-on-scroll";

export default class About extends Component {
    constructor() {
        super();
        this.portfolioService = PortfolioService.instance;

        this.state = {
            details : [],
            typist : ['I am actively looking for full time software engineering roles.',
            'I would be glad to set a time to call you for a quick chat to discuss my experiences in more details.']
        };
    }

    componentDidMount() {
        this.findBasicDetails();
    }

    findBasicDetails() {
        this.portfolioService.findBasicDetails().then(details => {
            this.setState({details: details})
        });
    }

    render() {
        return (
            <div>
                <section className="page-section bg-primary text-white mb-0" id="about">
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset="300" duration="3">
                    <div className="container">
                        <h2 className="page-section-heading text-center text-uppercase text-white">Let's Work Together </h2>
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fa fa-users fa-fw"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <div className="row typeDiv">
                            <div className=""><p className="typeDiv-heading font-weight-heavy mb-0 ">
                                    <ReactRotatingText
                                    items = {this.state.typist}>
                                    </ReactRotatingText>

                            </p>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                </section>
            </div>
        )
    }
}
