import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";
import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends Component {
    constructor() {
        super();
        this.portfolioService = PortfolioService.instance;

        this.state = {
            details : []
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
                <section className="page-section bg-primary text-white mb-0 " id="about">
                    <div  className="container">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset="800" duration="3">
                        <h2 className="page-section-heading text-center text-uppercase text-white">About Me</h2>


                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fa fa-user fa-fw"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 ml-auto"><p className="lead aboutme-text">
                                {this.state.details.length > 0 && this.state.details[0].fields.about1}
                            </p>
                            </div>
                            <div className="col-lg-6 mr-auto"><p className="lead aboutme-text">
                                {this.state.details.length > 0 && this.state.details[0].fields.about2}
                            </p></div>
                        </div>
                        <div className="text-center mt-4">
                            <a className="btn btn-xl btn-outline-light"
                               target="_blank" href={this.state.details.length > 0 && this.state.details[0].fields.resumeLink}><i
                                className="fa fa-file fa-fw"></i>Have a look at my Resume</a>
                        </div>
                        </ScrollAnimation>
                    </div>
                </section>
            </div>
        )
    }
}
