import { Col, Row } from "antd";
import { css, styled } from "styled-components";

export const FullWidthCol = styled(Col)`
    width: 100%;    
`

export const ResultsDiv = styled.div<{$visible?: boolean}>`
    display: ${props => props.$visible ? 'block' : 'none'};
`