import React from 'react';
import CardItem from '../CardItem';
import '../Cards.css';
import Footer from '../Footer';

function HelpAnimals() { 
    return (
        <>
        <div className='cards'>
            <h1>They need our care - help save the animal!</h1>
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
                            src="images/dog.jpg"
                            text="Financial support will provide her with quality treatment."
                            label='Dog needs help'
                            path='/animal/22'
                        />
                    </ul> 
                    <ul className="cards__items">  
                        <CardItem 
                            src="images/domestic-cat.jpg"
                            text="The operation is a chance for a new life."
                            label='Cat needs help'
                            path='/animal/33'
                        />
                        <CardItem 
                            src="images/sad-dog.jpg"
                            text="Without surgery, he will not be able to live a full life."
                            label='Dog needs help'
                            path='/animal/44'
                        />
                    </ul> 
                    <ul className="cards__items">
                        <CardItem 
                            src="images/rab.jpg"
                            text="Urgent surgery will save him from pain and suffering."
                            label='Rabbit needs help'
                            path='/animal/55'
                        />
                        <CardItem 
                            src="images/little-dog.jpg"
                            text="Small pets, big hearts."
                            label='Dog needs help'
                            path='/animal/66'
                        />
                        <CardItem 
                            src="images/cat-with-cone.jpg"
                            text="Your help will provide him with the necessary treatment."
                            label='Cat needs help'
                            path='/animal/77'
                        />
                        <CardItem 
                            src="images/black-cat.jpg"
                            text="This operation will return the joy of movement to him."
                            label='Cat needs help'
                            path='/animal/88'
                        />
                    </ul>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default HelpAnimals;