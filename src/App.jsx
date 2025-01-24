import React, { useState } from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Project';
import Contact from './Contact/Contact';
import Modal from 'react-modal';
import emailjs from '@emailjs/browser';

Modal.setAppElement('#root'); // Required for accessibility

function App() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // State to track form submission

  const handleSubmit = () => {
    if (name.trim() === '') {
      setErrorMessage('Name cannot be empty.');
      return;
    }
    if (mobile.length !== 10 || isNaN(mobile)) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setErrorMessage('');

    emailjs
      .send(
        'service_b6knl4c', // EmailJS Service ID
        'template_z4oj7hd', // EmailJS Template ID
        {
          fullName: name,
          mobileNumber: mobile,
          emailAddress: email,
        },
        'wqp2NbQXMDIV9T7cc' // EmailJS Public Key
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          setIsFormSubmitted(true); // Mark form as submitted and show portfolio directly
        },
        (error) => {
          console.error('Error while sending email:', error);
          setErrorMessage('Failed to send the email. Please try again.');
        }
      );
  };

  return (
    <>
      {/* Show Modal if the form is not submitted */}
      {!isFormSubmitted && (
        <Modal
          isOpen={true}
          contentLabel="User Information"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <h2 className="modal-header">Enter Your Details To View Profile of Rohit Karale!</h2>
          <div className="modal-body">
            <input
              type="text"
              className="input-field"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              className="input-field"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              maxLength="10"
              required
            />
            <input
              type="email"
              className="input-field"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
          </div>
        </Modal>
      )}

      {/* Show Portfolio only if the form is submitted */}
      {isFormSubmitted && (
        <div>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
