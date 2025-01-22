import React, { useState } from "react";
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formValues.fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!formValues.email.trim()) {
      newErrors.email = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formValues.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile Number is required.";
    } else if (!/^\d+$/.test(formValues.mobileNumber)) {
      newErrors.mobileNumber = "Please enter a valid mobile number (digits only).";
    }
    if (!formValues.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formValues.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    setTouched({
      fullName: true,
      email: true,
      mobileNumber: true,
      subject: true,
      message: true,
    });

    if (Object.keys(formErrors).length === 0) {
      // EmailJS API integration
      emailjs
        .send(
          'service_b6knl4c', // Replace with your EmailJS Service ID
          'template_z4oj7hd', // Replace with your EmailJS Template ID
          {
            fullName: formValues.fullName,
            email: formValues.email,
            mobileNumber: formValues.mobileNumber,
            subject: formValues.subject,
            message: formValues.message,
          },
          'wqp2NbQXMDIV9T7cc' // Replace with your EmailJS Public Key
        )
        .then(
          (response) => {
            toast.success("🎉 Your message has been sent successfully!", {
              position: "top-right",
              autoClose: 5000,
              closeOnClick: true,
            });
            console.log('Email sent successfully!', response.status, response.text);
            setFormValues({
              fullName: "",
              email: "",
              mobileNumber: "",
              subject: "",
              message: "",
            });
          },
          (error) => {
            toast.error("😥 Oops! Something went wrong. Please try again.", {
              position: "top-right",
              autoClose: 5000,
              closeOnClick: true,
            });
            console.error('Error while sending email:', error);
          }
        );
    } else {
      toast.warning("⚠️ Please fix the errors before submitting.", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
    }
  };

  return (
    <div className="form-container">
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>
        <div className="contact-content">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formValues.fullName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.fullName && touched.fullName && (
                  <div className="error">{errors.fullName}</div>
                )}

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formValues.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.email && touched.email && (
                  <div className="error">{errors.email}</div>
                )}
              </div>

              <div className="input-box">
                <input
                  type="text"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  value={formValues.mobileNumber}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.mobileNumber && touched.mobileNumber && (
                  <div className="error">{errors.mobileNumber}</div>
                )}

                <input
                  type="text"
                  name="subject"
                  placeholder="Email Subject"
                  value={formValues.subject}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.subject && touched.subject && (
                  <div className="error">{errors.subject}</div>
                )}
              </div>

              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Your Message"
                value={formValues.message}
                onChange={handleInputChange}
                onBlur={handleBlur}
                required
              ></textarea>
              {errors.message && touched.message && (
                <div className="error">{errors.message}</div>
              )}

              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="contact-img">
        <img
          src="Contact.png" // Ensure the image is in the `public` folder
          alt="Contact Photo"
          loading="lazy"
        />
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
