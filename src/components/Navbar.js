import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
    const navigate = useNavigate();

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);

        // Listen for the custom event
        const handleUserLoggedIn = () => {
            setIsLoggedIn(true);
        };
        window.addEventListener('userLoggedIn', handleUserLoggedIn);

        // Clean up event listeners
        return () => {
            window.removeEventListener('resize', showButton);
            window.removeEventListener('userLoggedIn', handleUserLoggedIn);
        };
    }, []);

    const handleLogout = () => {
        console.log("handleLogout called"); // Add this line
        localStorage.removeItem('authToken');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('loggedInUsername');
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        HappyTails <i className='fa-solid fa-cat'></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/help-animals' className='nav-links' onClick={closeMobileMenu}>
                                Help Animals
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About us
                            </Link>
                        </li>
                        {isLoggedIn ? (
                            <li className='nav-item'>
                                <Button buttonStyle='btn--outline' onClick={handleLogout}>
                                    Log Out
                                </Button>
                            </li>
                        ) : (
                            <li className='nav-item'>
                                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                    Sign Up
                                </Link>
                            </li>
                        )}
                    </ul>
                    {button && !isLoggedIn && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;