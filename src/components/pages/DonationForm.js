import React, { useState } from 'react';
import './DonationForm.css'; // Ensure this file exists

function DonationForm() {
  const [fullName, setFullName] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const donationData = {
      fullName,
      amount,
      paymentMethod,
      cardNumber,
      expiryDate,
      cvv,
      email,
    };
    console.log('Donation Data:', donationData);
    // Here you would integrate with a real payment system
    alert(`Thank you for your donation of $${amount}!`);
    // Optionally clear the form after submission
    setFullName('');
    setAmount('');
    setPaymentMethod('');
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
    setEmail('');
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
            {/* Add other payment methods if needed */}
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
                pattern="[0-9]{16}" // Example pattern for 16 digits
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
                  pattern="(0[1-9]|1[0-2])\/([0-9]{2})" // Example pattern MM/YY
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
                  pattern="[0-9]{3,4}" // Pattern for 3 or 4 digits
                  title="Enter 3 or 4 digit CVV"
                  required
                />
              </div>
            </div>
          </>
        )}

        <button type="submit" className="submit-button">Donate Now</button>
      </form>
    </div>
  );
}

export default DonationForm;