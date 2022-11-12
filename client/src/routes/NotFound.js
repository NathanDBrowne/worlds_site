import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NotFound = () => {
  return (
    <div className="App">
      <p style={{ fontWeight: 700 }}>404 - How did you even get here?</p>
      <h2>Do kindly let me know if I've made a mistake somewhere.</h2>
      <a className="App-link" href="/" rel="noopener noreferrer">
        Back to reality
      </a>
    </div>
  );
};

export default NotFound;
