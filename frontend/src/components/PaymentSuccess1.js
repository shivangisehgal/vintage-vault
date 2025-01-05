import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './PaymentSuccess.css'; // Importing CSS for styling

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get("reference");

  return (
    <div className="payment-success-container">
      <h1 className="payment-success-title">Payment Successful!</h1>
      <p className="payment-success-message">
        Thank you for your purchase. Your payment has been successfully processed.
      </p>
      <p className="payment-success-reference">
        Reference No: <span>{referenceNum}</span>
      </p>
    </div>
  );
};

export default PaymentSuccess;
