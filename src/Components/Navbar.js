import React from 'react';
import ReactDOM from 'react-dom';
import '../ComponentCSS/Navbar.css'

export class Navbar extends React.Component {
    render() {
        return (
            <div className="topnav">
  <a className="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
        )
    }
}