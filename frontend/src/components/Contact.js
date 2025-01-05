import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';
import { server } from '../index';
import toast from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${server}/users/contact`,
        { name, email, message },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(data.message);

      
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-header">Get in Touch</h1>
      <p className="contact-description">
        We're here to answer any questions you have about our antique collections. Fill out the form below, and we’ll get back to you as soon as possible.
      </p>

      <form className="contact-form" onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className="contact-info">
        <p>Phone: +91 9999999990</p>
        <p>Address: New Delhi G P O, India</p>
      </div>
    </div>
  );
};

export default Contact;
