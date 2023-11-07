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
    // @media only screen and (min-width: 1900px) {
    //     padding: 0 15%;
    // }
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
`

export const StyledMainTitleH1 = styled.h1<{$center?: boolean}>`
text-align: ${props => props.$center ? 'center' : 'default'};\
margin: 0;
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
@media only screen and (max-width: ${mobileWidth}px) {
    font-size: 2rem;
    img{
        width: 50px;
        margin-right: 10px;
    }
}
`

export const StyledMainTitleH2 = styled.h2<{$center?: boolean}>`
text-align: ${props => props.$center ? 'center' : 'default'};
margin: 0;
a {
    link-style: none;
    color: black;
}
@media only screen and (max-width: ${mobileWidth}px) {
    font-size: 2rem;
    img{
        width: 70px;
        margin-right: 10px;
    }
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
@media only screen and (max-width: ${mobileWidth}px) {
    font-size: 2rem;
    img{
        width: 70px;
        margin-right: 10px;
    }
}
`

export const StyledCenterDivWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
`