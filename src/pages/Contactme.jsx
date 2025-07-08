import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contactme.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        '**********',    // get from EmailJS dashboard service screte
        '***********',   // get from EmailJS dashboard templet code
        form.current,
        '**********'        // get from EmailJS dashboard api
      )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          setStatus('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <div className='backgro'>
    <div className="contact-section">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name:</label>
        <input type="text" name="user_name" required />
        <label>Email:</label>
        <input type="email" name="user_email" required />
        <label>Message:</label>
        <textarea name="message" required rows="5"></textarea>
        <button type="submit">Send</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
    </div>
  );
};

export default Contact;
