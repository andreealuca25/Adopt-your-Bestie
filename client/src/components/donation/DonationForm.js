<<<<<<< HEAD
import { useState } from "react";
=======
<<<<<<< Updated upstream
import React, { useState } from "react";
=======
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './DonationForm.css';
>>>>>>> Stashed changes
>>>>>>> client_BMF

const DonationForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        amount: '',
        phoneNumber: '',
        billingAddress: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

<<<<<<< Updated upstream
  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO: validate form data and send it to the server
    console.log(formData);
    alert("Thank you for your donation!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-lg font-semibold mb-6">Make a Donation</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg grid gap-4 grid-cols-2 grid-rows-3"
      >
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
=======
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { amount, ...billingDetails } = formData;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
            billing_details: {
              name: `${billingDetails.firstName} ${billingDetails.lastName}`,
              email: billingDetails.email,
              phone: billingDetails.phoneNumber,
              address: {
                line1: billingDetails.billingAddress,
              },
            },
        });

        if (error) {
            setError(error.message);
            setSuccess('');
        } else {
            const response = await fetch('http://localhost:8080/payment/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: parseInt(amount) * 100, currency: 'ron' }), // Amount in cents
            });
>>>>>>> Stashed changes

            const paymentIntent = await response.json();

<<<<<<< Updated upstream
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Donation Amount ($)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            required
            value={formData.amount}
            defaultValue={5}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cardInfo"
            className="block text-sm font-medium text-gray-700"
          >
            Card Information
          </label>
          <input
            type="text"
            id="cardInfo"
            name="cardInfo"
            required
            value={formData.cardInfo}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="1234 5678 9123 4567"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cardExpiry"
            className="block text-sm font-medium text-gray-700"
          >
            Card Expiry
          </label>
          <input
            type="text"
            id="cardExpiry"
            name="cardExpiry"
            required
            value={formData.cardExpiry}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="MM/YY"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cardCVC"
            className="block text-sm font-medium text-gray-700"
          >
            Card CVC
          </label>
          <input
            type="text"
            id="cardCVC"
            name="cardCVC"
            required
            value={formData.cardCVC}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="CVC"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="billingAddress"
            className="block text-sm font-medium text-gray-700"
          >
            Billing Address
          </label>
          <input
            type="text"
            id="billingAddress"
            name="billingAddress"
            required
            value={formData.billingAddress}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Please fill your address"
          />
        </div>

        <div className="col-span-2 flex justify-center items-center">
          <button
            type="submit"
            className="bg-purple-600 text-white font-bold py-2 px-6 rounded-full hover:bg-purple-700 transition-all duration-300"
          >
            Donate
          </button>
        </div>
      </form>
    </div>
  );
=======
            const confirmPayment = await stripe.confirmCardPayment(paymentIntent.clientSecret, {
                payment_method: paymentMethod.id,
            });

            if (confirmPayment.error) {
                setError(confirmPayment.error.message);
                setSuccess('');
            } else {
                setError('');
                setSuccess('Payment successful!');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="payment-form">
            <h2>Payment Details</h2>
            <div className="form-group">
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Amount</label>
                <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Phone Number</label>
                <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Billing Address</label>
                <input
                    type="text"
                    name="billingAddress"
                    value={formData.billingAddress}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Card Details</label>
                <CardElement />
            </div>
            <button type="submit" disabled={!stripe} className="pay-button">Pay</button>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
        </form>
    );
>>>>>>> Stashed changes
};

export default DonationForm;
