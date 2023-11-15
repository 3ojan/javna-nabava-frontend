import { Col, Row } from "antd";
import { css, keyframes, styled } from "styled-components";
import { mobileWidth } from "../global/constants";

export const StyledRow = styled(Row)`
  height: fit-content;
  .ant-col {
    height: fit-content;
  }
  @media (max-width: ${mobileWidth}px) {
    flex-direction: column;
  }
`;
export const StyledFooter = styled.div`
// font-family: 'Merriweather', serif;
background-color: transparent;
padding: 60px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
// margin-bottom: 40px;
@media (max-width: ${mobileWidth}px) {
  padding: 0;
}
`

export const StyledAppDescDiv = styled.div`
background-color: transparent;
// font-size: 0.97rem;
width: 70%;
text-align: center;
@media (max-width: ${mobileWidth}px) {
  width: 90%;
  margin-bottom: 20px;
}
`