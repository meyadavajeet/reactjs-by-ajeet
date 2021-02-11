import React, { useState } from 'react';
import '../../../src/components/Events/EventBackGround.css';

const EventsBackGround = () => {
    const purple = "#8244ad";
    const [bg, setBg] = useState(purple);
    const[name,setName] = useState('Click to change Backgound color 🥇')
    const ChangeBg = () => {
        let red = "red";
        setBg(red)
        setName('Double click to see another effect 🥈');
    }
    const backToNormal = () => {
        let green = "green";
        setBg(green);
        setName('Click to change Backgound color 🥇')
    }

    return (
        <>
            <div className="event_main_content" style={{ backgroundColor: bg }}>
                <button className="background_button" onClick={ChangeBg} onDoubleClick={backToNormal} >{name}</button>
            </div>
        </>
    );
}

export default EventsBackGround;