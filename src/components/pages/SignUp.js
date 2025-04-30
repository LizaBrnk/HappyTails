import React, { useState } from 'react';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        const userData = {
            username,
            email,
            phone,
            password,
        };

        console.log('Registration data:', userData);

        try {
            const response = await fetch('http://localhost:3001/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Registration successful:', data);
                alert('Registration successful!');

                // Store token and login status
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('loggedInUsername', username);

                // Dispatch event to Navbar
                window.dispatchEvent(new Event('userLoggedIn'));

                // Redirect to home
                navigate('/');

                // Clear form
                setUsername('');
                setEmail('');
                setPhone('');
                setPassword('');
                setConfirmPassword('');
                setErrorMessage('');
            } else {
                setErrorMessage(data.msg || 'Registration failed');
                console.error('Registration failed:', data);
            }
        } catch (error) {
            setErrorMessage('Connection error');
            console.error('Request error:', error);
        }
    };

    return (
        <div className="sign-up-page">
            <h1 className="sign-up">Sign Up</h1>
            <form onSubmit={handleSubmit} className="sign-up-form">
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
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit" className="sign-up-button">Sign Up</button>
            </form>
            <div className="login-link">
                <p>Already have an account?</p>
                <Link to="/login">Log In</Link>
            </div>
        </div>
    );
}