import React, {Component, createRef} from 'react';
import PortfolioService from "../Services/PortfolioServices";
import cookie from "react-cookies";


export default class HomePageContainer extends Component {
    constructor() {
        super();
        this.portfolioService = PortfolioService.instance;
        this.name = createRef();
        this.organisation = createRef();
        this.email = createRef();
        this.message = createRef();

        this.state = {
            status : ""
        };
    }

    componentWillMount() {
        // this.sendEmail();
    }

    sendEmail(){
        var name = this.name.current.value;
        var organisation = this.organisation.current.value;
        var email = this.email.current.value;
        var message = this.message.current.value;
        console.log("send email" + name);
        this.portfolioService.sendEmail(name, organisation, email, message).then(s => {
            console.log("---" + s)
            this.setState({status : "Success"})
            this.name.current.value = "";
            this.organisation.current.value = "";
            this.email.current.value = "";
            this.message.current.value = "";
        });
    }

    render() {
        return (
            <div>
                <section className="page-section" id="contact">
                    <div className="container">
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact
                            Me</h2>
                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fa fa-id-card fa-fw"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                               <form id="contactForm" name="sentMessage" noValidate="novalidate">
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0">
                                            <label>Name</label><input className="form-control" id="name" type="text"
                                                                      placeholder="Name" required="required" ref={this.name}
                                                                      data-validation-required-message="Please enter your name."
                                        />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0">
                                            <label>Email Address</label><input className="form-control" id="email"
                                                                               type="email" placeholder="Email Address"
                                                                               required="required" ref={this.email}
                                                                               data-validation-required-message="Please enter your email address."/>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0">
                                            <label>Organisation</label><input className="form-control" id="phone"
                                                                              type="text" placeholder="Company"
                                                                              required="required" ref={this.organisation}
                                                                              data-validation-required-message="Please enter your organisation."/>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0">
                                            <label>Message</label><textarea className="form-control" id="message"
                                                                            rows="5" placeholder="Message"
                                                                            required="required" ref={this.message}
                                                                            data-validation-required-message="Please enter a message."></textarea>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <br/>
                                    <div id="success"></div>
                                    <div className="form-group">
                                        <button className="btn btn-primary btn-sendmail" id="sendMessageButton"
                                                onClick={() => this.sendEmail()}
                                                type="submit">Let's connect
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
