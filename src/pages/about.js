import React, { Component } from 'react';
// import AboutOtherContent from '../components/aboutUs/AboutOtherContent'
import AboutUs from '../components/aboutUs/AboutUs';
import OurValue from '../components/aboutUs/OurValue';
import AboutOtherContent from '../components/aboutUs/AboutOtherContent';

export class About extends Component {
    render() {
        return (
            <div>
               <AboutUs/>
               <OurValue/>
               <AboutOtherContent/>
            </div>
        )
    }
}

export default About
