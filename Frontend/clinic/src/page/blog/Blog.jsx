import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Blog.module.css';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/myapp/blogs/'); // Adjust URL as needed
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className={styles.blogPage}>
      <div className={styles.blogContainer}>
        <h1 className="blog-page-heading">Blogs</h1>
        {blogs.map((blog) => (
          <div key={blog.id} className={styles.card}>
            <img src={blog.image} alt={blog.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>{blog.title}</h4>
              <p className={styles.cardDescription}>{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
