import React, { Component } from 'react';
import PortfolioService from "../Services/PortfolioServices";
import '../css/styles.css'

import ScrollAnimation from "react-animate-on-scroll";

import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
        "mdbreact";
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";



export default class CertificateCarousel extends Component {
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

            <div className="row align-items-center" id="certificates">
                <MDBContainer className="col-md-8">
                    <MDBCarousel
                        activeItem={1}
                        length={this.state.certificates.length}
                        showControls={true}
                        showIndicators={true}
                        className="z-depth-1"
                        testimonial={true}

                    >
                        <MDBCarouselInner>
                                {this.state.certificates.map((certificate,index) => {
                                    return (
                                        <MDBCarouselItem itemId={index + 1}>
                                            <MDBView>
                                                <img
                                                    className="d-block w-100"
                                                    src={certificate.fields.link}
                                                    alt="First slide"
                                                />
                                                <MDBMask overlay="black-light" />
                                            </MDBView>
                                            {/*<MDBCarouselCaption>*/}
                                            {/*    <h3 className="dateContent h3-responsive">{certificate.fields.name}</h3>*/}
                                            {/*    <p className="dateContent" >{certificate.fields.organisation}</p>*/}
                                            {/*</MDBCarouselCaption>*/}
                                        </MDBCarouselItem>
                                    )
                                })}
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBContainer>
            </div>
        )
    }
}
