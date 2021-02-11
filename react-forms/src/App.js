import React from 'react';
import './App.css';
import InputField from './components/firstForm/InputField';
import FouthForm from './components/form4/ForthForm';
import FifthForm from './components/form5/FifthForm';
import TwoInputFields from './components/SecondForm/TwoInputFields';
import ComplexForm from './components/ThirdForm/ComplexForm';

function App() {
  return (
    <>
      <InputField />
      <br />
      <hr />
      <TwoInputFields />
      <br />
      <hr />
      <ComplexForm />
      <br />
      <hr />
      <FouthForm />
      <br />
      <hr />
      <FifthForm />
    </>
  );
}

export default App;
