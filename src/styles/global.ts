import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.texts.primary};
    background: ${({ theme }) => theme.backgrounds.default};
  }

  body, input, textarea, button {
    font: 600 18px Nunito, sans-serif;
  }
`;
