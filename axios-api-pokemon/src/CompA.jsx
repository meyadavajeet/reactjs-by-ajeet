import React, { useEffect, useState } from 'react';
import axios from "axios";
import { CcomRouting } from './CcomRouting';

const CompA = () => {

    //create state  hooks
    const [num, setNum] = useState(1);
    const [name, setName] = useState();
    const [moves, setMoves] = useState();


    //always requrire a function so I am gona create fat arrow function inside it
    useEffect(() => {
        let url = `https://pokeapi.co/api/v2/pokemon/${num}`;
        async function getData() {
            const res = await axios.get(url);
            // console.log(res);
            // console.log(res.data.name);
            setName(res.data.name);
            setMoves(res.data.moves.length); //because moves is an array format so we use dot lenght method to get exact data
        }

        getData();
    })

    return (
        <>
            Welcome, React API Call to Get Pokemon JSON Data using Axios and useEffect in ReactJS in Hindi.
            Axios is a library that helps us make HTTP Requests to external resources
            In our React applications, we often need to retrieve data from external APIs so it can be displayed in our web pages.
            Axios is designed to handle HTTP requests and responses. Axios deals with responses using Promises, so it's streamlined and easy to use in our code. Axios uses methods like get() and post() that perform HTTP GET and POST requests for retrieving or creating resources.

            <br />
            <br />
            <br />
            <br />
            <h1>choosed value is  <span style={{ color: "red", }}>{num}</span></h1>
            <h1>Name is <span style={{ color: "red", }}> {name} </span></h1>
            <h1>and your moves   <span style={{ color: "red", }}>{moves} </span></h1>
            <select value={num} onChange={(event) => { setNum(event.target.value) }}>
                <option value="1" >1 </option>
                <option value="25" >25 </option>
                <option value="3" >3 </option>
                <option value="4" >4 </option>
                <option value="5" >5 </option>
            </select>

            <br />
            <br />
            <br />
            <a target="_blank" href=" https://www.freecodecamp.org/news/react-router-in-5-minutes/">React Router in 5 min</a>
             <br />
             <br />
             <br />
            <CcomRouting />
        </>
    );
}

export { CompA };
