import React from 'react';

// //here function name is same as the File name and always in the capital letter 
// function Header(){
//     //normal js function 
//     return <h1>Header tag is ready</h1>;
// }

// export default Header; //after exporting please import in app.js or where you want to use


//using const funtion 

// const Header = function(){
//     return <h3>Header tag using const keyword function</h3>;

// }

// export default Header;


//using arrow function

// const Header = () =>{
//     return <h2>Header tag using arrow function</h2>;
// }
// export default Header;

//export paticular constant 

export const Header =() =>{
    return <h2>Hello functional components now you have to change the import in app.js file because you are importing the paticular constant it should be from this import Header from './components/Header';  to import {Header} from './components/Header';</h2>
}

