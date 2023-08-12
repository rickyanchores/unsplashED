import React, { useState } from 'react';
import { searchPhotos } from './Components/Unsplash/Unsplash';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const results = await searchPhotos(searchTerm);
      setPhotos(results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1 className="text-orange-600 font-mono">unsplash-ED</h1>
      <form onSubmit={handleSearchSubmit} className="form mt-5 rounded">
        <input
          type="text"
          className="input p-2 m-5 rounded font-mono"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for photos..."
        />
        <button type="submit" className="bg-slate-800">Search</button>
      </form>
      <div className="photo-list flex flex-wrap">
        {photos.map((photo) => (
          <div className='photo-container bg-slate-900 p-5 m-5 rounded-lg'>
            <img className="image"
            key={photo.id}
            src={photo.urls.regular}
            alt={photo.alt_description}
          />
          </div>

        ))}
      </div>
      <div className='footer m-5'>Created by Ricky A</div>
    </div>
  );
}

export default App;