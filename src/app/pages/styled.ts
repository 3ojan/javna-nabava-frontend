import { Col, Row } from "antd";
import { css, keyframes, styled } from "styled-components";
import { fontHeader, mobileScreenWidth, searchBorderRadius } from "../global/constants";

export const StyledRow = styled(Row)`
  height: fit-content;
  margin-bottom: 20px;
  .ant-col {
    height: fit-content;
  }
`;
export const StyledMainPageContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const StyledFooter = styled.div`
  // font-family: 'Merriweather', serif;
  border-radius: 15px 15px 0 0;
  padding: 30px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #4d4d4d; 
  color: white;

  bottom: 0;
  position: relative;

  p{
    font-weight: 300;
  }

  @media (max-width: ${mobileScreenWidth}px) {
    // padding: 0;
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
    // font-family: ${fontHeader};
    background-color: transparent;
    // font-size: 1rem;
    text-align: start;
    // text-align: center;

  @media (max-width: ${mobileScreenWidth}px) {
    width: 100%;
    margin-bottom: 10px;

    // display: flex;
    // flex-direction: column;
    // gap: 10px;
    padding: 10px 0;
  }
`