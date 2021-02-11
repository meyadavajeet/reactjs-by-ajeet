import React from 'react';
import './Home.css';
import HomePageImage from "../src/images/react.svg";
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common
                title="Grow Your Business with"
                getStartedBtnName="Get Started"
                imgSrc={HomePageImage}
                visit="/service"
            />
        </>
    )

}

export default Home;