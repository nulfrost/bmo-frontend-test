import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
}
  html, body, #root {
    height: 100%;
  }

    body {
        margin: 0;
        padding: 0;
        line-height: 1.5;
        font-family: 'Inter', sans-serif;
    }
`;
