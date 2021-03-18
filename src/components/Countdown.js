import React, { Component } from "react";

class Countdown extends Component {
  format(time) {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  }
  render() {
    const { time } = this.props;
    return (
      <div className="displayedTime">
        <h1>{this.format(time)}</h1>
        <div className="countdown-controller">
          <i
            onClick={this.props.handleCountdown}
            className="fa fa-play-circle icon text-success"
          ></i>
          <i
            onClick={this.props.handleReset}
            className="fa fa-refresh icon text-primary"
          ></i>

          <i
            onClick={this.props.handleStop}
            className="fa fa-stop-circle icon text-danger"
          ></i>
        </div>
      </div>
    );
  }
}

export default Countdown;
