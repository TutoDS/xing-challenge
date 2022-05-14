import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Poppins', sans-serif;
  }

  html {
    font-size: 16px;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; // 16px x 0.9376 = 15px (reduce  font size)
    }
  }

  @media (min-width: 2000px) {
    html {
      font-size: 100%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; // 16px x 0.8750 = 14px (reduce  font size)
    }
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: Lexend, sans-serif;
    color: ${({ theme }) => theme.colors.text};
  }

  h1 {
    font-size: 2rem; // 16 + 16 => 32px
  }

  h2 {
    font-size: 1.5rem // 16 + 8 (16/2) => 24px
  }

  button {
    cursor: pointer;
  }
`;