import React from "react";
import ReactDOM from "react-dom/client";

var interval;

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      timer_state: 5,
    };
  }

  start_interval = () => {
    interval = setInterval(() => {
      this.setState({
        timer_state: this.state.timer_state - 1,
      });
    }, 1000);
  };

  stop_interval = () => {
    clearInterval(interval);
  };
  componentDidMount(){
    this.start_interval()
  }

 componentDidUpdate(){
   if(this.state.timer_state == 0){
    this.stop_interval()
   }
 }

  
  

  render() {
    return (
      <>
        <h2>time is {this.state.timer_state}</h2>
        <button onClick={this.start_interval}>start</button>
        <button onClick={this.stop_interval}>stop</button>
        <button onClick={}>reset</button>
      </>
    );
  }
}

export default Timer;
