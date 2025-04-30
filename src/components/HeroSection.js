import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; // Import Link
import './HeroSection.css';
import './Button.css'; // Import Button styles

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

function HeroSection() {
    const buttonStyle = 'btn--outline';
    const buttonSize = 'btn--large';
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <div className='hero-container'>
            <video src='/videos/cat-video2.mp4' autoPlay loop muted />
            <h1>SUPPORT ANIMALS</h1>
            <p>Your kindness can save a life.</p>
            <div className='hero-btns'>
                <Link to='/donate' className='btn-mobile'>
                    <button
                        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    >
                        DONATE
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;