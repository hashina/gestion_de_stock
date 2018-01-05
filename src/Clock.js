/**
 * Created by Administrateur on 03/01/2018.
 */
import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            time: new Date().toLocaleString()
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }

    handleClick(event) {
        console.log(event, this);
    }

    render() {
        return (
            <p className="App-time">
                Androany: {this.state.time}.
            </p>
        );
    }
}

export default Clock;