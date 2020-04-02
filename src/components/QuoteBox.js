import React from "react";

import twitterLogo from "../utils/icons/iconfinder_twitter_112776.svg";

function QuoteBox(props) {
  return (
    <div id="quote-box">
      <div className="quote-info">
        <p id="text" style={{ color: props.themeColor }}>
          <span>&ldquo;</span>
          {props.current.quote}
          <span>&#8221;</span>
        </p>
        <p id="author" style={{ color: props.themeColor }}>
          - {props.current.author}
        </p>
      </div>
      <div className="buttons">
        <a
          id="tweet-quote"
          href="https://twitter.com"
          target="_blank"
          style={{ backgroundColor: props.themeColor }}
        >
          <img src={twitterLogo} />
        </a>
        <button
          id="new-quote"
          onClick={props.onClick}
          style={{ backgroundColor: props.themeColor }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteBox;
