import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Main from './Components/Test/Main';
import ProductList from './Components/Businness/ProductList';
import Navbar from './Components/Base/Navbar';

function App() {

  return (
    <div className="App">

      <Navbar />

      {/* <Main /> */}

      <ProductList />

    </div>
  );
}

export default App;
