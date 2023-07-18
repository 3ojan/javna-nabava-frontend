import { css, styled } from "styled-components";


export const FullWidthDiv = styled.div<{$padding?: boolean}>`
    width: 100%;
    padding: ${props => props.$padding ? '0 4rem' : '0'};
`


