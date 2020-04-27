import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";

import '../css/styles.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class ExperienceRow extends Component {

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
        this.findAllExperiences();
    }

    findAllExperiences() {
        this.portfolioService.findAllExperiences().then(experiences => {
            this.setState({experiences: experiences})
        });
    }



    render() {
        return (
            <div>
                {this.state.experiences.map(experience => {
                    return (
                        <div style={{ paddingBottom: 10 }}>
                            <Card style={{ width: '100%' }}>
                                <CardBody className="text-left">
                                    <CardTitle >
                                        {experience.fields.company}, {experience.fields.city}
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted">{experience.fields.role}
                                        <p className="text-align">{experience.fields.fromYear} - {experience.fields.toYear}</p>
                                    </CardSubtitle>
                                    <CardText>
                                        TechStack : {experience.fields.techStack}
                                    </CardText>
                                    {experience.fields.description.split("\n").map(descrip => {
                                        return (
                                            <li className="description-font">
                                                {descrip}
                                            </li>
                                        )
                                    })}


                                </CardBody>
                            </Card>
                        </div>
                    )
                })}
            </div>
        )
    }
}
