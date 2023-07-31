import { css, styled } from "styled-components";

export const FullWidthDiv = styled.div<{$padding?: boolean, $center?: boolean, $background?: boolean}>`
    width: 100%;
    // ${props => props.$padding && css`
    //     background: linear-gradient(0deg, rgba(34,193,195,0) 0%, rgba(45,119,253,1) 100%);
    // `}

    ${props => props.$padding && css`
        padding: 0 20%;

        @media only screen and (max-width: 1900px) {
            padding: 0 10%;
        }
    `}
    
    ${props => props.$center && css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    `};
    
`

export const MainTitleH1 = styled.h1<{$center?: boolean}>`
    font-size: 3rem;
    text-align: ${props => props.$center ? 'center' : 'default'};
    font-family: 'Abhaya Libre', serif;
    a {
        link-style: none;
        color: black;
    }
    img{
        width: 100px;
        margin-right: 10px;
    }
`

export const CenterDivWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
`