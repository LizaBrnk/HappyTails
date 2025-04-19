import React, { useState, useEffect } from 'react';
import CardItem from '../CardItem';
import '../Cards.css';
import Footer from '../Footer';
import PopUp from './PopUp';

function HelpAnimals() {
  const [animals, setAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      setLoading(true);
      setError(null);
      try {
        const tokenResponse = await fetch('https://api.petfinder.com/v2/oauth2/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `grant_type=client_credentials&client_id=d36ZadaAXBh4eHGZXV4OzytfZoB404RfRQelDvMOKKlzrDDM1c&client_secret=R1xqzecHmWGCIpX0krx9qtLiP78qmwulehgicHXb`,
        });

        if (!tokenResponse.ok) {
          const errorText = await tokenResponse.text();
          throw new Error(`Помилка отримання токена: ${tokenResponse.status} ${errorText}`);
        }

        const tokenData = await tokenResponse.json();
        const token = tokenData.access_token;

        const animalsResponse = await fetch('https://api.petfinder.com/v2/animals', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          // Додайте параметри для отримання більшої кількості деталей, якщо потрібно
        });

        if (!animalsResponse.ok) {
          const errorText = await animalsResponse.text();
          throw new Error(`Помилка отримання даних про тварин: ${animalsResponse.status} ${errorText}`);
        }

        const animalsData = await animalsResponse.json();
        setAnimals(animalsData.animals);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  const openPopUp = (animal) => {
    setSelectedAnimal(animal);
  };

  const closePopUp = () => {
    setSelectedAnimal(null);
  };

  const animalsWithPhotos = animals.filter(animal => animal.photos && animal.photos.length > 0);

  if (loading) {
    return <div>Loading animals...</div>;
  }

  if (error) {
    return <div>Error loading animals: {error}</div>;
  }

  return (
    <>
      <div className='cards'>
        <h1>Open your heart, give a home - help homeless animals!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              {animalsWithPhotos.map((animal) => (
                <CardItem
                  key={animal.id}
                  src={animal.photos[0].full}
                  text={animal.description || 'Немає опису'}
                  label={animal.type}
                  path={`/animal/${animal.id}`} // Можете залишити або видалити
                  onClick={() => openPopUp(animal)} // Додаємо обробник кліку безпосередньо на CardItem
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
      {selectedAnimal && <PopUp animal={selectedAnimal} onClose={closePopUp} />}
    </>
  );
}

export default HelpAnimals;