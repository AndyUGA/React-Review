import React from 'react';
import ReactDOM from 'react-dom';
import '../ComponentCSS/FetchData.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export class FetchData extends React.Component {
    componentDidMount() {
        document.title = 'Coronavirus Tracker';
    }


    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }


    componentDidMount() {

        fetch("https://covidapi.info/api/v1/global", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "c930bb584emshe095836889a8206p1676f8jsna197b0a8736e"
            }
        })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({
                    isLoaded: true,
                    items: json,
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
                <div>
                    <div className="title">
                        Corona Virus Tracker
                    </div>



                    <div className="flexContainer">

                        <Card className="flexItem2 my-5 py-2">
                            <Card.Body>

                                <div className="subTitle">
                                    Confirmed Cases
                                </div>
                                <Card.Text>
                                    {this.state.items.result.confirmed}
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="flexContainer">
                        <Card className="flexItem1">
                            <Card.Body>

                                <div className="subTitle deathColor">
                                    Confirmed Deaths
                                </div>
                                <Card.Text className = "deathColor">
                                    {this.state.items.result.deaths}
                                </Card.Text>

                            </Card.Body>
                        </Card>
                        <Card className="flexItem1">
                            <Card.Body>

                                <div className="subTitle recoveredColor">
                                    Confirmed Recovered
                                </div>
                                <Card.Text className ="recoveredColor">
                                    {this.state.items.result.recovered}
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </div>


                </div>
            )
        }
    }

}
