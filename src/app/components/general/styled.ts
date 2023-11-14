import { fontHeader, mobileWidth } from "src/app/global/constants";
import { css, styled } from "styled-components";

export const StyledFullWidthDiv = styled.div<{$padding?: boolean, $center?: boolean, $background?: boolean}>`
    width: 100%;
    //gives gradient blue background
    // ${props => props.$padding && css`
    //     background: linear-gradient(0deg, rgba(34,193,195,0) 0%, rgba(45,119,253,1) 100%);
    // `}

    ${props => props.$padding && css`
        padding: 0 20%;

        // For under 2k res screens max-width: 1900px
        // @media only screen and (max-width: 1900px) {
            padding: 0 7%;
        // }
        @media only screen and (max-width: ${mobileWidth}px) {
            padding: 0 50;
        }
    `}
    
    ${props => props.$center && css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    `};
`
export const StyledHeaderDiv = styled.div`
    margin: 40px 0 30px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const StyledMainTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;

    h2 {
        font-size: ${2.2/Math.pow(1.25, 2)}rem;
        font-weight: inherit;
    }
    h3 {
        font-size: ${2.5/Math.pow(1.25, 3)}rem;
        font-weight: inherit;
    }

    @media only screen and (max-width: ${mobileWidth}px) {
        width: 100%;
        align-items: center;
        h2 {
            font-size: ${2/Math.pow(1.25, 2)}rem;
            font-weight: inherit;
        }
        h3 {
            font-size: ${2/Math.pow(1.25, 2)}rem;
            font-weight: inherit;
        }
    }
`

export const StyledMainTitlRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledPlaceInfoDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    margin-bottom: 60px;
    div{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
    }

    img{
        width: 50px;
        margin-right: 10px;
    }
    @media only screen and (max-width: ${mobileWidth}px) {
        img{
            width: 35px;
            margin-right: 0;
        }
    }
`

export const StyledMobileMainTtileDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    font-family: 'Abhaya Libre', serif;
    margin-bottom: 10px;

    h1{
        width: fit-content;
        font-size: ${2}rem;
        font-weight: inherit;
        width: 50%;
    }
`

export const StyledMainTitleH1 = styled.h1<{$center?: boolean}>`
    text-align: ${props => props.$center ? 'center' : 'default'};
    margin: 0;
    font-family: ${fontHeader};
    font-size: ${2}rem;
    font-weight: inherit;
    a {
        link-style: none;
        color: black;
    }

    @media only screen and (max-width: ${mobileWidth}px) {
        font-size: ${1.5}rem;
    }
`

export const StyledMainTitleH2 = styled.h2<{$center?: boolean}>`
text-align: ${props => props.$center ? 'center' : 'default'};
font-family: ${fontHeader};
margin: 0;
a {
    link-style: none;
    color: black;
}
`

export const StyledAppTitleHeader = styled.h1<{$center?: boolean}>`
    text-align: ${props => props.$center ? 'center' : 'default'};
    margin: 0;
    margin-bottom: 60px;
    width: fit-content;
    font-size: ${3}rem;
    font-weight: 300;
    text-transform: uppercase;
    font-family: ${fontHeader};
    text-align: center;
    a {
        link-style: none;
        color: black;
    }

    @media only screen and (max-width: ${mobileWidth}px) {
        font-size: ${1.8}rem;
    }
`

export const StyledCenterDivWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
`