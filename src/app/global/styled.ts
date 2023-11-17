import { createGlobalStyle, styled } from 'styled-components';
 
// maybe change to StyledGlobal
export const GlobalStyle = createGlobalStyle`
  /* import for global font */
  // @font-face {
  //   font-family: 'Abhaya Libre';
  //   src: url('https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;800&display=swap') ,
  //   /* Add more font formats as needed (e.g., .ttf, .svg) */
  // }

  html {
    font-size: 16px;
  }

  body {
    background-color: whitesmoke;
    margin: 0;
    // font-family: 'open sans', sans-serif;
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
    // overflow-y: scroll; 
  }
`;
 
export const StyledBackgroundDiv = styled.div`
  // background: linear-gradient(0deg, rgba(45,119,253, 0.3) 0%, rgba(45,119,253,0) 100%);
  background-image: url("../../../../img/main-bg-gradient.svg");
  background-size: contain;
  // background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  // height: 400px;
  height: 100vh;
  width: 100%;
  top: 0;
  position: absolute;
  overflow: hidden;
`;

