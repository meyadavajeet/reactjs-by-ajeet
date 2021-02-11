import React from 'react';
// import logo from './logo.svg'; //for import logo file
import './App.css';

import './components/Header'; //import header component to use in app.js //video7 //now use header tag element in appclassname
// import Header from './components/Header'; // importing whole components file
import {Header } from './components/Header' ; //importing particular components

import Footer from './components/Footer';

import CHeader from './components/CHeader'; //import header class component

//import propsWithHeader Component
import {PropsWithHeaderComponent} from './components/PropsWithHeaderComponent'; //here PropsWithHeaderComponent is a particular compnent so while importing component we should used in curlibrases


//importing propsWithClassComponents
import PropsWithClassComponent from './components/PropsWithClassComponent';

import ChannelState from './components/ChannelState';

// this is the default function when we create project
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// video 5 start
// with jsx(javaScript and xml)
// const name=<span>Hello React Application</span>;

// // without jsx by using react syntax
// // it takes three arguments (tagname,clasname,text which you want to put)

// const newElement = React.createElement('h2',{className:'newElement'},'h2 tag here');

// // create function in react without array function

// const test = function(){
//   alert ("hello test function");
// }

// // create function in react with array function // this is also called functional componenet in react js
// const newTest = () =>{
//   alert ("hello new test functio using the array function in react which is the function of ecma script");
// }

// const age = (e) =>{
//   if(age<18){
//     return <span>you are not elegiable</span>;
//   }else{
//     return <span>You are  elegiable</span>;
//   }
// }

// const  testNewButton = <button onClick={newTest}>Click here for the new text button</button>
// const testButton = <button onClick={test}>Click Here </button>

// function App(){
//   return(
//     <div className="App">
//       <h1>Hello MyBuddyAjeet, {name}</h1>
//       {newElement}
//       {testButton}
//       {testNewButton}
//       <br />
//       {age(19)}
//     </div>
//   );
// }
//video 5 ends
//video 6 start class componenet in react js

// class App extends React.Component{
//   render(){
//     return <h1>Hello MyBuddyAjeet, this is the class componenet in react js</h1>;
//   }
// }
// video 6 end

//video 7

function App(){
  return(
    <div className="App">
      <h1>Hello now we gona learn functional componenet by using react</h1>
      <Header />
      <CHeader/>

      {/* add multiple tag like tag itself and a child tag . Props with reusing components multiple times */ }
          <PropsWithHeaderComponent name="Ajeet" last="Yadav">
            <p>He is a good boy</p>
          </PropsWithHeaderComponent>
      <PropsWithHeaderComponent name="Rajesh" />
        <a href="www.google.com">Click Here to go on Google</a>
      <PropsWithHeaderComponent last="Govind" />

      <PropsWithClassComponent name ="Ravindra" last="Mahto"></PropsWithClassComponent>

      <ChannelState/>
      <Footer />
    </div>
  )
}

export default App;
