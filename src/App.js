import React from 'react';

import './App.css';
import {Component} from './Components/Component';
import {Navbar} from './Components/Navbar';
import {FetchData} from './Components/FetchData';


function App() {


  return (
    <div className="App">
      <Navbar />
      <Component name = "Billy"/>
      <FetchData /> 
   
    </div>
  );
}

export default App;
