import { Col, Row } from "antd";
import { css, keyframes, styled } from "styled-components";
import { colorPrimary, fontHeader, mobileScreenWidth, searchBorderRadius } from "../global/constants";

export const StyledRow = styled(Row)`
  height: fit-content;
  margin-bottom: 20px;
  .ant-col {
    height: fit-content;
  }
`

export const StyledMainPageContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`
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

export const StyledFooter = styled.div`
  background-color: ${colorPrimary};
  // background: linear-gradient( #1c416e 0%, #265694 15%, #335d93 50%, #265694 85%, #1c416e 100%);
  padding: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1; // puts div info

    div{
  }

  @media (max-width: ${mobileScreenWidth}px) {
      padding: 20px;
  }
`


export const StyledFooterLogoImg = styled.img`
  width: 30px;
  // height: 100%;
`

export const StyledResultsInfoDiv = styled.div`
  padding: 10px 25px;
  width: fit-content;
  height: fit-content;
  display: flex;
  border: 1px solid silver;
  background-color: white;
  border-radius: 15px;
  flex-direction: column;

  // line-height: 1rem;

  p{
    margin: 10px 0;
  }
  @media (max-width: ${mobileScreenWidth}px) {
    // margin-top: 20px;
    // flex-direction: column;
    // border: 0;
    // background-color: transparent;
    padding: 10px 20px;
    // width: 87%;
  }
`

export const StyledAppDescDiv = styled.div`
    background-color: transparent;
    text-align: start;
    color: white;
    p{
      margin-top: 5px;
      margin-bottom: 0;
    }

  @media (max-width: ${mobileScreenWidth}px) {
    .ant-collapse-header-text, .ant-collapse-expand-icon {
        color: white; /* Set your desired background color */
    }
    
    padding: 10px 0;
  }
`

export const LoginFormConatainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;

  form{
    width: 400px;
  }

  .login-form-button{
    width: 100%;
  }
`