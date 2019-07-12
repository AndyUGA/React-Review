import React from 'react';
import ReactDOM from 'react-dom';
import '../ComponentCSS/Navbar.css'

export class FetchData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items : [],
            isLoaded: false,
        }
    }


    componentDidMount() {
        
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded : true,
                items : json,
            })
        });
    }

    render() {

        var { isLoaded, items } = this.state;

        if(!isLoaded) {
            return <div> Loading... </div> 
        }
        else {
            return (
                    <ul> 
                        {items.map(item => (
                            <li key = {item.id}>
                                {item.name}
                            </li>
                        ))};
                    </ul>
                )
            }
        }
        
}