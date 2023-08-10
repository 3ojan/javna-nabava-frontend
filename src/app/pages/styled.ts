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

`

export const MainRow = styled(Row)`
    width: 100%;
    height: fit-content;
`

export const ResultsDiv = styled.div`
    animation-fill-mode: forwards;
`
