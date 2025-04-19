import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        const fetchAnimals = async () => {
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
                    console.error('Помилка отримання токена:', tokenResponse.status, errorText);
                    return;
                }

                const tokenData = await tokenResponse.json();
                const token = tokenData.access_token;

                const animalsResponse = await fetch('https://api.petfinder.com/v2/animals', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                    // params як частина URL для GET-запитів fetch
                });

                if (!animalsResponse.ok) {
                    const errorText = await animalsResponse.text();
                    console.error('Помилка отримання даних про тварин:', animalsResponse.status, errorText);
                    return;
                }

                const animalsData = await animalsResponse.json();
                setAnimals(animalsData.animals);

            } catch (error) {
                console.error('Сталася помилка:', error);
            }
        };

        fetchAnimals();
    }, []);

    // Фільтруємо тварин, залишаючи тільки тих, у кого є фотографії, та беремо перші 4
    const animalsWithPhotos = animals.filter(animal => animal.photos && animal.photos.length > 0).slice(0, 4);

    return (
        <div className='cards'>
            <h1>Open your heart, give a home - help homeless animals!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {animalsWithPhotos.map((animal) => (
                            <CardItem
                                key={animal.id}
                                src={animal.photos[0].full}
                                text={animal.description || 'No description available'}
                                label={animal.type}
                                path={`/animal/${animal.id}`}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;