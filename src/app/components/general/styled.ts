import { colorPrimary, fontHeader, midScreenWidth, mobileScreenWidth, sitePaddingHorizontalLargeScreen, sitePaddingHorizontalMidScreen, sitePaddingHorizontalMobileScreen } from "src/app/global/constants";
import { css, styled } from "styled-components";

export const StyledFullWidthDiv = styled.div<{$padding?: boolean, $center?: boolean, $background?: boolean}>`
    flex: 1;

    //gives gradient blue background
    // ${props => props.$padding && css`
    //     background: linear-gradient(0deg, rgba(34,193,195,0) 0%, rgba(45,119,253,1) 100%);
    // `}

    ${props => props.$padding && css`
    //pushes footer from the main content
        margin-bottom: 50px;
        padding: 0 ${sitePaddingHorizontalLargeScreen};

        @media only screen and (max-width: ${midScreenWidth}px) {
            padding: 0 ${sitePaddingHorizontalMidScreen};
        }
        @media only screen and (max-width: ${mobileScreenWidth}px) {
            padding: 0 ${sitePaddingHorizontalMobileScreen};
            display: flex;
            flex-direction: column;
            align-items: center;
            // justify-content: center;
        }
    `}
    
    ${props => props.$center && css`
        display: flex;
        flex-direction: column;
        // justify-content: center;
        // align-items: center;
        min-height: 100vh;
    `};
`

// export const StyledHeaderDiv = styled.div`
//     margin: 40px 0 30px 0;
//     display: flex;
//     flex-direction: column;
//     gap: 30px;
// `

export const StyledHeaderLine = styled.div`
    height: 1px;
    background-color: white;
    // background: linear-gradient(to right, white, transparent);
    width: 10%;
`

export const StyledMainTitleDiv = styled.div`
    // margin-bottom: 10px;
    display: flex;
    justify-content: start;
    align-items: center;

    @media only screen and (max-width: ${mobileScreenWidth}px) {
        font-size: 1.8rem;
        margin-bottom: 0px;
        flex-direction: column;
    }
`

export const StyledAppTitleH1 = styled.h1`
    margin: 0;
    // letter-spacing: 0.3rem;
    line-height: 1;
    font-size: 2.4rem;
    font-weight: 300;
    text-transform: uppercase;
    font-family: ${fontHeader};
    font-weight: 700;
    text-align: center;
    width: fit-content;
    display: inline-block;
    color: white;

    @media only screen and (max-width: ${midScreenWidth}px) {
        font-size: 2.4rem;
    }

    @media only screen and (max-width: ${mobileScreenWidth}px) {
        text-align: start;
        font-size: 1.2rem;
        line-height: normal;
        margin-bottom: 0px;
    }
`

    
export const StyledAppHeaderDiv = styled.div`
    padding: 0 ${sitePaddingHorizontalLargeScreen};
    padding:10px;
    margin-bottom: 40px;
    // background-color: ${colorPrimary};

    h2 {
        font-size: ${2.5/Math.pow(1.25, 2)}rem;
        font-weight: inherit;
    }
    h3 {
        font-size: ${2.5/Math.pow(1.25, 3)}rem;
        font-weight: inherit;
    }

    @media only screen and (max-width: ${midScreenWidth}px) {
        padding: 0 ${sitePaddingHorizontalMidScreen};
        padding:10px;

        h2 {
            font-size: ${2/Math.pow(1.25, 2)}rem;
            font-weight: inherit;
        }
        h3 {
            font-size: ${2/Math.pow(1.25, 2)}rem;
            font-weight: inherit;
        }
    }

    @media only screen and (max-width: ${mobileScreenWidth}px) {
        padding: 0 ${sitePaddingHorizontalMobileScreen};
        padding-top: 10px;
        margin-bottom: 20px;

        h2 {
            font-size: ${1.5/Math.pow(1.25, 2)}rem;
            font-weight: inherit;
        }
        h3 {
            font-size: ${1.5/Math.pow(1.25, 2)}rem;
            font-weight: inherit;
        }
    }
`

export const StyledAppHeaderBgDiv = styled.div`
    background-color: ${colorPrimary};
//   background: linear-gradient( #1c416e 0%, #265694 15%, #335d93 50%, #265694 85%, #1c416e 100%);

    padding: 15px 30px;
    border-radius: 10px;
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
    float: left;

    div{
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    img{
        height: 75px;
        width: auto;
    }

    @media only screen and (max-width: ${midScreenWidth}px) {
        img{
            height: 55px;
            width: auto;
        }
    }
    
    @media only screen and (max-width: ${mobileScreenWidth}px) {
        padding-bottom: 10px;
        align-items: center;

        div{

        }
        img{
            height: 70px;
            width: auto;
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
    font-size: ${1.8}rem;
    font-weight: inherit;
    
    @media only screen and (max-width: ${mobileScreenWidth}px) {
        font-size: ${1.5}rem;
    }
`

export const StyledPlaceInfoH3 = styled.h3<{$center?: boolean}>`
    text-align: ${props => props.$center ? 'center' : 'default'};
    font-family: ${fontHeader};
    margin: 0;
    color: white;

    @media only screen and (max-width: ${mobileScreenWidth}px) {
        // text-align: center;
    }
`

export const StyledCenterDivWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
`