import React, { useState, useEffect } from 'react';
import CardItem from '../CardItem';
import '../Cards.css';
import Footer from '../Footer';

function HelpAnimals() {
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

    // Фільтруємо тварин, залишаючи тільки тих, у кого є фотографії
    const animalsWithPhotos = animals.filter(animal => animal.photos && animal.photos.length > 0);

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
                                    text={animal.description || 'No description available'}
                                    label={animal.type}
                                    path={`/animal/${animal.id}`}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default HelpAnimals;


//**Пояснення:**

//* `useState([])`: Створює стан `animals` для зберігання масиву даних про тварин. Спочатку він порожній.
//* `useEffect(() => { ... }, [])`: Цей хук викликається після першого рендерингу компонента.
//* `fetchAnimals`: Асинхронна функція для отримання даних з Petfinder API.
    //* Спочатку отримуємо токен доступу, використовуючи ваш `API Key` та `API Secret`. **Обов'язково замініть `"YOUR_API_KEY"` та `"YOUR_API_SECRET"` на ваші реальні значення!**
    //* Потім робимо запит до `/v2/animals`, передаючи токен в заголовку `Authorization`.
    //* `params`: Параметри запиту (тип тварин, кількість). Ви можете їх змінювати.
    //* `setAnimals(animalsResponse.data.animals)`: Оновлюємо стан `animals` отриманими даними.

    //**Пояснення:**

//* `animals.map((animal) => ...)`: Перебираємо масив `animals` та для кожної тварини рендеримо компонент `CardItem`.
//* `key={animal.id}`: Додаємо унікальний `key` кожному елементу списку для оптимізації рендерингу React.
//* `src={animal.photos && animal.photos.length > 0 ? animal.photos[0].full : 'images/default-animal.jpg'}`:
    //* Перевіряємо, чи є у тварини фотографії (`animal.photos`).
    //* Якщо є, беремо URL першої фотографії (`animal.photos[0].full`).
    //* Якщо фотографій немає, використовуємо зображення за замовчуванням (`'images/default-animal.jpg'`). **Вам потрібно створити це зображення!**
//* `text={animal.description || 'No description available'}`: Використовуємо опис тварини (`animal.description`). Якщо опису немає, відображаємо текст "No description available".
//* `label={animal.type}`: Відображаємо тип тварини.
//* `path={`/animal/${animal.id}`}`: Створюємо шлях до сторінки з детальною інформацією про тварину.