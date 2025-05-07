import React, { useState } from 'react';
import './MoodTracker.css';
import Navbar from '../components/Navbar';


const moodPlaces = {
  happy: [
    {
      name: 'Disneyland',
      location: 'California, USA',
      description: 'Magical experiences and joyful moments await you.',
      image: 'mood images/disneyland.jpg'
    },
    {
      name: 'Tokyo Disneyland',
      location: 'Tokyo, Japan',
      description: 'Wholesome fun and cultural excitement for all.',
      image: 'mood images/tokyo.jpg'
    },
    {
      name: 'Universal Studios',
      location: 'Singapore',
      description: 'A place where movie magic brings happiness.',
      image: 'mood images/universalstu.png'
    },
    {
      name: 'Sunset Beach',
      location: 'Maui, Hawaii',
      description: 'Golden sand, laughter, and beach vibes.',
      image: 'mood images/sunsetbeach.jpg'
    },
    {
      name: 'Luna Park',
      location: 'Sydney, Australia',
      description: 'Fun-filled rides and waterfront views await.',
      image: 'mood images/lunapark.jpg'
    }
  ],
  sad: [
    {
      name: 'Rainy Book Café',
      location: 'Paris, France',
      description: 'Curl up with coffee and stories in the rain.',
      image: 'mood images/rainybookcafe.jpg'
    },
    {
      name: 'Countryside Retreat',
      location: 'Ireland',
      description: 'Green fields and slow peace to reflect.',
      image: 'countryretreat.jpeg'
    },
    {
      name: 'Gloomy Forest Walk',
      location: 'Germany',
      description: 'A quiet escape to be with your thoughts.',
      image: 'mood images/forestwalk.jpeg'
    },
    {
      name: 'Monsoon Library',
      location: 'Kerala, India',
      description: 'Books and rain under one cozy roof.',
      image: 'mood images/moonson.jpeg'
    },
    {
      name: 'Quiet Temple Garden',
      location: 'Kyoto, Japan',
      description: 'A spiritual walk among falling leaves.',
      image: 'mood images/konchi.jpeg'
    }
  ],
  adventurous: [
    {
      name: 'Mount Everest Base Camp',
      location: 'Nepal',
      description: 'A trek for thrill seekers and nature lovers.',
      image: 'mood images/mounteverst.jpeg'
    },
    {
      name: 'Amazon Jungle',
      location: 'Brazil',
      description: 'Wild, raw, and endlessly exciting.',
      image: 'mood images/amazonjungle.jpeg'
    },
    {
      name: 'Desert Safari',
      location: 'Dubai, UAE',
      description: 'Ride the dunes and feel the rush.',
      image: 'mood images/dessafari.jpeg'
    },
    {
      name: 'Great Barrier Reef',
      location: 'Australia',
      description: 'Dive into color and marine wonders.',
      image: 'mood images/greatbarieer.jpeg'
    },
    {
      name: 'Iceland Volcano Trek',
      location: 'Iceland',
      description: 'Hot springs, glaciers, and real adventure.',
      image: 'mood images/volcano.jpeg'
    }
  ],
  peace: [
    {
      name: 'Bali Retreat',
      location: 'Indonesia',
      description: 'Peaceful beaches and spiritual temples.',
      image: 'mood images/bali.jpeg'
    },
    {
      name: 'Lake Bled',
      location: 'Slovenia',
      description: 'Tranquil waters and mountain views.',
      image: 'mood images/lakebled.jpeg'
    },
    {
      name: 'Zen Garden',
      location: 'Kyoto, Japan',
      description: 'Harmony and calm in every stone.',
      image: 'mood images/zengar.jpeg'
    },
    {
      name: 'Kerala Backwaters',
      location: 'India',
      description: 'Boat rides through calm waters and nature.',
      image: 'mood images/backwaters.jpeg'
    },
    {
      name: 'Swiss Alps',
      location: 'Switzerland',
      description: 'Snow-capped silence and scenic peace.',
      image: 'mood images/swizalps.jpeg'
    }
  ],
  enjoyment: [
    {
      name: 'Las Vegas Strip',
      location: 'Nevada, USA',
      description: 'Lights, shows, and nonstop entertainment.',
      image: 'mood images/lasvegas.jpeg'
    },
    {
      name: 'Rio Carnival',
      location: 'Brazil',
      description: 'Colors, music, and joy everywhere.',
      image: 'mood images/riocanval.jpeg'
    },
    {
      name: 'Ibiza Beach Party',
      location: 'Spain',
      description: 'Dance, sun, and all-night fun.',
      image: 'mood images/beachcity.jpeg'
    },
    {
      name: 'Times Square',
      location: 'New York, USA',
      description: 'Iconic fun and global buzz.',
      image: 'mood images/timesquare.jpeg'
    },
    {
      name: 'Bangkok Night Market',
      location: 'Thailand',
      description: 'Delicious food and neon-lit streets.',
      image: 'mood images/bankoknight.jpeg'
    }
  ]
};

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
  };

  return (
    
    <div className="mood-tracker">
       <Navbar /> {/* ✅ Navbar added here */}
      <h2>How are you feeling today?</h2>
      <div className="mood-buttons">
        {Object.keys(moodPlaces).map((mood) => (
          <button key={mood} onClick={() => handleMoodClick(mood)}>
            {mood.charAt(0).toUpperCase() + mood.slice(1)}
          </button>
        ))}
      </div>

      {selectedMood && (
        <>
          <h3>Places for "{selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1)}"</h3>
          <div className="places-grid">
            {moodPlaces[selectedMood].map((place, index) => (
              <div key={index} className="place-card">
                <img src={place.image} alt={place.name} />
                <h4>{place.name}</h4>
                <p><strong>Location:</strong> {place.location}</p>
                <p>{place.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MoodTracker;
