import React, { useState } from 'react';

const DigitalClock = () => {


    let newTime = new Date().toLocaleTimeString();
    const [ctime, setNewTime] = useState(newTime);

    setTimeout(() => {
        newTime = new Date().toLocaleTimeString();
         setNewTime(newTime);
    }, 1000); 
    return (
        <>
            <div className="main_content">
                <h1>DigitalClock</h1>
                <h1>{ctime}  </h1>
            </div>
        </>
    );

}

export default DigitalClock;