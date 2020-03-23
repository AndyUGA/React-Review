import React from 'react';
import ReactDOM from 'react-dom';

export class Component extends React.Component {
    render() {
        return <p> Hello! My name is {this.props.name} and I like to play {this.props.activity} </p>;
    }
}