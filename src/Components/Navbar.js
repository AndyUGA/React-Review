import React from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css'

export class Navbar extends React.Component {
    render() {
        return (
            <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
        )
    }
}