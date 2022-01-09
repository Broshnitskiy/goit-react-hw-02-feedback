import React, { Component } from "react";
import { capitalizeFirstLetter } from "./helpers/capitalizeFirstLetter";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateCounter = (option) => {
    this.setState({
      [option]: this.state[option] + 1,
    });
  };

  render() {
    const stateKeys = Object.keys(this.state);

    return (
      <div>
        <p>Please leave feedback</p>

        {stateKeys.map((stateKey, index) => (
          <button
            type="button"
            key={stateKey}
            onClick={() => this.updateCounter(stateKey)}
          >
            {capitalizeFirstLetter(stateKey)}
          </button>
        ))}

        <p>Statistics</p>
        <ul>
          {stateKeys.map((stateKey, index) => (
            <li key={stateKey}>
              {capitalizeFirstLetter(stateKey)} : {this.state[stateKey]}
            </li>
          ))}
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}
