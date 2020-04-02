import React from "react";

import twitterLogo from "../utils/icons/iconfinder_twitter_112776.svg";

function QuoteBox(props) {
  return (
    <div id="quote-box">
      <div className="quote-info">
        <p id="text">
          <span>&ldquo;</span>
          {props.current.quote}
          <span>&#8221;</span>
        </p>
        <p id="author">- {props.current.author}</p>
      </div>
      <div className="buttons">
        <a id="tweet-quote" href="https://twitter.com" target="_blank">
          <img src={twitterLogo} />
        </a>
        <button id="new-quote" onClick={props.onClick}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteBox;
