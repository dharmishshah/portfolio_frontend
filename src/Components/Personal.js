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
            experiences: [],
            education: [],
            skills: [],
            projects: []
        };
    }

    componentDidMount() {
        this.findAllEducation();
    }

    findAllEducation() {
        this.portfolioService.findAllEducation().then(education => {
            this.setState({education: education});
        });
    }



    render() {
        return (
            <div>
                <div className="text-left" style={{ paddingBottom: 10 }}>
                    <Card style={{ width: '45rem' }}>
                        <CardBody >
                            <CardTitle >
                                Interests
                            </CardTitle>
                            <CardText>
                                I love exploring new technologies in my free time.
                            </CardText>
                            <CardText>
                                I am big soccer fan. #CHELSEAFC
                            </CardText>
                            <CardText>
                                I enjoy music and dancing.
                            </CardText>
                            <CardText>
                                I am a big fan of Bollywood.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>

                <div className="text-left" style={{ paddingBottom: 10 }}>
                    <Card style={{ width: '45rem' }}>
                        <CardBody >
                            <CardTitle >
                                Honors
                            </CardTitle>
                            <CardText>
                               Ace Achiever of the Year 2015-2016, Justdial Limited
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}
