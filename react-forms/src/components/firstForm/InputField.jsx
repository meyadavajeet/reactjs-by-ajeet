import React, { useState } from 'react';
import './InputField.css';
const InputField = () => {
    const [name, setName] = useState("");
    const [fullname, setFullName] = useState();

    const InputEvent = (event) => {
        setName(event.target.value);
    }

    const onSubmit = () => {
        setFullName(name);
    }
    return (
        <>
            <div className="main_content">
                <p>Controlled Component : - In controlled Component, form data is handled by a React Component.
                The alternative is uncontrolled components , where form data is handled by the Dom iteself.
            </p>
                <h1>Hello {fullname}</h1>
                <input className="name" type="text"
                    placeholder="Enter your Name"
                    onChange={InputEvent}
                    value={name}
                />
                <button className="submit_btn" onClick={onSubmit}>Click Me <span role="img" aria-label="lock">🔐</span></button>
            </div>
        </>
    );
}

export default InputField;