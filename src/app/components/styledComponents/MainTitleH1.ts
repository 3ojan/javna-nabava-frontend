import { styled } from "styled-components";

export const MainTitleH1 = styled.h1<{$center?: boolean}>`
    font-size: 3rem;
    text-align: ${props => props.$center ? 'center' : 'default'};
`