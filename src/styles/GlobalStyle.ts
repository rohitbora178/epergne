// src/styles/GlobalStyle.ts

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f8f9fa; /* Light background color */
    color: #212529; /* Dark text color */
    line-height: 1.6;
  }

  a {
    color: #007bff; /* Link color */
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    cursor: pointer;
  }

  /* Additional global styles can be added here */
`;

export default GlobalStyle;
