import { createGlobalStyle, css } from 'styled-components'

const styles = css`
  :root {
    --white: #fff;
    --black: #000;

    --gray-dark: #161618;
    --gray-medium: #bcbcbc;
    --gray-light: #e1e1e6;

    --blue-light: #81bece;
    --blue-medium: #378ba4;
  }

  html,
  body {
    background: var(--gray-dark);
    height: 100vh;
  }

  html,
  body,
  input,
  textarea,
  button {
    font-family: 'Inter';
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  }

  #__next {
    height: 100%;

    display: flex;
    flex-direction: column;
  }
`
const GlobalStyles = createGlobalStyle`${styles}`

export default GlobalStyles
