import React, { useState } from 'react';
function GetCount() {
    // const state = useState();
    // console.log(state);

    // cont[assign_value,updated_value] = useState(value_initial_data)
    const [count, setCount] = useState(0); //array destructuring

    const IncNumber = () => {
        setCount(count + 1);
        // console.log('increment number working ' + count++);
    }

    return (
        <>
            <div className="main_content">
                <h1><strong><u>Uses of React Hooks</u></strong></h1>
                <h1>{count}</h1>
                <button type="button" onClick={IncNumber} >Click</button>
            </div>
        </>
    );
}

export default GetCount;
