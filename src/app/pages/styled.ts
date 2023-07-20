import { Col, Row } from "antd";
import { css, keyframes, styled } from "styled-components";

const rise = keyframes`
    from {
        transform: translateY(0);
    }
    to{
        transform: translateY(-130%);
    }
`

const fall = keyframes`
from {
    transform: translateY(-130%);
}
to{
    transform: translateY(0);
}
`

export const FullWidthCol = styled(Col)`
    width: 100%;    

    .riseAnimation{
        animation: ${rise} 2s forwards;
        animation-fill-mode: forwards;
    }

    .fallAnimation{
        animation: ${fall} 2s forwards;
        animation-fill-mode: forwards;
    }
`

export const ResultsDiv = styled.div<{$visible?: boolean}>`
// margin-top: -30%;
    display: ${props => props.$visible ? 'block' : 'none'};
    `

export const SearchRow = styled(Row)`
    height: fit-content;
`