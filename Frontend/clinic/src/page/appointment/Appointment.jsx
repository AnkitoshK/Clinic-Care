import React, { useState } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Appointment.Module.css";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentDateTime: "",
    doctor: "",
    service: "",
    description: "",
    paymentScreenshot: null,
  });
  const [errors, setErrors] = useState({});
  const [showScanner, setShowScanner] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData({ ...formData, paymentScreenshot: e.target.files[0] });
  };

  // Validate form fields
  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Invalid email format";
    if (!formData.phone) formErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      formErrors.phone = "Phone number must be 10 digits";
    if (!formData.appointmentDateTime)
      formErrors.appointmentDateTime = "Appointment date and time is required";
    if (!formData.doctor) formErrors.doctor = "Please select a doctor";
    if (!formData.service) formErrors.service = "Please select a service";
    if (!formData.description)
      formErrors.description = "Please provide a reason for your visit";
    if (!formData.paymentScreenshot)
      formErrors.paymentScreenshot = "Please upload a payment screenshot";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please correct the errors in the form.");
      return;
    }

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("phone", formData.phone);
    formDataToSubmit.append("appointment_date_time", formData.appointmentDateTime);
    formDataToSubmit.append("doctor", formData.doctor);
    formDataToSubmit.append("service", formData.service);
    formDataToSubmit.append("description", formData.description);
    formDataToSubmit.append("payment_screenshot", formData.paymentScreenshot);

    try {
      // Send to the backend
      const response = await axios.post(
        "http://127.0.0.1:8000/api/myapp/appointment/", // Backend endpoint
        formDataToSubmit,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // EmailJS configuration
      const emailData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        appointmentDateTime: formData.appointmentDateTime,
        doctor: formData.doctor,
        service: formData.service,
        description: formData.description,
      };

      emailjs
        .send(
          "service_oxs0vty", // Replace with your EmailJS service ID
          "template_rv353n4", // Replace with your EmailJS template ID
          emailData,
          "hLrhsvX71XUcmPBE0" // Replace with your EmailJS public key
        )
        .then(() => {
          toast.success("Appointment booked and email sent successfully!");
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          toast.error("Appointment booked but failed to send email.");
        });

      console.log("Form submitted successfully:", response.data);

      // Clear the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        appointmentDateTime: "",
        doctor: "",
        service: "",
        description: "",
        paymentScreenshot: null,
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error.message);
      toast.error("Failed to book appointment. Please try again.");
    }
  };

  // Trigger QR code modal visibility
  const showQRCode = () => {
    setShowScanner(true);
  };

  return (
    <section className="appointment-section">
      <ToastContainer />
      <div className="appointment-form-container">
        <h2>Book Your Appointment</h2>
        <p className="section-tagline">
          "Take charge of your health today! Schedule an appointment with our
          expert doctors and start your journey to better health."
        </p>
        <form onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error-message">{errors.name}</p>}

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error-message">{errors.email}</p>}

            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <p className="error-message">{errors.phone}</p>}

            <label htmlFor="description">Reason for Visit</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              required
            ></textarea>
            {errors.description && (
              <p className="error-message">{errors.description}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="appointmentDateTime">Appointment Date and Time</label>
            <input
              type="datetime-local"
              id="appointmentDateTime"
              name="appointmentDateTime"
              value={formData.appointmentDateTime}
              onChange={handleChange}
              required
            />
            {errors.appointmentDateTime && (
              <p className="error-message">{errors.appointmentDateTime}</p>
            )}

            <label htmlFor="doctor">Preferred Doctor</label>
            <select
              id="doctor"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
            >
              <option value="">Select a Doctor</option>
              <option value="Dr. Nayab Anjum">Dr. Nayab Anjum (MBBS, MD)</option>
            </select>
            {errors.doctor && <p className="error-message">{errors.doctor}</p>}

            <label htmlFor="service">Select Service</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a Service</option>
              <option value="Addiction">Addiction</option>
              <option value="Anxiety">Anxiety</option>
              <option value="Depression">Depression</option>
              <option value="Bipolar Disorders">Bipolar Disorders</option>
              <option value="OCD">OCD</option>
              <option value="Children and Young">Children and Young</option>
              <option value="Sexual Dysfunction in Males">
                Sexual Dysfunction in Males
              </option>
              <option value="Schizophrenia">Schizophrenia</option>
            </select>
            {errors.service && <p className="error-message">{errors.service}</p>}

            <label htmlFor="paymentScreenshot">Upload Payment Screenshot</label>
            <input
              type="file"
              id="paymentScreenshot"
              name="paymentScreenshot"
              onChange={handleFileChange}
              accept="image/*"
              required
            />
            {errors.paymentScreenshot && (
              <p className="error-message">{errors.paymentScreenshot}</p>
            )}
          </div>

          <div className="button-containers">
            <button type="button" className="submit-buttons" onClick={showQRCode}>
              Payment
            </button>
            <button type="submit" className="submit-buttons">
              Submit
            </button>
          </div>
        </form>

        {showScanner && (
          <div className="qr-scanner-modal">
            <h3>Scan the QR Code to Pay</h3>
            <img src="qr.png" alt="QR Code" className="qr-code-img" />
            <button
              type="button"
              className="close-button"
              onClick={() => setShowScanner(false)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Appointment;
