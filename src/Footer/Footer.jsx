import React, { useState } from "react";
import "./Footer.css"; // Import your CSS file for styling

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleContactClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer Logo */}
        <div className="footer-logo">
          <h2>Rohit Navnath Karale</h2>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <ul>
            <li>
              <a href="https://github.com/rohitkarale" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rohitkarale" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://rohitkarale.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1jiRko1O5htX06VaL3A2EysbuLRem9WTQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            <li>
              <button onClick={handleContactClick} className="contact-button">
                Contact Details
              </button>
            </li>
          </ul>
        </div>

        {/* Footer Text */}
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} Rohit Karale. All Rights Reserved.</p>
        </div>
      </div>

      {/* Contact Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Contact Information</h2>
            <p><strong>Email:</strong> rohitkarale2104@gmail.com</p>
            <p><strong>Phone:</strong> +91 9850777984</p>
            <p><strong>Location:</strong> Pune, Maharashtra</p>
            <p>
              <strong>Portfolio:</strong>{" "}
              <a href="https://rohitkarale.vercel.app/" target="_blank" rel="noopener noreferrer">
                rohitkarale.vercel.app
              </a>
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
