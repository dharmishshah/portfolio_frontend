import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";

import '../css/styles.css';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

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
                <Timeline lineColor={'#ddd'}>
                {this.state.experiences.map(experience => {
                    return (
                                <TimelineItem
                                    key="001"
                                    dateText={experience.fields.fromYear + " - " + experience.fields.toYear}
                                    style={{ color: '#e86971' }}
                                >
                                    <h3>{experience.fields.role} </h3>
                                    <h4>{experience.fields.company}, {experience.fields.city}</h4>
                                        {experience.fields.description.split("\n").map(descrip => {
                                            return (
                                                <li className="description-font">
                                                    {descrip}
                                                </li>
                                            )
                                        })}

                                </TimelineItem>
                    )
                })}
                </Timeline>
            </div>
        )
    }
}
