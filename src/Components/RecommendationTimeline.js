import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";

import '../css/styles.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import ScrollAnimation from "react-animate-on-scroll";

export default class EducationRow extends Component {

    constructor() {
        super();
        this.portfolioService = PortfolioService.instance;

        this.state = {
            recommendations: [],

        };
    }

    componentDidMount() {
        this.findAllRecommendations();
    }

    findAllRecommendations() {
        this.portfolioService.findAllRecommendations().then(recommendations => {
            this.setState({recommendations: recommendations})
        });
    }



    render() {
        return (
            <div>
                {window.innerWidth > 450 &&  <div>
                    {this.state.recommendations.map((recommendation, index) => {
                        return (

                            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration="2">
                                {index % 2 === 0 &&
                                    <div className="row">
                                        <div className="col-md-6 how-img">
                                            <h4>{recommendation.fields.name}</h4>
                                            <h5>{recommendation.fields.role + ", " + recommendation.fields.organisation}</h5>
                                        </div>
                                        <div className="col-md-6 lead aboutme-text recommendations">
                                            <p><sup className="left"><i className=" fa fa-quote-left "/></sup>{recommendation.fields.description}
                                                <sup className="right"><i className=" fa fa-quote-right "/></sup></p>
                                        </div>
                                    </div>
                                    }

                                {index % 2 === 1 &&
                                <div className="row recommendationMargin">

                                    <div className="col-md-6 lead aboutme-text recommendations">
                                        <p><sup className="left"><i className=" fa fa-quote-left "/></sup>{recommendation.fields.description}
                                            <sup className="right"><i className=" fa fa-quote-right "/></sup></p>
                                    </div>
                                    <div className="col-md-6 how-img">
                                        <h4>{recommendation.fields.name}</h4>
                                        <h5>{recommendation.fields.role + ", " + recommendation.fields.organisation}</h5>
                                    </div>
                                </div>
                                }

                    </ScrollAnimation>
                        )
                    })}
                </div>}


                {window.innerWidth > 200 && window.innerWidth < 425 && <div>
            {this.state.recommendations.map((recommendation, index) => {
                    return (

                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration="2">
                            <div className="row recommendationMargin">
                                <div className="col-md-6 lead aboutme-text">
                                    <p>{"\"" + recommendation.fields.description + "\""}</p>
                                </div>
                                <div className="col-md-6 how-img">
                                    <h4>{recommendation.fields.name}</h4>
                                    <h5>{recommendation.fields.role + ", " + recommendation.fields.organisation}</h5>
                                </div>
                            </div>
                        </ScrollAnimation>
                    )
                })}
            </div>}
        </div>
        )
    }
}
