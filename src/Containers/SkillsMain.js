import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";
import '../css/styles.css'

import PortfolioModal from "./PortfolioModal";

import education_ai from "../images/effects/education.gif"
import experience_ai from "../images/effects/experience.gif"
import skills_ai from "../images/effects/skills.gif"
import projects_ai from "../images/effects/projects.gif"
import pub_ai from "../images/effects/publications.gif"
import personal_ai from "../images/effects/personal.gif"
import recommendation from "../images/effects/recommendations.gif"
import publication from "../images/effects/publication.gif"

export default class PortfolioDetail extends Component {
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

    render() {
        return (
            <section className="page-section portfolio" id="portfolioDetail">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Skills</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fa fa-info-circle fa-fw"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                </div>
            </section>
        )
    }
}
