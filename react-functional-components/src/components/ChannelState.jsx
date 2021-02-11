import React from 'react';

class ChannelState extends React.Component {
    //defining state with constructure and use super keyword to get access of React.Component state
    constructor() {
        super();
        this.state = {
            msg: 'Welcome to MyBuddyAjeet Youtube Channel.'
        }
    }

    //creating subscribe function in this there is a state which is called Onclick Function //function is created in es6 using arrow operator
    subscribe(){
        this.setState({
            msg: 'Thanks for Subscribing Our Channel'
        });
    }

    render() {
        return (
            <div>
                <h1> {/* calling state  */}
                    {this.state.msg}
                </h1>
                <button onClick={()=>{this.subscribe()}}>Subscribe Here </button>
            </div>
        )
    }
}

export default ChannelState;