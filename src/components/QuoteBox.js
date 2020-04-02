import React from "react";

import twitterLogo from "../utils/icons/iconfinder_twitter_112776.svg";

function QuoteBox(props) {
  return (
    <div id="quote-box">
      <div>
        <p id="text" className="quote-info" style={{ color: props.themeColor }}>
          <span>&ldquo;</span>
          {props.current.quote}
          <span>&#8221;</span>
        </p>
        <p
          id="author"
          className="quote-info"
          style={{ color: props.themeColor }}
        >
          - {props.current.author}
        </p>
      </div>
      <div className="buttons">
        <a
          id="tweet-quote"
          href={
            "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
            encodeURI(props.current.quote + " - " + props.current.author)
          }
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: props.themeColor }}
        >
          <img src={twitterLogo} alt="twitter-bird-icon" />
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
