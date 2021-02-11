import React, { useEffect, useState } from 'react';
import './App.css';
import ChnageTitle from './ChangeTitle';

function App() {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  //useEffect always need a function 
  // when we change in components then render method executes and whenever render method executes useEffect() methods automatically called;
  //if you want to execute the useEffect method once only while page refresh you have to pass empty array [] like that by giving comma after clossing curly bracket
  //if you want to execute useEffect() on button click please pass this state on this empty array [num] -> it executes when the first button clicked
  useEffect(() => {
    alert('i am clicked');
    console.log('first button clicked');
  }, [num]
  )

  return (
    <>
      <button onClick={() => { setNum(num + 1) }}>click to  Increment {num}</button>


      <button onClick={() => { setNums(nums + 1) }}>Click me {nums}</button>

      <br/>
      <br/>
      <br/>
      <ChnageTitle/>
    </>
  );
}

export default App;
