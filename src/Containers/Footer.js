import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";
import FontAwesome from 'react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';

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
        return (
            <div>
                <footer className="footer text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 mb-5 mb-lg-0">
                                <h4 className="text-uppercase mb-4">Location</h4>
                                <p className="lead mb-0">Boston, MA 02120 </p>
                            </div>
                            <div className="col-lg-4 mb-5 mb-lg-0">
                                <h4 className="text-uppercase mb-4">Around the Web</h4>
                                <a className="btn btn-outline-light btn-social mx-1"
                                   href="mailto: dharmish21@gmail.com"><i
                                    className="fa fa-google fa-fw"></i></a>
                               <a
                                className="btn btn-outline-light btn-social mx-1"
                                href="https://www.linkedin.com/in/dharmish-shah" target="_blank"><i
                                className="fa fa-linkedin fa-fw"></i></a><a
                                className="btn btn-outline-light btn-social mx-1"
                                href="https://www.github.com/dharmishshah" target="_blank"><i
                                className="fa fa-github fa-fw"></i></a>

                            </div>
                            <div className="col-lg-4">
                                <h4 className="text-uppercase mb-4">Feel Free to reach out</h4>
                                <p className="lead mb-0"> Drop me an email for any queries/suggestions</p>
                            </div>
                        </div>
                    </div>
                </footer>
                <section className="copyright py-4 text-center text-white">
                    <div className="container"><small>Copyright © Dharmish Shah 2020</small></div>
                </section>
                <div className="scroll-to-top d-lg-none position-fixed">
                    <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i
                        className="fa fa-chevron-up"></i></a>
                </div>
            </div>

        )
    }
}