import { createGlobalStyle } from "styled-components";
import background from "./images/background.png";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    font-family: 'Lato', sans-serif;
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    background-repeat: repeat-y;
  }
`;