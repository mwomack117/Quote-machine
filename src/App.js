import React, { Component } from "react";
import "./App.css";

import QuoteBox from "./components/QuoteBox";

// import { API, headers } from "./utils/api";

import { dummy_data } from "./utils/dummy-data";

const randomColors = [
  "#D61B77",
  "#E8262B",
  "#4729A1",
  "#7F69C2",
  "#EABD26",
  "#96D824",
  "#216396",
  "#8866C1",
  "#EA8226",
  "grey",
  "orange",
  "green",
  "goldenrod"
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: dummy_data,
      current: {},
      themeColor: "red"
    };
  }

  getQuote = () => {
    const { results } = this.state;

    this.setState(
      {
        current: results[Math.floor(Math.random() * results.length)],
        themeColor:
          randomColors[Math.floor(Math.random() * randomColors.length)]
      },
      this.changeBody
    );
  };

  changeBody() {
    return (document.body.style.backgroundColor = this.state.themeColor);
  }

  componentDidMount() {
    this.getQuote();

    // this fetch works, but api not free. -> dummy-data file//
    // fetch(API, headers)
    //   .then(response => response.json())
    //   .then(responseData => {
    //     console.log(responseData);
    //     this.setState({ results: responseData }, this.getQuote);
    //   })
    //   .catch(error => this.setState({ error }));
  }

  render() {
    return (
      <div className="App">
        <h1 id="title">Quote Machine</h1>
        <QuoteBox
          onClick={this.getQuote}
          current={this.state.current}
          themeColor={this.state.themeColor}
        />
      </div>
    );
  }
}

export default App;
