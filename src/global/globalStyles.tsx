// src/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyles;
