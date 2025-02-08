import React from 'react';
import ReactDOM from 'react-dom/client';

var interval

class Timer  extends React.Component {
    constructor(){
        super();
        this.state = {
            timer_state : 5

        };
    }

    componentDidMount(){
        interval = setInterval(() => {
            this.setState({
                timer_state: this.state.timer_state - 1
            })
        }, 1000)
    }

    componentDidUpdate(){
        console.log("ji")
        if(this.state.timer_state === 0){
            clearInterval(interval)
        }
    }

    render(){
        return(
            <h2>
                {this.state.timer_state}
            </h2>
        )
    }


}

export default Timer