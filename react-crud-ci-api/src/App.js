import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

function App() {
  return (
    <>
      <Navbar />
      <br/>
      <AddProduct/>
      <ProductList />
    </>
  );
}

export default App;
