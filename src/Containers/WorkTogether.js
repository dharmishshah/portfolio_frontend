import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";

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
                <section className="page-section bg-primary text-white mb-0" id="about">
                    <div className="container">
                        <h2 className="page-section-heading text-center text-uppercase text-white">Let's Work Together </h2>
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fa fa-users fa-fw"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 ml-auto"><p className="lead aboutme-text">
                                I am actively looking for full time software engineering roles and
                                I would love to set a time to call you for a quick chat to discuss my experiences in more details.
                            </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
