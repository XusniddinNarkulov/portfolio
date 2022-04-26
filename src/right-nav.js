import React from "react";
import ReactDOM from "react-dom";
import "./right-nav.css";

class RightNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shart: true };
  }

  click = () => {
    if (this.state.shart == true) {
      document.documentElement.style.setProperty("--black", "#fff");
      document.documentElement.style.setProperty("--white", "#000");
      this.setState({ shart: false });
    } else {
      document.documentElement.style.setProperty("--black", "#000");
      document.documentElement.style.setProperty("--white", "#fff");
      this.setState({ shart: true });
    }
  };

  render() {
    return (
      <div className="right-nav">
        <i onClick={this.click} className="adjust icon"></i>
        <div className="x-bar">
          <i className="bars icon"></i>
          <i className="x icon"></i>
        </div>
      </div>
    );
  }
}

export default RightNav;
