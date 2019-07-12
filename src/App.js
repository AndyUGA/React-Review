import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Component} from './Components/Component';
import {Navbar} from './Components/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Component name = "Billy"/>

      <Navbar />
    </div>
  );
}

export default App;
