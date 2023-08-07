import { Layout } from "antd";
import Search from "antd/es/input/Search";
import { Content } from "antd/es/layout/layout";
import { styled } from "styled-components";


export const TransparencyLayout = styled(Layout)`
    background-color: transparent;
`
export const TransparencyContent = styled(Content)`
    background-color: transparent;
    text-align: center;
    margin-bottom: 50px;
    animation-fill-mode: forwards;

    .detailedSearchButton{
     margin-top: 50px;
    }
`