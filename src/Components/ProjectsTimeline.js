import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";

import '../css/styles.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
import dateFormat from 'dateformat'

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
        //this.findAllProjects();
    }

    componentDidMount() {
        this.findAllProjects();
    }

    componentWillMount() {
        //this.findAllProjects();
    }

    findAllProjects() {
        this.portfolioService.findAllProjects().then(projects => {
            this.setState({projects: projects})
        });
    }



    render() {
        return (
            <div>

                {/*<VerticalTimeline className="vertical-timeline-custom-line">*/}
                {/*{this.state.projects.map(project => {*/}
                {/*    return (*/}
                {/*            <VerticalTimelineElement*/}
                {/*                className="vertical-timeline-element--work"*/}
                {/*                contentStyle={{ background: '#2c3e50' , color: '#fff' }}*/}
                {/*                contentArrowStyle={{ borderRight: '7px solid  #2c3e50' }}*/}
                {/*                date={dateFormat(project.fields.dateFormat, "mmmm, yyyy")}*/}
                {/*                dateClassName="dateContent"*/}
                {/*                iconStyle={{ background: '#2c3e50', color: '#fff' }}*/}
                {/*            >*/}
                {/*                <h3 className="vertical-timeline-element-title">{project.fields.name}</h3>*/}
                {/*                /!*<h4 className="vertical-timeline-element-subtitle">{project.fields.city},*!/*/}
                {/*                /!*    {project.fields.state_abbr}</h4>*!/*/}

                {/*                    {project.fields.description.split("\n").map(descrip => {*/}
                {/*                        return (*/}
                {/*                            <li className="description-font">*/}
                {/*                                {descrip}*/}
                {/*                            </li>*/}
                {/*                        )*/}
                {/*                    })}*/}
                {/*            </VerticalTimelineElement>*/}
                {/*    )*/}
                {/*})}*/}
                {/*</VerticalTimeline>*/}
            </div>
        )
    }
}
