import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

    body {
        margin: 0;
        padding: 0;
        line-height: 1.5;
    }
`;
