import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html{
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  *, *:before, *:after{
    box-sizing: inherit;
  }
  ul, li, h1, h2, h3, h4, h5, h6, p, button {
    padding: 0;
    margin: 0;
  }
  ul{
    list-style: none;
  }
  button{
    background: transparent;
    border: 0;
    outline: 0;
  }
  body{
    background: #232323;
    height: 100vh;
    margin: 0 auto;
    overscroll-behavior: none;
    width: 100%;
  }
  #root{
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.05);
    min-height: 100vh;
    overflow-x: hidden;
    padding-bottom: 10px;
  }
`
