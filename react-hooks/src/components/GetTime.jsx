import React, { useState } from 'react';

const GetTime = () => {


    let newTime = new Date().toLocaleTimeString();
    const [ctime, setNewTime] = useState(newTime);

    const getLatestTime = () => {
        newTime = new Date().toLocaleTimeString();
        setNewTime(newTime);
    }
    return (
        <>
            <div className="main_content">
                <h1>Click to Get System Time</h1>
                <h1>{ctime}  </h1>
                <button type="button" onClick={getLatestTime}>Get Updated Time </button>
            </div>
        </>
    );

}

export default GetTime;