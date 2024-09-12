import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [paymentType, setPaymentType] = useState('Credit Card');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, city, paymentType });
    
    // Navigate to order confirmation page after form submission
    navigate("/order-confirmation");
  }

  return (
    <div className="payment-form" style={{ maxWidth: '600px', margin: '50px auto' }}>
      <h1>Payment Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your city" 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Payment Type</Form.Label>
          <Form.Select 
            value={paymentType} 
            onChange={(e) => setPaymentType(e.target.value)} 
            required
          >
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>Net Banking</option>
            <option>UPI</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit Payment
        </Button>
      </Form>
    </div>
  );
};

export default Payment;

