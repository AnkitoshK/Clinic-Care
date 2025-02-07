import React, { useState, useEffect } from "react";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.Module.css";
import Appointment from "../appointment/Appointment";
import Testimonial from "../testimonial/Testimonial";
import Gallery from "../gallery/Gallery";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [services, setServices] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [sliders, setSliders] = useState([]);
  const navigate = useNavigate();

  // Fetch data for services, blogs, and image sliders
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/myapp/servicehome/")
      .then((response) => setServices(response.data))
      .catch((error) => console.error("Error fetching services:", error));

    axios
      .get("http://127.0.0.1:8000/api/myapp/bloghome/")
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error("Error fetching blogs:", error));

    axios
      .get("http://127.0.0.1:8000/api/myapp/imageslider/")
      .then((response) => setSliders(response.data))
      .catch((error) => console.error("Error fetching image sliders:", error));
  }, []);

  // Automatic slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliders.length);
    }, 3000); // Change slides every 3 seconds
    return () => clearInterval(interval);
  }, [sliders.length]);

  // Handle manual navigation (optional)
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="homecon">
      <div className="container">
        {/* Blog Section */}
        <div className="blogwp">
          {blogs.map((blog) => (
            <div className="blogItem" key={blog.id}>
              <img
                src={blog.image_url || "path/to/placeholder/image.jpg"}
                alt="Blog"
                className="blogImage"
              />
              <div className="blogContent">
                <h4 className="blogTitle">{blog.title}</h4>
                <p className="blogText">{blog.content}</p>
                <NavLink to="/about-us" className="readMoreLink">
                  Read More
                </NavLink>
              </div>
            </div>
          ))}
         {/* WhatsApp Button */}
  <a href="https://wa.me/9006870168" target="_blank" rel="noopener noreferrer" className="whatsappButton">
        <FaWhatsapp /><span className="whatsappNumber">9006870168</span>
      </a>
        </div>

        {/* Image Slider */}
        <div className="sliderWrapper">
          <div className="slider">
            {sliders.map((slide, index) => (
              <div
                key={index}
                className={`slide ${
                  index === currentSlide ? "activeSlide" : ""
                }`}
              >
                <img
                  src={slide.image || "path/to/placeholder/image.jpg"}
                  alt={`Slide ${index + 1}`}
                  className="slideImage"
                />
              </div>
            ))}
          </div>
          {/* Manual navigation dots */}
          <div className="sliderDots">
            {sliders.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? "activeDot" : ""}`}
                onClick={() => handleSlideChange(index)}
              />
            ))}
          </div>
        </div>
      </div>



 {/* Address Section */}
 <div className="contactInfo">
        {/* Purnia Clinic */}
        <div className="clinicDetails">
          <a
            href="https://maps.app.goo.gl/vczFbW8fok54zxXw6"
            target="_blank"
            rel="noopener noreferrer"
            className="clinicLink"
          >
          <FaLocationDot className="icon" />
          </a>
          <div className="purnia">
            <p className="addressTitle">Purnia Clinic</p>
            <p className="addressText">
              Red Cross, near Mourya Pathology, above Hindustan Medical Agency, Shivaji Colony, Purnia, Bihar 854301(Mon - Fri )
            </p>
            <p className="timing">Timing: 8:00 AM - 06:00 PM</p>
          </div>
        </div>

        {/* Araria Clinic */}
        <div className="clinicDetails">
          <a
            href="https://maps.app.goo.gl/3LKDuFV2mkz39iQd6"
            target="_blank"
            rel="noopener noreferrer"
            className="clinicLink"
          >
            <FaLocationDot className="icon" />
          </a>
          <div>
            <p className="addressTitle">Araria Clinic</p>
            <p className="addressText">
              Shakil Market, near Nasar Medical, Araria, Bihar 854311(Sat - Sun)
            </p>
            <p className="timing">Timing: 8:00 AM - 06:00 PM</p>
          </div>
        </div>
      </div>


      {/* Services Section */}
      <div className="servicecon">
        <h2>Our Services</h2>
        <div className="servicesGrid">
          {services.map((service) => (
            <div key={service.id} className="serviceCard">
              <img
                src={service.image}
                alt={service.title}
                className="serviceImage"
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button
  onClick={() => navigate(`/services/${service.id}`)} // Pass the service id to the route
  className="rmbtns"
>
  Read More
</button>
            </div>
          ))}
        </div>
      </div>

      {/* Appointment Form */}
      <div id="appointment-section" className="appointmentSection">
        <Appointment />
      </div>

      {/* Testimonial Section */}
      <div id="testimonial-Carousel" className="testimonialCarousel">
        <Testimonial />
      </div>

      {/* Gallery Section */}
      <div id="gallery-container" className="gallerycontainer">
        <Gallery />
      </div>

 {/* Google Maps Section with both locations */}
 <div className="mapLocations">
        {/* Purnia Clinic Location */}
        <div className="mapContainer">
          <h3>Purnia Clinic</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.80527906095!2d87.46258717500763!3d25.776994477342324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eff9eb93b2b1f9%3A0x54f260d74d6d6ac9!2sDr%20Nayab%20Anjum%20Mind%20Clinic!5e0!3m2!1sen!2sin!4v1736527955497!5m2!1sen!2sin"
            frameborder="0"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
            title="Map showing location of Purnia Clinic, Red Cross, Purnia, Bihar"
          ></iframe>
        </div>

        {/* Araria Clinic Location */}
        <div className="mapContainer">
          <h3>Araria Clinic</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.0431362580175!2d87.46522027502064!3d26.1301364771223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef8f797a1b0acb%3A0x49c233f359a6b80c!2sDr%20Nayab%20Anjum%20Clinic%2C%20PSYCHIATRIST!5e0!3m2!1sen!2sin!4v1736529857743!5m2!1sen!2sin"
            frameborder="0"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
            title="Map showing location of Araria Clinic, Shakil Market, Araria, Bihar"
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default Home;
