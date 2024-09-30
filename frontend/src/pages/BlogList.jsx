import React, { useEffect, useState } from 'react';
import { getBlogs, deleteBlog } from '../services/api';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await getBlogs();
        setBlogs(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await deleteBlog(id, token);
      setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Blog List</h1>
      {blogs.map(blog => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <button onClick={() => handleDelete(blog._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
