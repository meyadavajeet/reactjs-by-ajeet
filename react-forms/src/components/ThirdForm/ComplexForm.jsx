import React, { useState } from 'react';

const ComplexForm = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        contactNumber: ""

    });

    const InputEvent = (event) => {
        console.log(event.target.value);
        const name = event.target.name;
        const value = event.target.value;
        // instead of these two above line you can use below one line
        // const { name, value } = event.target;

        setData(
            (preValue) => {
                return {
                    ...preValue,
                    [name]: value,
                }
            })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        alert(`my name is  ${data.name}. my mobile number is ${data.contactNumber}. my email addres is ${data.email}`);
    }

    return (
        <>
            <div className="second_form_main">
                <form onSubmit={onSubmit} className="second_form">
                    <p>{data.name}</p>
                    <p>{data.email}</p>
                    <p>{data.contactNumber}</p>
                    <h1>Complex Form</h1>
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
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default ComplexForm;