import React, { useState } from 'react';
import './Hotels.css';
import Navbar from '../components/Navbar';
import SearchRedirect from '../components/SearchRedirect';


const hotelsData = {
  "5 STAR": [
    { name: "Grand Royal Palace", location: "Delhi", image: "/images/royalpalace.jpeg", budget: "₹15,000/night", description: "Experience ultimate luxury in the heart of Delhi with world-class amenities." },
    { name: "Elite Skyview", location: "Mumbai", image: "/images/eliteskyview.jpg", budget: "₹18,000/night", description: "A rooftop view of the ocean and city skyline that you’ll never forget." },
    { name: "Tranquil Retreat", location: "Kerala", image: "/images/tranquilretreat.jpg", budget: "₹12,000/night", description: "Peaceful backwaters and a spa that redefines relaxation." },
    { name: "Heritage Luxe", location: "Jaipur", image: "/images/hl.jpeg", budget: "₹14,500/night", description: "Live like royalty in this magnificent pink-city palace hotel." },
  ],
  "4 STAR": [
    { name: "Palm Grove", location: "Goa", image: "/images/palmgroov.jpeg", budget: "₹8,500/night", description: "A beach-side hotel perfect for a vibrant, tropical getaway." },
    { name: "Hilltop Haven", location: "Shimla", image: "/images/hilltop.jpeg", budget: "₹7,000/night", description: "Cozy hillside charm with scenic mountain views." },
    { name: "Cityscape Lodge", location: "Bangalore", image: "/images/cityscapelodge.jpeg", budget: "₹9,000/night", description: "Modern, tech-driven stay in India’s silicon valley." },
    { name: "Lake Serenity", location: "Udaipur", image: "/images/lakeserenity.jpeg", budget: "₹8,200/night", description: "Romantic lake views and heritage-style rooms." },
  ],
  "3 STAR": [
    { name: "Budget Inn", location: "Chennai", image: "/images/budgeinn.jpeg", budget: "₹4,500/night", description: "Comfort and convenience without breaking the bank." },
    { name: "City Stay", location: "Hyderabad", image: "/images/citystay.jpeg", budget: "₹3,800/night", description: "Ideal for business or quick stays in the city center." },
    { name: "Garden View", location: "Pune", image: "/images/gardenview.jpeg", budget: "₹5,200/night", description: "Calm surroundings and easy access to city attractions." },
    { name: "Metro Comforts", location: "Kolkata", image: "/images/metrocomfort.jpeg", budget: "₹4,200/night", description: "Friendly staff and well-connected location for easy travel." },
  ]
};

const Hotels = () => {
  const [selectedCategory, setSelectedCategory] = useState("5 STAR");

  return (
    <div className="hotels-page">
      <div className="background-image"></div> {/* Apply background image here */}
      <Navbar />
       <SearchRedirect />  {/* Search bar for Booking.com */}

      <h1>Hotels</h1>
      <div className="category-buttons">
        {Object.keys(hotelsData).map(category => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category.toUpperCase()} Hotels
          </button>
        ))}
      </div>
      <div className="hotels-list">
        {hotelsData[selectedCategory].map((hotel, index) => (
          <div key={index} className="hotel-card">
            <img src={hotel.image} alt={hotel.name} />
            <h2>{hotel.name}</h2>
            <p><strong>Location:</strong> {hotel.location}</p>
            <p><strong>Budget:</strong> {hotel.budget}</p>
            <p>{hotel.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;