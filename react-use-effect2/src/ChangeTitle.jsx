import React, { useEffect, useState } from 'react';
import './App.css';

const ChnageTitle = () => {
    const [num, setNum] = useState(0);

    useEffect(() => {
      document.title = `you clicked change title  button ${num} times`;
    }, [num]
    )

    return (
        <>
            <button onClick={() => { setNum(num + 1) }}>Change Title {num}</button>

        </>
    );
}

export default ChnageTitle;
