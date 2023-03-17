import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const Payment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [card_no, setCard_no] = useState('');
  const [cvv, setCvv] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send contact message to server or external service
    setIsSubmitted(true);
  };

  return (

    
    <div style={{ backgroundImage:`url(https://img.freepik.com/premium-photo/smartphone-blank-display-with-credit-card-flying-coinonline-payment-conceptsmartphone_654007-378.jpg?size=626&ext=jpg&ga=GA1.2.955878982.1678699792&semt=sph)`,backgroundRepeat:"no-repeat",backgroundSize: "cover" }}>
    <Container>
      {isSubmitted ? (
        <h2>Your payment has been successful</h2>
      ) : (
        
        <Form style={{backgroundColor:'beige'}} onSubmit={handleSubmit}>
             
          <h1>PAYMENT</h1>
          <label htmlFor="name">Name:</label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="card_no">Card Number:</label>
          <Input
            type="card_no"
            id="card_no"
            value={card_no}
            onChange={(event) => setCard_no(event.target.value)}
            required
          />

          <label htmlFor="cvv">Cvv:</label>
          <Textarea
            id="cvv"
            value={cvv}
            onChange={(event) => setCvv(event.target.value)}
            required
          />

          <Button type="submit">Submit</Button>
        </Form>
        
      )}
    </Container>
    </div>
  );
};

export default Payment;