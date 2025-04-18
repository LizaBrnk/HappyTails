import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Give a chance for a better life — help animals!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem 
                    src="images/welfare-cat.jpg"
                    text="Help her get back on her feet."
                    label='Cat needs help'
                    path='/animal/11'
                />
                <CardItem 
                    src="images/not-dog.jpg"
                    text="Waiting for his family behind the fence."
                    label='Dog wants to find home'
                    path='/animal/1'
                />
            </ul>
            <ul className="cards__items">
                <CardItem 
                    src="images/shelter-cat.jpg"
                    text="Dreaming of a house behind this fence."
                    label='Cat wants to find home'
                    path='/animal/2'
                />
                <CardItem 
                    src="images/dog.jpg"
                    text="Financial support will provide her with quality treatment."
                    label='Dog needs help'
                    path='/animal/22'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
