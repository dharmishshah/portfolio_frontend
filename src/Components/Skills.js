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
                            <Card style={{ width: '100%' }}>
                                <CardBody >
                                    <CardText >
                                        <b> Languages </b> : {skill.fields.languages}
                                    </CardText>
                                    <CardText >
                                        <b> Backend </b> : {skill.fields.backend}
                                    </CardText>
                                    <CardText >
                                        <b> Frontend </b>: {skill.fields.frontend}
                                    </CardText>
                                    <CardText >
                                        <b> Databases </b>: {skill.fields.databases}
                                    </CardText>
                                    <CardText >
                                        <b> Libraries </b>: {skill.fields.libraries}
                                    </CardText>
                                    <CardText>
                                        <b> Development </b>: {skill.fields.development}
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
