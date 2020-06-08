import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";

import '../css/styles.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


import { Timeline, Event } from "react-timeline-scribble";
import ScrollAnimation from "react-animate-on-scroll";

export default class EducationTimeline extends Component {

    constructor() {
        super();
        this.portfolioService = PortfolioService.instance;

        this.state = {
            experiences: [],
            education: [],
            skills: [],
            projects: [],
            value: 0,
            previous: 0
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
                <Timeline>
                    {this.state.education.map(educate => {
                        return (
                            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration="2">
                                <Event interval={educate.fields.fromYear + " - " + educate.fields.toYear}
                                       title={educate.fields.name + ", " + educate.fields.city } subtitle={educate.fields.degree + " in " + educate.fields.major}
                                >
                                    Related Courses : {educate.fields.courses}
                                </Event>
                            </ScrollAnimation>
                            )})}
                </Timeline>
            </div>
        )
    }
}
