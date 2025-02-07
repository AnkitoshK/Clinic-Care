import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.Module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [contactData, setContactData] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/myapp/contact-text/');
        setContactData(response.data);
      } catch (error) {
        console.error('Error fetching contact data:', error);
        toast.error('Failed to load contact information.');
      }
    };

    fetchContactData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.length < 3) {
      errors.name = 'Name must be at least 3 characters long';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error('Please fix the errors in the form.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/myapp/contact/', formData);
      toast.success(response.data.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      setFormErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="hellocontact">
      <ToastContainer />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <span className="subheading">We are waiting for you to get in touch with us.</span>
        <hr />
        <div className="contact-content">
          <div className="contact-details">
            {contactData && (
              <>
                <h2>{contactData.clinic_name}</h2>
                <p>{contactData.address}</p>
                <p>{contactData.phone1}</p>
                {contactData.phone2 && <p>{contactData.phone2}</p>}
                <p>
                  <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
                </p>
              </>
            )}
          </div>
          <form className="contact-form-contact-us" onSubmit={handleSubmit}>
            <div className="form-group-contact-us">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-control-contact-us"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && <span className="error-text">{formErrors.name}</span>}
            </div>
            <div className="form-group-contact-us">
              <input
                type="email"
                name="email"
                placeholder="E-mail address"
                className="form-control-contact-us"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <span className="error-text">{formErrors.email}</span>}
            </div>
            <div className="form-group-contact-us">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="form-control-contact-us"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-contact-us">
              <textarea
                name="message"
                placeholder="Message"
                className="form-control-textarea-contact-us"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {formErrors.message && <span className="error-text">{formErrors.message}</span>}
            </div>
            <button type="submit" className="submit-button">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
