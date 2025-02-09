import React from "react";
import ReactDOM from "react-dom/client";

var interval;

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      isStart: false,
    };
  }

  start_interval = () => {
    if (this.state.isStart == false) {
        this.setState({
            isStart: true,
        })
      interval = setInterval(() => {
        this.setState({
          second: this.state.second + 1,
        });

        if (this.state.second == 60) {
          this.setState({
            second: 0,
            minute: this.state.minute + 1,
          });
        }

        if (this.state.minute == 60) {
          this.setState({
            minute: 0,
            hour: this.state.hour + 1,
          });
        }
      }, 1000);
    }
  };

  stop_interval = () => {
    this.setState({
        isStart: false
    })
    clearInterval(interval);
  };

  reset_interval = () => {
    clearInterval(interval);
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
      isStart: false
    });
  };

  render() {
    var h = this.state.hour
    var m = this.state.minute
    var s = this.state.second

    return (
      <>
        <h2>
          time is {h > 9 ? h : "0" + h}:{m > 9 ? m : "0" + m}:{s > 9 ? s : "0" + s}
        </h2>
        <button onClick={this.start_interval}>start</button>
        <button onClick={this.stop_interval}>stop</button>
        <button onClick={this.reset_interval}>reset</button>
      </>
    );
  }
}

export default Timer;
