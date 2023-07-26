import { createGlobalStyle, styled } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  /* import for global font */
  @font-face {
    font-family: 'Abhaya Libre';
    src: url('https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;800&display=swap') ,
    /* Add more font formats as needed (e.g., .ttf, .svg) */
  }

  body {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow-y: scroll; 
    font-family: 'Abhaya Libre', serif;
  }
`;
 
export const BackgroundDiv = styled.div`
  background: linear-gradient(0deg, rgba(34,193,195,0) 0%, rgba(45,119,253,1) 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  height: 400px;
  width: 100%;
  top: 0;
  position: absolute;
`;

