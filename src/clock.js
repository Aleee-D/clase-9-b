import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    
    render (){
        return (
            <div>
                <h1>The time is</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }

    componentDidMount() {
        this.timerID = setInterval( () => this.changeState(), 1000 );  
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
    changeState(){
        this.setState({ date: new Date() });
    }
    
}

