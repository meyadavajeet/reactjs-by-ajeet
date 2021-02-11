import React, { useState } from 'react';
import './TwoInputFields.css';
const TwoInputFields = () => {
    //hooks and state for the name
    const [name, setName] = useState("");
    const [fullname, setFullName] = useState();
    const InputEvent = (event) => {
          setName(event.target.value);
        }

    //hooks and state for the email
    const [email,setEmail] = useState('');
    const [finalEmail, SetFinalEmail] = useState();

    const InputEventEmail = (event) =>{
        setEmail(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setFullName(name);
        SetFinalEmail(email);
    }
    return (
        <>
            <div className="second_form_main">
                <form className="second_form" onSubmit={onSubmit}>
                    <h1>Hi,{`my name is ${fullname}  and  my email is ${finalEmail}`}</h1>
                    <input type="text"
                        placeholder="Enter your Name"
                        onChange={InputEvent}
                        value={name}
                    />
                    <input type="email"
                        placeholder="Enter your Email"
                        onChange={InputEventEmail}
                        value={email}
                    />
                    <button type="submit" >Click Me </button>
                </form>
            </div>
        </>
    );
}

export default TwoInputFields;