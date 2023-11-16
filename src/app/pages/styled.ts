import { Col, Row } from "antd";
import { css, keyframes, styled } from "styled-components";
import { fontHeader, mobileWidth, searchBorderRadius } from "../global/constants";

export const StyledRow = styled(Row)`
  height: fit-content;
  margin-bottom: 20px;
  .ant-col {
    height: fit-content;
  }
  @media (max-width: ${mobileWidth}px) {
    flex-direction: column;
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

  @media (max-width: ${mobileWidth}px) {
    padding: 0;
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
gap: 10px;
border: 1px solid silver;
background-color: white;
border-radius: 15px;
line-height: 1;
p{
margin: 10px 0;
}
`

export const StyledAppDescDiv = styled.div`
    font-family: ${fontHeader};
    background-color: transparent;
    font-size: 0.94rem;
    text-align: start;
    // text-align: center;

  @media (max-width: ${mobileWidth}px) {
    width: 90%;
    margin-bottom: 20px;
  }
`