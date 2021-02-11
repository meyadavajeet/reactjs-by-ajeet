import React from 'react';
import AboutPageImage from "../src/images/react.svg";
import Common from './Common';

const About = () => {
    return (
        <>
            <Common
                title="Welcome to about Page, stay connected with "
                getStartedBtnName="Get Started"
                imgSrc={AboutPageImage}
                visit="/contact"
            />
        </>
    )

}

export default About;