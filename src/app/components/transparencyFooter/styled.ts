import { colorPrimary, mobileScreenWidth } from "src/app/global/constants"
import styled from "styled-components"

export const StyledFooterBgImgContainerDiv = styled.div`
  left: 0;
  bottom: 0px;
  position: absolute;
  height: 400px;
  width: 100%;
  overflow: hidden;
  z-index: -10;
`

export const StyledFooterBgImg = styled.img`
  width: 1200px; /* Make the image fill the container */
  height: auto; /* Maintain aspect ratio */
  transform: rotate(14deg);
  // margin-left: 10px;
  margin-top: -260px;
`


export const StyledFooterContainerDiv = styled.div`
  padding: 10px;  
  color: white;
  bottom: 0;
  // position: relative;
  hegith: 100vh;
  // background-color: ${colorPrimary}; 
  text-align: center;

  p{
    font-weight: 300;
  }
`

export const StyledFooterDiv = styled.div`
  background-color: ${colorPrimary};
  // background: linear-gradient( #1c416e 0%, #265694 15%, #335d93 50%, #265694 85%, #1c416e 100%);
  padding: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1; // puts div info

  @media (max-width: ${mobileScreenWidth}px) {
      padding: 20px;
  }
`


export const StyledFooterLogoImg = styled.img`
width: 30px;
// height: 100%;
`
export const StyledVersionParagraph = styled.p`
  opacity: 40%;
`
