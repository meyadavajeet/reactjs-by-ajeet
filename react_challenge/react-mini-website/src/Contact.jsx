import React, { useState } from 'react';

const Contact = () => {

    //use of state
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    });

    //hooks
    const InputEvent = (event) => {
        const { name, value } = event.target;

        //inlineFunction
        setData((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`my name is  ${data.fullname}. my mobile number is ${data.phone}. my email addres is ${data.email}. and this is what I want to say ${data.msg}`);
    }


    return (
        <>
            <div className="container m-5">
                <div className="row">
                    <div className="mb-10  mx-auto">
                        <h1 className="text-center">Contact Us</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mx-auto col-sm-12">
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    className="form-control"
                                    placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    className="form-control"
                                    placeholder="Enter your Email" />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="number"
                                    min="0"
                                    className="form-control"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Enter your mobile " />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    className="form-control"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}
                                    rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-outline-primary">
                                    Submit
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )

}

export default Contact;