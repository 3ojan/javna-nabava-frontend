import { css, styled } from "styled-components";


export const FullWidthDiv = styled.div<{$padding?: boolean, $center?: boolean}>`
    width: 100%;
    padding: ${props => props.$padding ? '0 4rem' : '0'};
    ${props => props.$center && css`
        display: flex;
        justify-content: center;
        align-items: center;
    `};
`


