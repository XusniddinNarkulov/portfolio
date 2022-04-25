import React from "react";
import ReactDOM from "react-dom";
import "./about.css";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="about" id="about">
        <h1 className="about__me">About Me</h1>

        <div className="about__grid">
          <h1>About Myself</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <h1>Work Timeline</h1>
          <div className="about__grid--timetable">
            <div>
              <h2>Designer of week</h2>
              <p>Yadh</p>
              <p>2020</p>
            </div>
            <div>
              <h2>Designer of week</h2>
              <p>Jamalya</p>
              <p>2020</p>
            </div>
            <div>
              <h2>Designer of week</h2>
              <p>Alquds</p>
              <p>2020</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
