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
                    text="Together we can change someone's life."
                    label='Animal'
                    path='/services'
                />
                <CardItem 
                    src="images/not-dog.jpg"
                    text="Together we can change someone's life."
                    label='Animal'
                    path='/services'
                />
            </ul>
            <ul className="cards__items">
                <CardItem 
                    src="images/shelter-cat.jpg"
                    text="Together we can change someone's life."
                    label='Animal'
                    path='/services'
                />
                <CardItem 
                    src="images/dog.jpg"
                    text="Together we can change someone's life."
                    label='Animal'
                    path='/services'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
