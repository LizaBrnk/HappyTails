import React from 'react';
import { Button } from './Button';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the HappyTails newsletter to receive the newest information about fundraising
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Help Animals</h2>
                        <Link to='/'>Home</Link>
                        <Link to='/sign-up'>Sign Up</Link>
                        <Link to='/help-animals'>Choose Your Animal</Link>
                        <Link to='/'>Donate</Link>
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
                            <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                                <i className='fab fa-facebook-f'></i>
                            </Link>
                            <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                                <i className='fab fa-instagram'></i>
                            </Link>
                            <Link className='social-icon-link youtube' to='/' target='_blank' aria-label='YouTube'>
                                <i className='fab fa-youtube'></i>
                            </Link>
                            <Link className='social-icon-link telegram' to='/' target='_blank' aria-label='Telegram'>
                                <i className='fab fa-telegram'></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
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