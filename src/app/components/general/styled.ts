import { css, styled } from "styled-components";

export const FullWidthDiv = styled.div<{$padding?: boolean, $center?: boolean}>`
    width: 100%;
    padding: ${props => props.$padding ? '0 20%' : '0'};
    ${props => props.$center && css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    `};
    
`

export const MainTitleH1 = styled.h1<{$center?: boolean}>`
    font-size: 3rem;
    text-align: ${props => props.$center ? 'center' : 'default'};

    a {
        link-style: none;
        color: black;
    }
`

export const CenterDivWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
`