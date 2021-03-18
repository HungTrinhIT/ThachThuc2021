import React, { Component } from "react";
import { Button } from "../components/Button";
import Countdown from "../components/Countdown";
import Log from "../components/Log";
import { Word } from "../components/Word";

class Home extends Component {
  state = {
    running: false,
    history: {},
    keyword: "Hello, No Namespace",
    count: 120,
    answered: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.running !== prevState.running) {
      switch (this.state.running) {
        case true:
          this.handleStart();
      }
    }
  }

  componentDidMount() {
    let random = Math.floor(Math.random() * this.props.data.length);
    this.setState({
      keyword: this.props.data[random],
    });
  }

  //   Stop timer
  handleStop = () => {
    if (this.timer) {
      clearInterval(this.timer);
      this.setState({ running: false });
    }
  };

  //   Start game
  handleStart = () => {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({ count: newCount >= 0 ? newCount : 0 });
    }, 1000);
  };

  //Handle Countdown
  handleCountdown = () => {
    this.setState({
      running: true,
    });
  };
  //   Reset new game
  handleReset = () => {
    let random = Math.floor(Math.random() * this.props.data.length);
    if (this.timer) {
      clearInterval(this.timer);
      this.setState({
        count: 120,
        keyword: this.props.data[random],
        history: {},
        running: false,
        answered: 0,
      });
    }
  };

  handleEvent = (value) => {
    let random = Math.floor(Math.random() * this.props.data.length);
    let keyword = this.state.keyword;
    const newHistory = { ...this.state.history };
    const newAnswered = this.state.answered + 1;
    console.log(newHistory);
    switch (value) {
      case 0: {
        newHistory[keyword] = false;
        this.setState({
          keyword: this.props.data[random],
          history: newHistory,
          answered: newAnswered,
        });
        break;
      }
      case 1: {
        newHistory[keyword] = true;
        this.setState({
          keyword: this.props.data[random],
          history: newHistory,
          answered: newAnswered,
        });
        break;
      }

      default:
        break;
    }
  };
  render() {
    let { running, history, keyword, count, answered } = this.state;

    return (
      <>
        <Countdown
          time={count}
          handleStop={this.handleStop}
          handleCountdown={this.handleCountdown}
          handleReset={this.handleReset}
        />
        <Word
          keyword={
            this.state.count === 0 || answered === 10
              ? "Good job <3 <3 <3 !"
              : keyword
          }
        />

        <div className="result">
          <h3>
            <p className="badge badge-warning mt-3 text-white">
              Correct answer:{" "}
              {Object.values(history).filter((item) => item === true).length}
              /10
            </p>
          </h3>
        </div>
        <div className="d-flex align-items-center justify-content-center controller-btn">
          <Button
            styleBtn="success"
            text="correct"
            handleEvent={this.handleEvent}
            disabled={!running || count === 0 || answered === 10 ? true : false}
          />
          <Button
            styleBtn="danger"
            text="skip"
            handleEvent={this.handleEvent}
            disabled={!running || count === 0 || answered === 10 ? true : false}
          />

          {/* Show log */}
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Log
          </button>
        </div>

        <Log log={history} />
      </>
    );
  }
}

export default Home;
