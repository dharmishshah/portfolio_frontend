import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";
import ScrollAnimation from 'react-animate-on-scroll';
import RecommendationTimeline from "../Components/RecommendationTimeline";

export default class RecommendationMain extends Component {
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
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration="2">
                            <h2 className="page-section-heading text-center text-uppercase text-white">Recommendation</h2>


                            <div className="divider-custom divider-light">
                                <div className="divider-custom-line"></div>
                                <div className="divider-custom-icon"><i className="fa fa-comments fa-fw"></i></div>
                                <div className="divider-custom-line"></div>
                            </div>
                        </ScrollAnimation>
                        <RecommendationTimeline />
                    </div>
                </section>
            </div>
        )
    }
}
