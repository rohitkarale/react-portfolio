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

// Firebase Imports
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

Modal.setAppElement('#root'); // Required for accessibility

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOcoHx4WOVeA5-TcK1-1MDEhVkflGB-Ck",
  authDomain: "portfolio-mobile-verification.firebaseapp.com",
  projectId: "portfolio-mobile-verification",
  storageBucket: "portfolio-mobile-verification.firebasestorage.app",
  messagingSenderId: "471511480810",
  appId: "1:471511480810:web:d24fcd6be27006ceeb1a93",
  measurementId: "G-VN2BRGM7H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const sendOtp = () => {
    if (name.trim() === '') {
      setErrorMessage('Name cannot be empty.');
      return;
    }
    if (mobile.length !== 10 || isNaN(mobile)) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otp);
    setIsOtpSent(true);
    setErrorMessage('');
    setShowOtpModal(true);
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setIsVerified(true);
      setShowSuccessModal(true);
      setErrorMessage('');

      emailjs
        .send(
          'service_b6knl4c', // EmailJS Service ID
          'template_z4oj7hd', // EmailJS Template ID
          {
            fullName: name,
            mobileNumber: mobile,
          },
          'wqp2NbQXMDIV9T7cc' // EmailJS Public Key
        )
        .then(
          (response) => {
            console.log('Email sent successfully!', response.status, response.text);
          },
          (error) => {
            console.error('Error while sending email:', error);
          }
        );
    } else {
      setErrorMessage('Invalid OTP. Please try again.');
    }
  };

  return (
    <>
      {!isVerified && (
        <Modal isOpen={!isVerified} contentLabel="Mobile Verification" className="modal" overlayClassName="modal-overlay">
          <h2 className="modal-header">Mobile Verification</h2>
          <div className="modal-body">
            <input
              type="text"
              className="input-field"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {!isOtpSent ? (
              <>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  maxLength="10"
                  required
                />
                <button className="submit-btn" onClick={sendOtp}>
                  Send OTP
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  className="otp-input"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength="4"
                  required
                />
                <button className="submit-btn" onClick={verifyOtp}>
                  Verify OTP
                </button>
              </>
            )}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
          </div>
        </Modal>
      )}

      {showOtpModal && (
        <Modal
          isOpen={showOtpModal}
          onRequestClose={() => setShowOtpModal(false)}
          contentLabel="Your OTP"
          className="otp-modal"
          overlayClassName="modal-overlay"
        >
          <h2 className="modal-header">Your OTP</h2>
          <p className="otp-message">Your OTP is: <strong>{generatedOtp}</strong></p>
          <button className="close-btn" onClick={() => setShowOtpModal(false)}>Close</button>
        </Modal>
      )}

      {showSuccessModal && (
        <Modal
          isOpen={showSuccessModal}
          onRequestClose={() => setShowSuccessModal(false)}
          contentLabel="Mobile Verified"
          className="success-modal"
          overlayClassName="modal-overlay"
        >
          <h2 className="success-message">Mobile Number Verified Successfully!</h2>
          <button className="close-btn" onClick={() => setShowSuccessModal(false)}>Close</button>
        </Modal>
      )}

      {isVerified && (
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
