import React from 'react';
import CardItem from '../CardItem';
import '../Cards.css';
import Footer from '../Footer';

function AdoptAnimals() { 
    return (
        <>
        <div className='cards'>
            <h1>Open your heart, give a home - help homeless animals!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/not-dog.jpg"
                            text="Waiting for his family behind the fence."
                            label='Dog wants to find home' 
                            path='/animal/1'
                        />
                        <CardItem 
                            src="images/shelter-cat.jpg"
                            text="Dreaming of a house behind this fence."
                            label='Cat wants to find home'
                            path='/animal/2'
                        />
                    </ul> 
                    <ul className="cards__items">  
                        <CardItem 
                            src="images/mini-cat.jpg"
                            text="He imagines his home on the other side."
                            label='Cat wants to find home'
                            path='/animal/3'
                        />
                        <CardItem 
                            src="images/dog-sh.jpg"
                            text="Dreaming of his own corner there, further away."
                            label='Dog wants to find home'
                            path='/animal/4'
                        />
                    </ul> 
                    <ul className="cards__items">
                        <CardItem 
                            src="images/cat-fen.jpg"
                            text="His dream is a home waiting for him."
                            label='Cat wants to find home'
                            path='/animal/5'
                        />
                        <CardItem 
                            src="images/pet.jpg"
                            text="His hope is a house visible in the distance."
                            label='Dog wants to find home'
                            path='/animal/6'
                        />
                        <CardItem 
                            src="images/pit-dog.jpg"
                            text="There, behind this fence, his heart sees home."
                            label='Dog wants to find home'
                            path='/animal/7'
                        />
                        <CardItem 
                            src="images/red-cat.jpg"
                            text="His dream house is on the other side."
                            label='Cat wants to find home'
                            path='/animal/8'
                        />
                    </ul>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default AdoptAnimals;