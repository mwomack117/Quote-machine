import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      quotes: []
    };
  }

  componentDidMount() {
    fetch(
      "https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }
      }
    )
      .then(response => response.json())
      .then(responseData => {
        this.setState({ quotes: responseData });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state.quotes)}
        {console.log(process.env.REACT_APP_API_KEY)}
        <header className="App-header"></header>
      </div>
    );
  }
}

export default App;
