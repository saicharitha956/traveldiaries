  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import Navbar from '../components/Navbar'; // ✅ Update path if needed
  import './Home.css';

  // Function to extract a dominant color from an image
  const getColorFromImage = (imageUrl) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(img.width / 2, img.height / 2, 1, 1).data;
        const color = `rgba(${imageData[0]}, ${imageData[1]}, ${imageData[2]}, 0.7)`;
        resolve(color);
      };
      img.onerror = () => resolve('rgba(0, 123, 255, 0.7)');
      img.src = imageUrl;
    });
  };

  const Home = () => {
    const [stories, setStories] = useState([]);
    const [cardGlowColors, setCardGlowColors] = useState({});
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null);   // Add error state

    useEffect(() => {
      setLoading(true);
      axios.get('http://localhost:5000/api/stories')
        .then(async (res) => {
          console.log("Data received from API:", res.data); // Log the received data
          setStories(res.data);
          const colors = {};
          for (const story of res.data) {
            const imageUrl = `http://localhost:5000/uploads/${story.image}`;
            const color = await getColorFromImage(imageUrl);
            colors[story._id] = color;
          }
          setCardGlowColors(colors);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching stories:", err); // Log the error
          setError("Failed to load stories.");
          setLoading(false);
        });
    }, []);

    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/api/stories/${id}`);
        setStories((prev) => prev.filter((story) => story._id !== id));
        alert('Story deleted successfully');
      } catch (err) {
        console.error(err);
        alert('Failed to delete story');
      }
    };

    if (loading) {
      return <div>Loading stories...</div>; // Basic loading indicator
    }

    if (error) {
      return <div>Error: {error}</div>; // Basic error message
    }

    return (
      <div className="home-container">
        <Navbar /> {/* ✅ Navbar added here */}
        <div className="background-image"></div>
        <div className="content-wrapper">
          <center><h1>Travel Diaries</h1></center>
          <div className="stories-container">
            {stories.map((story) => (
              <div
                className="story-card-wrapper"
                key={story._id}
                style={{
                  '--glow-color': cardGlowColors[story._id] || 'rgba(0, 123, 255, 0.7)',
                }}
              >
                <div className="story-card">
                  <div className="story-front">
                    <img
                      src={`http://localhost:5000/uploads/${story.image}`}
                      alt={story.title}
                      style={{ height: '70%' }}
                    />
                    <h2>{story.title}</h2>
                  </div>
                  <div
                    className="story-back"
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                  >
                    <div>
                      <h2>{story.title}</h2>
                      <p>{story.description}</p>
                      <p><strong>Date:</strong> {new Date(story.date).toLocaleDateString()}</p>
                      <p><strong>Location:</strong> {story.location}</p>
                    </div>
                    <button onClick={() => handleDelete(story._id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Home;