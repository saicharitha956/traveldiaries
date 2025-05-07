import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './AddStory.css';

const AddStory = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    image: null
  });
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });
      if (file) {
        setPreviewImage(URL.createObjectURL(file));
      } else {
        setPreviewImage(null);
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.post('http://localhost:5000/api/stories', data);
      alert('Story added!');
      setFormData({ title: '', description: '', date: '', location: '', image: null });
      setPreviewImage(null);
    } catch (err) {
      console.error(err);
      alert('Failed to add story');
    }
  };

  return (
    <div className="content-wrapper">
      <Navbar /> {/* ✅ Added Navbar */}

      <div className="add-story-page">
        <div className="add-story-description">
          <h2>Share Your Travel Story!</h2>
          <p>
            Got an amazing travel experience you'd love to share with the world?
            This is the perfect place! Tell us about your adventures, the places you
            visited, the dates of your journey, and where it all happened. Don't
            forget to upload a captivating image to bring your story to life.
          </p>
          <p>
            Help inspire others to explore and create their own unforgettable
            memories. Start sharing your story today!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="add-story-form">
          <h2>Add Your Story Details</h2>
          <input
            className="story-input"
            name="title"
            type="text"
            placeholder="Title"
            onChange={handleChange}
            required
          /><br /><br />
          <textarea
            className="story-textarea"
            name="description"
            placeholder="Description"
            onChange={handleChange}
            required
          /><br /><br />
          <input
            className="story-input"
            name="date"
            type="date"
            onChange={handleChange}
            required
          /><br /><br />
          <input
            className="story-input"
            name="location"
            type="text"
            placeholder="Location"
            onChange={handleChange}
            required
          /><br /><br />
          <div className="file-input-wrapper">
            <input
              className="story-input"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleChange}
              required
            />
            {previewImage && (
              <div className="image-preview">
                <img
                  src={previewImage}
                  alt="Preview"
                  style={{ maxWidth: '100px', maxHeight: '100px' }}
                />
              </div>
            )}
          </div>
          <br /><br />
          <button type="submit" className="story-button">Submit</button>
        </form>
      </div>
      <div className="background-image"></div>
    </div>
  );
};

export default AddStory;
