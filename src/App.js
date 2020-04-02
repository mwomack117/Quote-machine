import React, { Component } from "react";
import "./App.css";

import QuoteBox from "./components/QuoteBox";

// import { API, headers } from "./utils/api";

import { dummy_data } from "./utils/dummy-data";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: dummy_data,
      current: {}
    };
  }

  getQuote = () => {
    const { results } = this.state;

    this.setState({
      current: results[Math.floor(Math.random() * results.length)]
    });
  };

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
          current={
            this.state.current
            // this.state.results[
            //   Math.floor(Math.random() * this.state.results.length)
            // ]
          }
        />
      </div>
    );
  }
}

export default App;
