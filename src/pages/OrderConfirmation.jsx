import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Your Order is Placed Successfully!</h1>
      <p>Thank you for shopping with us. Your order will be processed soon.</p>
      <Button variant="primary" onClick={handleBackToHome}>
        Back to Home
      </Button>
    </div>
  );
};

export default OrderConfirmation;
