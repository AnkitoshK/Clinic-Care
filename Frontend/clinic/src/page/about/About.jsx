import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./About.module.css";

const AboutUs = () => {
const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    // Fetch About Us data from the backend
    axios
      .get("http://127.0.0.1:8000/api/myapp/about-us/") // Backend endpoint
      .then((response) => {
        setAboutData(response.data); // Store data in state
      })
      .catch((error) => {
        console.error("There was an error fetching the About Us data!", error);
      });
  }, []);

  // If data is not yet fetched, return loading state
  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.aboutMePage}>
      {/* Main Title */}
      <h1 className={styles.mainTitle}>{aboutData.main_title}</h1>

      {/* Subheading */}
      <span className={styles.subheading}>{aboutData.subheading}</span>

      {/* Horizontal Line for Styling */}
      <hr className={styles.horizontalLine} />

      {/* Content Wrapper */}
      <div className={styles.contentWrapper}>
        {/* First Div: Paragraph */}
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraphText}>{aboutData.description}</p>
        </div>

        {/* Second Div: Blog */}
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img
              src={`http://127.0.0.1:8000${aboutData.image_1}`}
              alt="State-of-the-art facilities"
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <img
              src={`http://127.0.0.1:8000${aboutData.image_2}`}
              alt="Experienced Staff"
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <img
              src={`http://127.0.0.1:8000${aboutData.image_3}`}
              alt="Comfortable Atmosphere"
              className={styles.image}
            />
          </div>
        </div>
      </div>

      {/* Cards Section - Moved Outside Content Wrapper */}
      <div className={styles.cardsSection}>
        <div className={styles.card}>
          <img
            src={`http://127.0.0.1:8000${aboutData.blog_image_1}`}
            alt="Card 1"
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>{aboutData.blog_title_1}</h4>
            <p className={styles.cardDescription}>{aboutData.blog_description_1}</p>
            <a href="/Blog">READ MORE</a>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src={`http://127.0.0.1:8000${aboutData.blog_image_2}`}
            alt="Card 2"
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>{aboutData.blog_title_2}</h4>
            <p className={styles.cardDescription}>{aboutData.blog_description_2}</p>
            <a href="/Blog">READ MORE</a>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src={`http://127.0.0.1:8000${aboutData.blog_image_3}`}
            alt="Card 3"
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>{aboutData.blog_title_3}</h4>
            <p className={styles.cardDescription}>{aboutData.blog_description_3}</p>
            <a href="/Blog">READ MORE</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
