import React, { Component } from "react";
import "./App.css";

import QuoteBox from "./components/QuoteBox";

// import { API, headers } from "./utils/api";

import { dummy_data } from "./utils/dummy-data";

const randomColors = ["green", "purple", "blue", "teal"];

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

  componentWillMount() {
    this.getQuote();

    // fetch(API, headers)
    //   .then(response => response.json())
    //   .then(responseData => {
    //     console.log(responseData);
    //     // this.setState({ results: responseData });
    //   })
    //   .catch(error => this.setState({ error }));
  }

  render() {
    return (
      <div className="App">
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
