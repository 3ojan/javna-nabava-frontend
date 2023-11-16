import { fontHeader, mobileWidth } from "src/app/global/constants";
import { css, styled } from "styled-components";

export const StyledFullWidthDiv = styled.div<{$padding?: boolean, $center?: boolean, $background?: boolean}>`
    // width: 100%;

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
        flex-direction: column;
        // justify-content: center;
        // align-items: center;
        min-height: 100vh;
        
        // main{
        //     flex: 1;
        // }
    `};
`

export const StyledHeaderDiv = styled.div`
    margin: 40px 0 30px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const StyledHeaderLine = styled.div`
height: 1px;
background-color: black;
width: 100%;
`

export const StyledMainTitleDiv = styled.div`
// background-color: blue;
margin-bottom: 30px;
display: flex;
gap: 10px;
justify-content: start;
align-items: center;
`
export const StyledAppTitleHeader = styled.h1`
    // margin: auto;
    margin: 0;
    // letter-spacing: 0.3rem;
    // width: 60%;
    // background-color: red;
    font-size: ${3.4}rem;
    font-weight: 300;
    text-transform: uppercase;
    font-family: ${fontHeader};
    font-weight: 700;
    text-align: center;

    @media only screen and (max-width: ${mobileWidth}px) {
        font-size: ${1.8}rem;
        margin-bottom: 0px;
    }
`

export const StyledAppHeaderDiv = styled.div`    
    width: 100%;
    margin-bottom:100px;

    h2 {
        font-size: ${2.5/Math.pow(1.25, 2)}rem;
        font-weight: inherit;
    }
    h3 {
        font-size: ${2.5/Math.pow(1.25, 3)}rem;
        font-weight: inherit;
    }
    p{
        // font-size: ${1.5/Math.pow(1.25, 2)}rem;
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
// background-color: purple;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    // margin-bottom: 50px;
    float: left;
    height: 70px;

    div{
        display: flex;
        flex-direction: column;
        align-items: start;
        // justify-content: space-between;
    }

    img{
        width: 50px;
        height: 100%;
        // margin-right: 10px;
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
    // font-family: 'Abhaya Libre', serif;
    margin-bottom: 10px;

    h1{
        width: fit-content;
        font-size: ${2}rem;
        font-weight: inherit;
        width: 50%;
    }
`

export const StyledPlaceInfoH1 = styled.h2<{$center?: boolean}>`
    text-align: ${props => props.$center ? 'center' : 'default'};
    margin: 0;
    font-family: ${fontHeader};
    // font-size: ${1.8}rem;
    font-weight: inherit;
    a {
        link-style: none;
        color: black;
    }

    @media only screen and (max-width: ${mobileWidth}px) {
        font-size: ${1.5}rem;
    }
`

export const StyledPlaceInfoH2 = styled.h3<{$center?: boolean}>`
text-align: ${props => props.$center ? 'center' : 'default'};
font-family: ${fontHeader};

margin: 0;
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