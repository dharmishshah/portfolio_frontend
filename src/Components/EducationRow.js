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
                {this.state.education.map(educate => {
                return (
                    <div className="text-left" style={{ paddingBottom: 10 }}>
                        <Card style={{ width: '100%' }}>
                        <CardBody >
                            <CardTitle >
                                {educate.fields.name}, {educate.fields.city}
                            </CardTitle>
                                <CardSubtitle className="mb-2 text-muted">{educate.fields.degree} in {educate.fields.major}
                                    <p className="text-align">{educate.fields.fromYear} - {educate.fields.toYear}</p>
                                </CardSubtitle>
                            <CardText className="description-font">
                                GPA : {educate.fields.gpa}
                            </CardText>
                            <CardText className="description-font">
                                Courses : {educate.fields.courses}
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
