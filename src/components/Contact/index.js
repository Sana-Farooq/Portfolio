import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const formref = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();
  setLoading(true);  
  setSuccess(false);
    try {
      await emailjs.sendForm(
        "service_9h5zq6v",
        "template_dratlz5",
        formref.current,
        "fwAt8f1nNa4bsxk5h"
      );
      setSuccess(true);
      formref.current.reset();
    } catch (error) {
      console.log(error.text);
      alert("Failed to send message ❌");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Contact Me</h1>
      <p>I Would like to hear your thoughts</p>
      <form ref={formref} onSubmit={sendEmail}>
        <label>Name*</label>
        <input type="text" name="name" required />

        <label>Email*</label>
        <input type="email" name="email" required />

        <label>Message*</label>
        <textarea name="message" required />

         <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {loading && <div className="spinner"></div>}

      {success && (
        <div className="popup">
          <div className="popup-content">
            <p> Message sent successfully!</p>
            <button onClick={() => setSuccess(false)}>Close</button>
          </div>
        </div>
      )}

      <div className="contact-info">
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
