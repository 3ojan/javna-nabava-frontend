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