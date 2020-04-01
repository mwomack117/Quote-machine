import React from "react";

import twitterLogo from "../utils/icons/twitter.svg";

function QuoteBox(props) {
  return (
    <div id="quote-box">
      <div id="text">
        <p>{props.current.quote}</p>
        <p id="author">{props.current.author}</p>
      </div>
      <div className="buttons">
        <a href="https://twitter.com" target="_blank">
          <img src={twitterLogo} width="30px" height="30px" />
        </a>
        <button id="new-quote" onClick={props.onClick}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteBox;
