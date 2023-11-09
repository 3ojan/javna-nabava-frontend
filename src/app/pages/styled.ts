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
background-color: transparent;
padding: 60px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
// margin-bottom: 40px;
`

export const StyledAppDescDiv = styled.div`
background-color: transparent;
font-size: 1.1rem;
width: 70%;
text-align: center;

`