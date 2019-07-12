import React from 'react';
import ReactDOM from 'react-dom';

export class Component extends React.Component {
    render() {
        return <p> Hello! My name is {this.props.name} </p>;
    }
}