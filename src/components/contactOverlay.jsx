// import React, { useState } from 'react';
import "../styles/contact.css" // for styling

export default function ContactOverlay({ show, onClose }) {
  if (!show) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (data.success) {
        alert("Message sent! ✅");
        onClose();
      } else {
        alert("Failed to send message 😓");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message 😵");
    }
  };

  return (
    <div className="modal-overlay">
  <div className="modal-box">
  <button className="modal-close-btn" onClick={onClose}>x</button>
    
    <div className="modal-header">
      <h3>Contact Me</h3>
      <p>I'd love to hear from you! Please fill out the form below.</p>
    </div>

    <form onSubmit={handleSubmit} className="modal-form">
      <label>Name</label>
      <input type="text" name="name" required />

      <label>Email</label>
      <input type="email" name="email" required />

      <label>Message </label>
      <textarea name="message" required/>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  </div>
</div>
  );
}
