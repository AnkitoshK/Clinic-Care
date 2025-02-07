import React, { useState, useEffect } from "react";
import axios from "axios";

const Testimonial = () => {
  // Testimonials data state
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch testimonials from the backend
    axios
      .get("http://127.0.0.1:8000/api/myapp/testimonials/")
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the testimonials:", error);
      });
  }, []);

  // Function to show the previous testimonial
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Function to show the next testimonial
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonialSection">
      <h2 className="testimonialTitle">Testimonials</h2>
      <div className="testimonialsContainer">
        {/* Current Testimonial */}
        {testimonials.length > 0 && (
          <div className="testimonialItem">
            <img
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].author}
              className="testimonialAvatar"
            />
            <div className="testimonialContent">
              <p className="testimonialText">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="testimonialAuthorDetails">
                <p className="testimonialAuthor">
                  {testimonials[currentIndex].author}
                </p>
                <p className="testimonialRating">
                  {testimonials[currentIndex].rating}
                </p>
              </div>
            </div>

            {/* Arrow Buttons */}
            <div className="arrowButtons">
              <button className="arrowButton left" onClick={handlePrevious}>
                &lt;
              </button>
              <button className="arrowButton right" onClick={handleNext}>
                &gt;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
