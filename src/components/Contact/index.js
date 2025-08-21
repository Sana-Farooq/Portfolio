import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Contact() {
  const formref = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9h5zq6v",
        "template_dratlz5",
        formref.current,
        "fwAt8f1nNa4bsxk5h"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully ✅");
          formref.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message ❌");
        }
      );
  };

  return (
        <div className="container">
          <h1>Contact Me</h1>
          <p>I Would like to hear your thoughts</p>
          <form ref={formref} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" required />

            <label>Email</label>
            <input type="email" name="email" required />

            <label>Message</label>
            <textarea name="message" required />

            <button type="submit">Send</button>
          </form>

          <div className="contact-info">
            <p>Contact Number: 0301-8538797</p>
            <p>Location: Bahawalpur, Pakistan</p>
          </div>

          <div className="social-links">
            <a href="https://github.com/Sana-Farooq" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/sana-farooq-353995369" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
  );
}

export default Contact
