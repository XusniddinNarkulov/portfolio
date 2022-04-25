import React from "react";
import ReactDOM from "react-dom";
import "./home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home" id="home">
        <div className="home__left">
          <div className="home__left--heading">
            <b>I'm Plux Doe</b>
            <b>I love coding</b>
          </div>

          <p className="home__left--description">
            Lorem Ipsum Dolor sit amet. consectetur adipiscing edit.Send at nist
            eusimod urna bibendium
          </p>

          <div className="buttons">
            <a href="#" className="portfolio-button">
              My Portfolio
            </a>
            <a href="#" className="contact-button">
              Contact Me
            </a>
          </div>
        </div>
        <div className="home__right"></div>
      </div>
    );
  }
}

export default Home;
