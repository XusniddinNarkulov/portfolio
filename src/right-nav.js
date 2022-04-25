import React from "react";
import ReactDOM from "react-dom";
import "./right-nav.css";

class RightNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="right-nav">
        <i className="adjust icon"></i>
        <div className="x-bar">
          <i className="bars icon"></i>
          <i className="x icon"></i>
        </div>
      </div>
    );
  }
}

export default RightNav;
