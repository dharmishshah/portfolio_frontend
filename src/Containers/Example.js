import React, { Component } from 'react';
import VizSensor from 'react-visibility-sensor'
import hibernate from "../images/skills/hibernate.png";

export default class VizAwareImg extends Component {
    state = {
        imgViz: false
    }
    render() {
        return (
            <VizSensor
                onChange={(isVisible) => {
                    this.setState({imgViz: isVisible})
                }}
            >

                <img
                    src={hibernate}
                    style={{
                        width: 300,
                        height: 300,
                        opacity: this.state.imgViz ? 1 : 0.25,
                        transition: 'opacity 500ms linear'
                    }}
                />
            </VizSensor>
        );
    }
}
