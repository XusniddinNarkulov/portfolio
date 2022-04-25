import React from "react";
import ReactDOM from "react-dom";
import "./left-nav.css";

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="left-nav">
        <h2>PLUX</h2>
        <div className="icons">
          <i className="twitter icon"></i>
          <i className="github icon"></i>
          <i className="facebook f icon"></i>
          <i className="linkedin icon"></i>
          <i className="youtube icon"></i>
          <i className="twitch icon"></i>
          <h3>Follow Me</h3>
        </div>
      </div>
    );
  }
}

export default LeftNav;
