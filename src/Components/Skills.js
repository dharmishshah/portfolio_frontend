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
                            <Card style={{ width: '45rem' }}>
                                <CardBody >
                                    <CardTitle >
                                        Languages : {skill.fields.languages}
                                    </CardTitle>
                                    <CardTitle >
                                        Backend : {skill.fields.backend}
                                    </CardTitle>
                                    <CardTitle >
                                        Frontend : {skill.fields.frontend}
                                    </CardTitle>
                                    <CardTitle >
                                        Databases : {skill.fields.databases}
                                    </CardTitle>
                                    <CardTitle >
                                        Libraries : {skill.fields.libraries}
                                    </CardTitle>
                                    <CardTitle>
                                        Development : {skill.fields.development}
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </div>
                    )
                })}
            </div>
        )
    }
}
