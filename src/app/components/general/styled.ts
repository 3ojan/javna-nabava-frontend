import { mobileWidth } from "src/app/global/constants";
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
    margin: 50px 0 30px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;

    img{
        width: 70px;
        margin-right: 10px;
    }
    @media only screen and (max-width: ${mobileWidth}px) {
        img{
            width: 60px;
            margin-right: 0;
        }
    }
`

export const StyledMainTitleDiv = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 100%;
   align-items: start;
   font-family: 'Abhaya Libre', serif;

    h1{
        font-size: ${2.5}rem;
        font-weight: inherit;
    }
    h2 {
        font-size: ${2.5/Math.pow(1.25, 2)}rem;
        font-weight: inherit;
    }
    h3 {
        font-size: ${2.5/Math.pow(1.25, 3)}rem;
        font-weight: inherit;
    }

    @media only screen and (max-width: ${mobileWidth}px) {
        width: 100%;
        align-items: center;
        h1{
            font-size: ${2}rem;
            font-weight: inherit;
        }
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


export const StyledMobileMainTtileDiv = styled.div`
    display: flex;
    flex-direction: row;
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
    // font-family: 'Abhaya Libre', serif;
    // font-weight: inherit;
    //span is just for testing
    span{
        font-weight: 400;
        opacity: 0.5;
            font-size: 1.8rem;

    }
    a {
        link-style: none;
        color: black;
    }
`

export const StyledMainTitleH2 = styled.h2<{$center?: boolean}>`
text-align: ${props => props.$center ? 'center' : 'default'};
margin: 0;
a {
    link-style: none;
    color: black;
}
`

export const StyledAppTitleHeaderH4 = styled.h3<{$center?: boolean}>`
text-align: ${props => props.$center ? 'center' : 'default'};
margin: 0;
opacity: 0.5;
a {
    link-style: none;
    color: black;
}

`

export const StyledCenterDivWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
`