import React, { useState } from 'react';

const FifthForm = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        contactNumber: "",
        password: "",
        feedback: ""

    });

    const InputEvent = (event) => {
        console.log(event.target.value);
        const { name, value } = event.target;

        setData(
            (preValue) => {
                return {
                    ...preValue, //spread operator 
                    [name]: value,

                }
            })

    }

    const onSubmit = (e) => {
        e.preventDefault();
        alert(`my name is  ${data.name}. my mobile number is ${data.contactNumber}. my email addres is ${data.email} and password is ${data.password} and you want to say ${data.feedback}`);
    }

    return (
        <>
            <div className="second_form_main">
                <form onSubmit={onSubmit} className="second_form">
                    <p>{data.name}</p>
                    <p>{data.email}</p>
                    <p>{data.contactNumber}</p>
                    <p>{data.password}</p>
                    <p>{data.feedback}</p>
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
                    <textarea type="password"
                        onChange={InputEvent}
                        value={data.feedback}
                        name="feedback"
                        placeholder="Feedback"
                        cols="55"
                        rows="10"
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default FifthForm;