import React, { useState, useEffect } from 'react';
import './AdoptionForm.css';
import { useLocation, useNavigate } from 'react-router-dom';

function AdoptionForm() {
  const location = useLocation();
  const [fullName, setFullName] = useState('');
  const [animalName, setAnimalName] = useState(location.state?.animalName || '');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
        fullName,
        animalName,
        phone,
        email,
        country,
        city,
        address,
        comment,
    };

    try {
        const response = await fetch('http://localhost:3001/api/adopt/apply', { // Відправляємо на новий ендпоінт
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Дані для всиновлення надіслано:', data);
            alert('Вашу заявку на всиновлення надіслано!');
            setFullName('');
            setAnimalName('');
            setPhone('');
            setEmail('');
            setCountry('');
            setCity('');
            setAddress('');
            setComment('');
            navigate('/');
        } else {
            console.error('Помилка при відправці даних:', data);
            alert(data.msg || 'Не вдалося надіслати заявку.');
        }
    } catch (error) {
        console.error('Помилка з\'єднання з сервером:', error);
        alert('Виникла помилка при відправці заявки.');
    }
};

  useEffect(() => {
    console.log('Attempting to get from localStorage');
    const storedAnimalName = localStorage.getItem('animalNameToAdopt');
    console.log('Got from localStorage:', storedAnimalName);
    if (storedAnimalName) {
      setAnimalName(storedAnimalName);
      localStorage.removeItem('animalNameToAdopt');
      console.log('Set animalName:', storedAnimalName, 'and removed from localStorage');
    } else {
      console.warn('Animal name not found in localStorage');
      // navigate('/help-animals');
    }
  }, [navigate]);

  return (
    <div className="adoption-form-container">
      <h1>Application for Adoption</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="animalName">Animal's Name:</label>
          <input
            type="text"
            id="animalName"
            value={animalName}
            onChange={(e) => setAnimalName(e.target.value)}
            required
            readOnly /* Включаємо атрибут readOnly */
          />
        </div>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment (optional):</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit Application</button>
      </form>
    </div>
  );
}

export default AdoptionForm;