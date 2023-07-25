import { Col, Row } from "antd";
import { css, keyframes, styled } from "styled-components";

const rise = keyframes`
    from {
        transform: translateY(150%);
    }
    to{
        transform: translateY(0);
    }
`

const fall = keyframes`
    from {
        transform: translateY(0);
    }
    to{
        transform: translateY(150%);
    }
`


const riseMini = keyframes`
    from {
        transform: translateY(100%);
    }
    to{
        transform: translateY(0);
    }
`

const fallMini = keyframes`
    from {
        transform: translateY(0);
    }
    to{
        transform: translateY(100%);
    }
`

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(40%);
    }
    to{
         opacity: 1;
    }
`

const fadeOut = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to{
        opacity: 0;
        transform: translateY(40%);
    }
`

export const MainCol = styled(Col)`
    .riseAnimation{
        animation: ${rise} 2s forwards;
        animation-fill-mode: forwards;
    }

    .fallAnimation{
        animation: ${fall} 2s forwards;
        animation-fill-mode: forwards;
    }

    @media only screen and (max-width: 2000px) and (max-height: 1100px) {
        .riseAnimation{
            animation: ${riseMini} 2s forwards;
            animation-fill-mode: forwards;
        }
    
        .fallAnimation{
            animation: ${fallMini} 2s forwards;
            animation-fill-mode: forwards;
        }
    }
`

export const MainRow = styled(Row)`
    width: 100%;
    height: fit-content;
`

export const ResultsDiv = styled.div<{$visible?: boolean, $showAnimation?: boolean}>`
    animation: ${props => props.$showAnimation ? fadeIn : fadeOut} 2s forwards;
    display: ${props => props.$visible ? 'block' : 'none'};
    animation-fill-mode: forwards;
    // overflow: hidden;

`