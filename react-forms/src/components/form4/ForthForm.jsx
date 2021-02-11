import React, { useState } from 'react';

const FouthForm = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        contactNumber: "",
        password: ""

    });

    const InputEvent = (event) => {
        console.log(event.target.value);
        const { name, value } = event.target;

        // return {
        //     ...preValue,
        //     [name]: value,
        // }
        setData(
            (preValue) => {
                if (name === "name") {
                    return {
                        name: value,
                        email: preValue.email,
                        contactNumber: preValue.contactNumber,
                        password: preValue.password
                    }
                } else if (name === "email") {
                    return {
                        name: preValue.name,
                        email: value,
                        contactNumber: preValue.contactNumber,
                        password: preValue.password
                    }
                } else if (name === "contactNumber") {
                    return {
                        name: preValue.name,
                        email: preValue.email,
                        contactNumber: value,
                        password: preValue.password
                    }
                }
                else if (name === "password") {
                    return {
                        name: preValue.name,
                        email: preValue.email,
                        contactNumber: preValue.contactNumber,
                        password: value
                    }
                }
            })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        alert(`my name is  ${data.name}. my mobile number is ${data.contactNumber}. my email addres is ${data.email} and password is ${data.password}`);
    }

    return (
        <>
            <div className="second_form_main">
                <form onSubmit={onSubmit} className="second_form">
                    <p>{data.name}</p>
                    <p>{data.email}</p>
                    <p>{data.contactNumber}</p>
                    <h1>Fouth Form</h1>
                    <input type="text"
                        onChange={InputEvent}
                        value={data.name}
                        name="name"
                        placeholder="enter your name"
                    />
                    <input type="email"
                        onChange={InputEvent}
                        value={data.email}
                        name="email"
                        placeholder="Enter your email"
                    />
                    <input type="number"
                        onChange={InputEvent}
                        value={data.contactNumber}
                        name="contactNumber"
                        placeholder="Enter your Contact detail"
                    />
                    <input type="password"
                        onChange={InputEvent}
                        value={data.password}
                        name="password"
                        placeholder="Enter your password "
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default FouthForm;