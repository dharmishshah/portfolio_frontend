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
        this.findAllProjects();
    }

    findAllProjects() {
        this.portfolioService.findAllProjects().then(projects => {
            this.setState({projects: projects})
        });
    }



    render() {
        return (
            <div>
                {this.state.projects.map(project => {
                    return (
                        <div style={{ paddingBottom: 10 }}>
                            <Card style={{ width: '52rem' }}>
                                <CardBody className="text-left"  >
                                    <CardTitle >
                                        {project.fields.name}, {project.fields.city}
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted">{project.fields.date}
                                    </CardSubtitle>
                                    <CardText>
                                        Tech Stack : {project.fields.techStack}
                                    </CardText>
                                    {project.fields.description && project.fields.description.split("\n").map(descrip => {
                                        return (
                                            <li className="description-font">
                                                {descrip}
                                            </li>
                                        )
                                    })}certificate
                                </CardBody>
                                {project.fields.link && <a className="align-items-center details-button"
                                                           href = {project.fields.link} target="_blank" >
                                    <Button > View Project
                                    </Button>
                                </a>}
                            </Card>
                        </div>
                    )
                })}
            </div>
        )
    }
}
