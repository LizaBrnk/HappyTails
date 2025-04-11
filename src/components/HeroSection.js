import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/cat-video2.mp4' autoPlay loop muted/>
      <h1>SUPPORT ANIMALS</h1>
      <p>Your kindness can save a life.</p>
      <div className='hero-btns'>
        <Button className='btns' 
        buttonStyle='btn--outline'
        buttonSize='btn--large'> 
        DONATE
        </Button>
        <Button className='btns' 
        buttonStyle='btn--pimary'
        buttonSize='btn--large'> 
        WATCH TARILER <i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
