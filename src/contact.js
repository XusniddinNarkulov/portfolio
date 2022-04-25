import React from "react";
import ReactDOM from "react-dom";
import "./contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact" id="contact">
        <h1 className="contact__me">Contact Me</h1>
        <div className="contact__grid">
          <div className="contact__grid--left">
            <h1>Get in touch</h1>
            <h2 className="contact__grid--left-email">Email:</h2>
            <h2 className="contact__grid--left-phone">Phone:</h2>
            <p className="contact__grid--left-description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less
            </p>
          </div>

          <form className="contact__grid--right">
            <div className="inputs">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
