import React from 'react';
import ReactDOM from 'react-dom';
import '../ComponentCSS/FetchData.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export class FetchData extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }


    componentDidMount() {

        fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=US", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
                "x-rapidapi-key": "c930bb584emshe095836889a8206p1676f8jsna197b0a8736e"
            }
        })
            .then(res => res.json())
            .then(json => {
                console.log(json.data.covid19Stats);
                this.setState({
                    isLoaded: true,
                    items: json.data.covid19Stats,
                })
            });
    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div> Loading... </div>
        }
        else {
            return (
                <div className="flexContainer">

                    {items.map((item, index) => (
                        <div className="cardDetails">
                            <Card className="cardGrow">
                                <Card.Body>

                                    <Card.Title>
                                        ({index + 1})  {item.province}
                                    </Card.Title>
                                    <Card.Text>
                                        <b>
                                            {item.confirmed}
                                        </b> 
                                        &nbsp;
                                           Confirmed Cases
                                    </Card.Text>
                                    <Card.Text>
                                        <b>
                                        {item.deaths} 
                                        </b>
                                        &nbsp;
                                      Confirmed Deaths
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}

                </div>
            )
        }
    }

}
