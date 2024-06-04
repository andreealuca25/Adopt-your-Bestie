import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import SubmitErrorPage from "../common/SubmitErrorPage";
import SuccessPage from "../common/SuccessPage";

const DonationForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    amount: "",
    phoneNumber: "",
    billingAddress: "",
  });

  const [requestStatus, setRequestStatus] = useState({
    error: false,
    success: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { amount, ...billingDetails } = formData;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
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
      setRequestStatus({ error: true, success: false });
    } else {
      try {
        const response = await fetch("http://localhost:8080/payment/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: parseInt(amount) * 100,
            currency: "usd",
          }),
        });

        const paymentIntent = await response.json();

        const confirmPayment = await stripe.confirmCardPayment(
          paymentIntent.clientSecret,
          {
            payment_method: paymentMethod.id,
          }
        );

        if (confirmPayment.error) {
          setRequestStatus({ error: true, success: false });
        } else {
          setRequestStatus({ error: false, success: true });
        }
      } catch (error) {
        setRequestStatus({ error: true, success: false });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-lg font-semibold mb-6">Payment Details</h2>
      {requestStatus.error ? (
        <SubmitErrorPage typeOfData="donation" />
      ) : requestStatus.success ? (
        <SuccessPage
          message="Payment successful! Thank you for your donation! :)"
          redirectLink="/"
          redirectMessage="Go to the Homepage"
        />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl p-8 bg-white shadow-md rounded-lg grid gap-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
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
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
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
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Amount (USD)
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
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
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
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
                value={formData.billingAddress}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Card Details
            </label>
            <CardElement className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!stripe}
              className="bg-purple-600 text-white font-bold py-2 px-6 rounded-full hover:bg-purple-700 transition-all duration-300"
            >
              Pay
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default DonationForm;
