import React from 'react';
import './PopUp.css';
import { Link } from 'react-router-dom';

function PopUp({ animal, onClose }) {
  if (!animal) {
    return null;
  }

  const handleAdoptClick = () => {
    localStorage.setItem('animalNameToAdopt', animal.name);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
        <div className="popup-inner">
          {animal.photos && animal.photos.length > 0 && (
            <img src={animal.photos[0].full} alt={animal.name} className="popup-image" />
          )}
          <div className="popup-details">
            <h2>{animal.name}</h2>
            {animal.breeds && animal.breeds.primary && <p>Breed: {animal.breeds.primary}</p>}
            {animal.age && <p>Age: {animal.age}</p>}
            {animal.gender && <p>Gender: {animal.gender}</p>}
            {animal.size && <p>Size: {animal.size}</p>}
            {animal.description && <p className="popup-description">{animal.description}</p>}
          </div>
        </div>
        <div className="popup-buttons">
        <Link to="/donate" className="popup-button donate-button-link">
            Donate
          </Link>
          <Link
            to="/adopt"
            className="popup-button adopt-button-link"
            onClick={handleAdoptClick}
          >
            Adopt
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PopUp;