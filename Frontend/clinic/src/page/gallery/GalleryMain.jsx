import React, { useEffect, useState } from 'react';

const GalleryMain = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from the Django backend
    fetch('http://127.0.0.1:8000/api/myapp/gallery-main/')
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <p className="gallery-description">
        "Step into healing spaces, where compassion meets innovation. Explore our clinic gallery, capturing moments of hope, care, and resilience. A visual narrative of our commitment to your well-being, one frame at a time."
      </p>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
          <img
              src={`http://localhost:8000${image.image}`} // Ensure full URL is used
              alt={image.alt_text}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryMain;
