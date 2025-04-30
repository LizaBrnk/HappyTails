import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';

export default function LogIn() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to home if already logged in
        if (localStorage.getItem('isLoggedIn') === 'true') {
            navigate('/');
        }
    }, [navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            username,
            email,
            password,
        };

        console.log('Login data:', userData);

        try {
            const response = await fetch('http://localhost:3001/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Login successful:', data);
                alert('Login successful!');
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('loggedInUsername', username);

                // Dispatch an event to notify Navbar of login
                window.dispatchEvent(new Event('userLoggedIn'));

                navigate('/');
                setEmail('');
                setPassword('');
                setErrorMessage('');
            } else {
                setErrorMessage(data.msg || 'Login failed');
                console.error('Login failed:', data);
            }
        } catch (error) {
            setErrorMessage('Connection error');
            console.error('Request error:', error);
        }
    };

    return (
        <div className="login-page">
            <h1 className="log-in">Log In</h1>
            <form onSubmit={handleSubmit} className="log-in-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit" className="log-in-button">Log In</button>
            </form>
            <div className="sign-up-link">
                <p>Don't have an account?</p>
                <Link to="/sign-up">Sign Up</Link>
            </div>
        </div>
    );
}