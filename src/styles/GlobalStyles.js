// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

// Estilos globais para toda a aplicação
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    // padding: 20px;
    background-color: #f0f2f5;
    color: #333;
  }

  h1, h2, h3 {
    color: #333;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }

    &:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  }
`;

export default GlobalStyle;