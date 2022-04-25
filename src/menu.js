import React from "react";
import ReactDOM from "react-dom";
import "./menu.css";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <a href="#home">Home</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    );
  }
}

export default Menu;
