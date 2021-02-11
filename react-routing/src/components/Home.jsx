import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = (props) => {
    return (
        <>
          {props.name}   
          <ul>
              <li><NavLink to="/" >Home</NavLink> </li>
              <li><NavLink to="/about" >Aout</NavLink> </li>
              <li><NavLink to="/contact" >Contact</NavLink> </li>
              <li><NavLink to="/services" >Services</NavLink> </li>
              <li><NavLink to="/user/aj/y" >User</NavLink> </li>
          </ul>
        </>
    )
}
export default Home;