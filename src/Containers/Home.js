import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";

import Header from "./Header";
import Portfolio from "./Portfolio";
import PortfolioDetail from "./PortfolioDetail";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import PortfolioModal from "./PortfolioModal";
import EducationRow from "../Components/EducationRow";
import Skills from "../Components/Skills";
import WorkTogether from "./WorkTogether";
import SkillsMain from "./SkillsMain";
import ExperiencesMain from "./ExperiencesMain";
import EducationMain from "./EducationMain";
import ProjectsMain from "./ProjectsMain";
import RecommendationMain from "./RecommendationMain";
import PublicationMain from "./CertificatesMain";

export default class HomePageContainer extends Component {
    constructor() {
        super();
        this.portfolioService = PortfolioService.instance;

        this.state = {
            experiences: [],
            education: [],
            skills: [],
            projects: [],
            loading : true
        };
    }

    componentDidMount() {
        this.findAllCertificates();
    }

    findAllCertificates() {
        this.portfolioService.findAllCertificates().then(certificates => {
            this.setState({loading: false})
        });
    }

    render() {
        const { isOpen, onClose, message } = this.props;
        return(

            <div className="default-homepage">

            </div>
        )
    }
}
