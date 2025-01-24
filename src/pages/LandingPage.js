import React from 'react';
import { Container, LoginButton } from './styled/LandingPage.styled';

const LandingPage = ({ onLogin }) => {
  const handleLogin = () => {
    // Simulate login logic
    onLogin();
  };

  return (
    <Container>
      <h1>Welcome to TheIceCreamShop</h1>
      <LoginButton onClick={handleLogin}>Log In</LoginButton>
    </Container>
  );
};

export default LandingPage;
