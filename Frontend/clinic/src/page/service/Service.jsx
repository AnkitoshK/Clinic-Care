import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Service.Module.css';

function ServicePage() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate(); // Hook to navigate between pages


  useEffect(() => {
    // Fetch services data from the backend
    axios.get('http://127.0.0.1:8000/api/myapp/services/') // Change to your backend URL
      .then(response => {
        setServices(response.data); // Store the fetched data in state
      })
      .catch(error => {
        console.error('There was an error fetching the services!', error);
      });
  }, []);

// Navigate to the appointment page when the button is clicked
const handleAppointmentClick = () => {
  navigate('/appointment');
};


return (
  <div className="service-page-container">
    <div className="service-page-section">
      <h2 className="service-page-heading">Our Services</h2>
      <div className="service-page-grid">
        {/* Render Service Cards dynamically */}
        {services.map((service, index) => (
          <div className="service-page-card" key={index}>
            <img
              src={service.image} // Image from the backend
              alt={service.title} // Alt text from the backend
              className="service-page-image"
            />
            <div>
              <h3 className="service-page-title">{service.title}</h3>
              <p className="service-page-description">{service.description}</p>

              {/* Symptoms Section */}
              <div className="service-page-section-item">
                <h4 className="service-page-subheading">Symptoms:</h4>
                <div className="service-page-text">
                  {Array.isArray(service.symptoms) && service.symptoms.join(', ')}
                </div>
              </div>

              {/* Cure Section */}
              <div className="service-page-section-item">
                <h4 className="service-page-subheading">Cure:</h4>
                <div className="service-page-text">
                  {Array.isArray(service.cure) && service.cure.join(', ')}
                </div>
              </div>

              {/* Appointment Button */}
              <button
                className="appointment-button"
                onClick={handleAppointmentClick} // Handle navigation on click
              >
                Book an Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default ServicePage;