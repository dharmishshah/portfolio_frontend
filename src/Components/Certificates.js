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
            certificates: [],

        };
    }

    componentDidMount() {
        this.findAllCertificates();
    }

    findAllCertificates() {
        this.portfolioService.findAllCertificates().then(certificates => {
            this.setState({certificates: certificates})
        });
    }



    render() {
        return (
            <div>
                {this.state.certificates.map(certificate => {
                    return (
                        <div  style={{ paddingBottom: 10 }}>
                            <Card style={{ width: '100%' }}>
                                <CardBody className="text-left">
                                    <CardTitle >
                                        {certificate.fields.name}
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted">{certificate.fields.organisation}
                                        <p className="text-align">{certificate.fields.date}</p>
                                    </CardSubtitle>
                                    <CardText className="description-font">
                                        {certificate.fields.description}
                                    </CardText>
                                </CardBody>
                                <a className="align-items-center details-button"  href = {certificate.fields.link} target="_blank" >
                                    <Button > View Certificate
                                    </Button>
                                </a>
                            </Card>
                        </div>
                    )
                })}
            </div>
        )
    }
}
