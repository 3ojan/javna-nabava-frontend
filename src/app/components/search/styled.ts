import { Layout } from "antd";
import Search from "antd/es/input/Search";
import { Content } from "antd/es/layout/layout";
import { mobileWidth } from "src/app/global/constants";
import { styled } from "styled-components";


export const StyledTransparencyLayout = styled(Layout)`
    background-color: transparent;
`
export const StyledTransparencyContent = styled(Content)`
    background-color: transparent;
    text-align: center;
    animation-fill-mode: forwards;
    
    @media only screen and (min-width: ${mobileWidth}px) {
        margin-bottom: 50px;
        padding: 0 30%;
        .detailedSearchButton{
            margin-top: 50px;
        }
    }

    
`