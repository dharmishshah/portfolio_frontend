import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";

export default class PortofolioList extends Component {
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

    componentWillMount() {
        this.findAllEducation();
        this.findAllExperiences();
        this.findAllSkills();
        this.findAllProjects();

    }

    findAllEducation() {
        this.portfolioService.findAllEducation().then(education => {
            this.setState({education: education})
        });
    }

    findAllExperiences() {
        this.portfolioService.findAllExperiences().then(experiences => {
            this.setState({experiences: experiences})
        });
    }

    findAllSkills() {
        this.portfolioService.findAllSkills().then(skills => {
            this.setState({skills: skills})
        });
    }

    findAllProjects() {
        this.portfolioService.findAllProjects().then(projects => {
            this.setState({projects: projects})
        });
    }

    render() {
        return(
            <div>
                {this.state.education && this.state.education.map(education => {
                    return(
                        <p>{education.fields.name}</p>
                    )
                })}

                {this.state.experiences && this.state.experiences.map(experiences => {
                    return(
                        <p>{experiences.fields.company}</p>
                    )
                })}

                {this.state.skills && this.state.skills.map(skills => {
                    return(
                        <p>{skills.fields.name}</p>
                    )
                })}

                {this.state.projects && this.state.projects.map(projects => {
                    return(
                        <p>{projects.fields.name}</p>
                    )
                })}
            </div>
        )
    }
}