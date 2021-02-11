import React from 'react';
import './Common.css';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-item-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justified-content-center flex-column">
                                    <h1>{props.title}<strong className="brand_name"> TechnicalAjeet </strong></h1>

                                    <h2 className="my-3">
                                        We are the team of awsome and talented developer, who develope website and web  application for the customers.
                                 </h2>
                                    <div className="mt-3">
                                        <NavLink exact to={props.visit} className="btn-get-started"> {props.getStartedBtnName} </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgSrc} className="img img-fluid animated" alt="right side banner" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Common;