import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
    return (
        <>
            <div className="col-sm-4">
                <div className="card">
                    <img className="card-img-top img-fluid card-images" src={props.imgSrc} alt={props.imgSrc} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;