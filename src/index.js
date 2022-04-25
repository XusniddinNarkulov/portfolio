import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./home.js";
import LeftNav from "./left-nav.js";
import RightNav from "./right-nav.js";
import Portfolio from "./portfolio";
import About from "./about";
import Contact from "./contact";
import Menu from "./menu";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <LeftNav />
        <RightNav />
        <Home />
        <Portfolio />
        <About />
        <Contact />
        <Menu />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
