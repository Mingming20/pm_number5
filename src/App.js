import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minute: 0,
            second: 0,
            millisecond: 0
        }
    }
    timerStart(e) {
      e.preventDefault();
      this.setState(state => {
        this.timer = setInterval(() => {
          const { minute, second, millisecond } = this.state;
          if (millisecond > 0) {
            this.setState(({ }) => ({
              millisecond: millisecond - 1
            }))
          } else {
            if (second > 0) {
              this.setState(({ }) => ({
                second: second - 1,
                millisecond: 59
              }))
            } else {
              if (minute === 0) {
                 clearInterval(this.timer)
                } else {
                  this.setState(({ }) => ({
                    minute: minute - 1,
                    second: 59
                  }))
                }
              }
            }
          }, 1000 / 60);
        })
      }
    timerStop(e){
       e.preventDefault();
       clearInterval(this.timer)
    }
    render() {
      return (
        <div>
          <h1>Countdown Timer</h1><br/>
          <h2>{this.state.minute} : {this.state.second} : {this.state.millisecond}</h2>
          <input onChange={(e) => this.setState({ minute: (e.target.value) })}></input><br/>
          <button onClick={(e) => this.timerStart(e)}>Start</button>
          <button onClick={(e) => this.timerStop(e)}>Stop </button>
        </div>
      )
    }
}
export default App;