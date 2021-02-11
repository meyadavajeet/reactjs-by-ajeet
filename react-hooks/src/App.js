import React from 'react';
import './App.css';
import GetCount from './components/GetCount';
import GetTime from './components/GetTime';
import DigitalClock from './components/DigitalClock';
import EventsBackGround from './components/Events/EventsBackGround';
function App() {

  return (
    <>
      <GetCount />
      <hr />
      <GetTime />
      <hr />
      <DigitalClock />
      <hr />
      <EventsBackGround />
    </>
  );
}

export default App;
