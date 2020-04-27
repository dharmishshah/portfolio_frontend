import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";

import '../css/styles.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

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
                {this.state.recommendations.map(recommendation => {
                    return (
                        <div className="text-left" style={{ paddingBottom: 10 }}>
                            <Card style={{ width: '100%' }}>
                                <CardBody >
                                    <CardTitle >
                                        {recommendation.fields.name}
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted">{recommendation.fields.role} , {recommendation.fields.organisation}
                                        <p className="text-align">{recommendation.fields.date}</p>
                                    </CardSubtitle>
                                    <CardText className="description-font">
                                        {recommendation.fields.description}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    )
                })}
            </div>
        )
    }
}
