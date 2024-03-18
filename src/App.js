import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const PixabayApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);

  const API_KEY = '42938536-3726839671bdd7c0229e9a4b5'; // Replace with your Pixabay API key

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
          searchTerm
        )}&image_type=photo`
      );
      const data = await response.json();
      setImages(data.hits);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div className="container"> {/* Apply container class */}
      <h1>Pixabay Image Search</h1>
      <div className="input-container"> {/* Apply input-container class */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter search term"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.previewURL} alt={image.tags} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PixabayApp;
