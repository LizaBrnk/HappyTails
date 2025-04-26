import React, { useState } from 'react';
import './DonationForm.css';
import { useNavigate } from 'react-router-dom';

function DonationForm() {
    const [fullName, setFullName] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [email, setEmail] = useState('');
    const [cryptoType, setCryptoType] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const donationData = {
            fullName,
            amount,
            paymentMethod,
            cardNumber: paymentMethod === 'creditCard' ? cardNumber : undefined,
            expiryDate: paymentMethod === 'creditCard' ? expiryDate : undefined,
            cvv: paymentMethod === 'creditCard' ? cvv : undefined,
            email,
            cryptoType: paymentMethod === 'crypto' ? cryptoType : undefined,
        };
        console.log('Donation Data to send:', donationData);

        try {
            const response = await fetch('http://localhost:3001/api/donate/process', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(donationData),
            });

            const data = await response.json();
            console.log('Server Response:', data);
            if (response.ok) {
                alert(data.message || `Thank you for your donation of $${amount}!`);
                // Очищення форми після успішної відправки
                setFullName('');
                setAmount('');
                setPaymentMethod('');
                setCardNumber('');
                setExpiryDate('');
                setCvv('');
                setEmail('');
                setCryptoType('');
                navigate('/');
            } else {
                alert(data.message || 'Failed to process your donation.');
            }
        } catch (error) {
            console.error('Error sending data:', error);
            alert('An error occurred while processing your donation.');
        }
    };

    return (
        <div className="donation-form-container">
            <h1>Make a Donation</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
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
                    <label htmlFor="amount">Amount (USD):</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min="1"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="paymentMethod">Payment Method:</label>
                    <select
                        id="paymentMethod"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        required
                    >
                        <option value="">Select Method</option>
                        <option value="creditCard">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="crypto">Crypto</option>
                        {/* Додайте інші методи оплати, якщо потрібно */}
                    </select>
                </div>

                {paymentMethod === 'creditCard' && (
                    <>
                        <div className="form-group">
                            <label htmlFor="cardNumber">Card Number:</label>
                            <input
                                type="text"
                                id="cardNumber"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                pattern="[0-9]{16}" // Приклад патерну для 16 цифр
                                title="Enter a 16-digit card number"
                                required
                            />
                        </div>
                        <div className="form-group card-details">
                            <div>
                                <label htmlFor="expiryDate">Expiry Date (MM/YY):</label>
                                <input
                                    type="text"
                                    id="expiryDate"
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                    placeholder="MM/YY"
                                    pattern="(0[1-9]|1[0-2])\/([0-9]{2})" // Приклад патерну MM/YY
                                    title="Enter expiry date in MM/YY format"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="cvv">CVV:</label>
                                <input
                                    type="text"
                                    id="cvv"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    pattern="[0-9]{3,4}" // Патерн для 3 або 4 цифр
                                    title="Enter 3 or 4 digit CVV"
                                    required
                                />
                            </div>
                        </div>
                    </>
                )}
                {paymentMethod === 'crypto' && (
                    <div className="form-group">
                        <label htmlFor="cryptoType">Select Cryptocurrency:</label>
                        <select
                            id="cryptoType"
                            value={cryptoType}
                            onChange={(e) => setCryptoType(e.target.value)}
                            required
                        >
                            <option value="">Select Crypto</option>
                            <option value="bitcoin">Bitcoin (BTC)</option>
                            <option value="ethereum">Ethereum (ETH)</option>
                            <option value="litecoin">Litecoin (LTC)</option>
                            {/* Add other cryptocurrencies as needed */}
                        </select>
                    </div>
                )}
                <button type="submit" className="submit-button">Donate Now</button>
            </form>
        </div>
    );
}

export default DonationForm;