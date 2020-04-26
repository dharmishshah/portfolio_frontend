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
        this.findAllSkills();
    }

    findAllSkills() {
        this.portfolioService.findAllSkills().then(skills => {
            this.setState({skills: skills})
        });
    }



    render() {
        return (
            <div>
                {this.state.skills.map(skill => {
                    return (
                        <div className="text-left" style={{ paddingBottom: 10 }}>
                            <Card style={{ width: '52rem' }}>
                                <CardBody >
                                    <CardText >
                                        Languages : {skill.fields.languages}
                                    </CardText>
                                    <CardText >
                                        Backend : {skill.fields.backend}
                                    </CardText>
                                    <CardText >
                                        Frontend : {skill.fields.frontend}
                                    </CardText>
                                    <CardText >
                                        Databases : {skill.fields.databases}
                                    </CardText>
                                    <CardText >
                                        Libraries : {skill.fields.libraries}
                                    </CardText>
                                    <CardText>
                                        Development : {skill.fields.development}
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
