import React from 'react';
import axios from 'axios'
import * as consts from "../Constants";
import cookie from 'react-cookies'

let _singleton = Symbol();

const IP_ADDRESS = consts.IP_ADDRESS

class PortfolioService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new PortfolioService(_singleton);
        return this[_singleton]
    }


    findAllExperiences(){
        return fetch(IP_ADDRESS + '/portfolio/getExperiences')
            .then(response =>
                response.json());
    }

    findAllEducation(){
        return fetch(IP_ADDRESS + '/portfolio/getEducations')
            .then(response =>
                response.json());

    }

    findAllSkills(){
        return fetch(IP_ADDRESS + '/portfolio/getSkills')
            .then(response =>
                response.json());
    }

    findAllProjects(){
        return fetch(IP_ADDRESS + '/portfolio/getProjects')
            .then(response =>
                response.json());
    }


    findAllCertificates() {
        return fetch(IP_ADDRESS + '/portfolio/getCertificates')
            .then(response =>
                response.json());
    }

    findAllRecommendations() {
        return fetch(IP_ADDRESS + '/portfolio/getRecommendations')
            .then(response =>
                response.json());
    }

    findAllPersonalInfo() {
        return fetch(IP_ADDRESS + '/portfolio/getPersonalInfo')
            .then(response =>
                response.json());
    }



}
export default PortfolioService;
