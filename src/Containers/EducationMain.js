import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";
import ScrollAnimation from 'react-animate-on-scroll';
import EducationTimeline from "../Components/EducationTimeline";

export default class EducationMain extends Component {
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
                <section className="page-section bg-primary text-white mb-0 " id="educationMain">
                    <div  className="container">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration="2">
                            <h2 className="page-section-heading text-center text-uppercase text-white">Education</h2>
                            <div className="divider-custom divider-light">
                                <div className="divider-custom-line"></div>
                                <div className="divider-custom-icon"><i className="fa fa-code fa-fw"></i></div>
                                <div className="divider-custom-line"></div>
                            </div>
                        </ScrollAnimation>

                        <EducationTimeline/>
                    </div>
                </section>
            </div>
        )
    }
}
