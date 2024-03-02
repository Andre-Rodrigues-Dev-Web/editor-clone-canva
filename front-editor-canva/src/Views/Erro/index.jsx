// ErrorPage.js
import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ErrorContent = styled.div`
  text-align: center;
`;

const ErrorTitle = styled.h1`
  font-size: 2rem;
  color: #ff0000;
`;

const ErrorMessage = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ErrorPage = () => (
  <ErrorContainer>
    <ErrorContent>
      <ErrorTitle>Erro 404</ErrorTitle>
      <ErrorMessage>Conteúdo não disponível.</ErrorMessage>
    </ErrorContent>
  </ErrorContainer>
);

export default ErrorPage;
