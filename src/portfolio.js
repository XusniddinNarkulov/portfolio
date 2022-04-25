import React from "react";
import ReactDOM from "react-dom";
import "./portfolio.css";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <div className="portfolio__grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          {/* <img src="../public/header.jpg" />
          <img src="../public/header.jpg" />
          <img src="../public/header.jpg" /> */}
        </div>
      </div>
    );
  }
}

export default Portfolio;
