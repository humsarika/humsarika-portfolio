// import React, { useState } from 'react';
import "../styles/contact.css" // for styling
import { toast } from 'react-toastify';
export default function ContactOverlay({ show, onClose }) {
  if (!show) return null;
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      // alert("Please fill in all fields!");
      toast.error("Please fill in all fields!");
      return;
    }
    if (!isValidEmail(email)) {
      // alert("Please enter a valid email address!");
      toast.warn("Please enter a valid email address!");
      return;
    }

    try {
      const res = await fetch('https://portfolio-backend-i3pq.onrender.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (data.success) {
        // alert("Message sent! ✅");
        toast.success("Message sent! ✅");

        onClose();
      } else {
        // alert("Failed to send message 😓");
        toast.error("Failed to send message 😓");

      }
    } catch (err) {
      console.error(err);
      // alert("Error sending message 😵");
      toast.error("Error sending message 😵");

    }
  };

  return (
    <div className="modal-overlay">
  <div className="modal-box">
  <button className="modal-close-btn" onClick={onClose}>&times;</button>
    
    <div className="modal-header">
      <h3>Contact Me</h3>
      <p>I'd love to hear from you! Please fill out the form below.</p>
    </div>

    <form onSubmit={handleSubmit} className="modal-form">
      <label>Name</label>
      <input type="text" name="name" placeholder="Full Name" />

      <label>Email</label>
      <input type="email" name="email" placeholder="your.email@gmail.com" />

      <label>Message </label>
      <textarea name="message" placeholder="Write Your Message here ..."/>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  </div>
</div>
  );
}
