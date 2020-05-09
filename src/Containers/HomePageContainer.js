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

export default class HomePageContainer extends Component {
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
        const { isOpen, onClose, message } = this.props;
        return(
            <div className="default-homepage">

                <Header />
                <Portfolio />
                <PortfolioDetail/>
                <About />
                <SkillsMain />
                <WorkTogether />
                <Contact />
                <Footer />

                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>

                <script src="public/mail/jqBootstrapValidation.js"></script>

                <script src="public/mail/contact_me.js"></script>
                <script src="scripts/scripts.js"></script>
            </div>
        )
    }
}