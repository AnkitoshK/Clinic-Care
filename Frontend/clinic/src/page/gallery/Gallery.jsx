import React , { useEffect, useState }from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom'; // Import NavLink


const Gallery = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/myapp/gallery-images/')
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
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
    <img src={image.image} alt={image.title} className="gallery-image" />
    </div>
  ))}
</div>
{/* "View More" Button */}
<div className="view-more">
        <NavLink to="/gallerymain" className="view-more-button">
          View More
        </NavLink>
      </div>
    </div>
  );
};

export default Gallery;