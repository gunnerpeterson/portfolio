/** @format */

import "./contact.scss";
import { useState } from "react";
import emailjs from "emailjs-com";
import abt from "../../assets/abt_pic.jpeg";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_dr75p4n", "portfolio", e.target, "Gi1gU2WUmTIvzNelm")
      .then(
        (result) => {
          setMessage(true);
        },
        (error) => {
          setMessage(false);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={abt} alt="" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" name="reply_to" />
          <textarea
            placeholder="Place thy wisdom in here"
            name="message"
          ></textarea>
          <button type="submit">Send</button>
          {message && (
            <span>I'll get back to you soon!</span>
          )}
        </form>
      </div>
    </div>
  );
}
