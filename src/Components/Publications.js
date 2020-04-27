import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";

import '../css/styles.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class PublicationRow extends Component {

    constructor() {
        super();
        this.portfolioService = PortfolioService.instance;

        this.state = {
            publications: [],

        };
    }

    componentDidMount() {
        this.findAllPublications();
    }

    findAllPublications() {
        this.portfolioService.findAllPublications().then(publications => {
            this.setState({publications: publications})
        });
    }



    render() {
        return (
            <div>
                {this.state.publications.map(publication => {
                    return (
                        <div  style={{ paddingBottom: 10 }}>
                            <Card style={{ width: '100%' }}>
                                <CardBody className="text-left" >
                                    <CardTitle >
                                        {publication.fields.name}
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted">{publication.fields.organisation}
                                    <p className="text-align">{publication.fields.date}</p>
                                    </CardSubtitle>
                                    <CardText className="description-font">
                                        {publication.fields.description}
                                    </CardText>
                                </CardBody>
                                {publication.fields.link && <a className="align-items-center details-button"
                                                               href = {publication.fields.link} target="_blank" >
                                    <Button > View Paper
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
