import React from 'react';
import './Footer.css'
import { Link, useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Додає плавний ефект прокрутки
        });
    };

    const handleHomeClick = (event) => {
        event.preventDefault(); 
        if (location.pathname !== '/') {
            window.location.href = '/'; 
            setTimeout(scrollToTop, 100); 
        } else {
            scrollToTop(); 
        }
    };

    return (
        <div className='footer-container'>
            <section className='footer-subscription register-section'>
                <p className='footer-subscription-heading'>
                    Join HappyTails – become a part of our caring community!
                </p>
                <p className='footer-subscription-text'>
                Register now to:
                    <ul className='registration-benefits'>
                        <li><i className="fas fa-heart"></i> Follow your favorite animals and get updates.</li>
                        <li><i className="fas fa-bell"></i> Receive personalized recommendations.</li>
                        <li><i className="fas fa-dollar-sign"></i> Simplify future donations.</li>
                        <li><i className="fas fa-newspaper"></i> Get exclusive news and success stories.</li>
                    </ul>
                </p>
                <div className='input-areas'>
                    <form>
                        <Link to='/sign-up' className='btn--mobile'>
                            <button className='btn btn--outline btn--medium' type='button'>Sign Up</button>
                        </Link>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Help Animals</h2>
                        <Link to='#' onClick={handleHomeClick}>Home</Link>
                        <Link to='/sign-up'>Sign Up</Link>
                        <Link to='/help-animals'>Choose Your Animal</Link>
                        <Link to='/donate'>Donate</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/about#our-mission'>Our Mission</Link>
                        <Link to='/about#our-story'>Our Story</Link>
                        <Link to='/about#our-values'>Our Core Values</Link>
                        <Link to='/about#get-involved'>Get Involved</Link>
                    </div>
                    <div className='footer-link-items contact-us'>
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>Sign Up</Link>
                        <div className='social-icons-column'>
                            <Link className='social-icon-link facebook' to='https://www.facebook.com' 
                            target='_blank' aria-label='Facebook' rel="noopener noreferrer">
                                <i className='fab fa-facebook-f'></i>
                            </Link>
                            <Link className='social-icon-link instagram' to='https://www.instagram.com' 
                            target='_blank' aria-label='Instagram' rel="noopener noreferrer">
                                <i className='fab fa-instagram'></i>
                            </Link>
                            <Link className='social-icon-link youtube' to='https://www.youtube.com' 
                            target='_blank' aria-label='YouTube' rel="noopener noreferrer">
                                <i className='fab fa-youtube'></i>
                            </Link>
                            <Link className='social-icon-link telegram' to='https://web.telegram.org/k/' 
                            target='_blank' aria-label='Telegram' rel="noopener noreferrer">
                                <i className='fab fa-telegram'></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='#' onClick={handleHomeClick} className='social-logo'>
                            HappyTails <i className='fa-solid fa-cat'></i>
                        </Link>
                    </div>
                    <small className='website-rights'>HappyTails © 2025</small>
                </div>
            </section>
        </div>
    );
}

export default Footer;