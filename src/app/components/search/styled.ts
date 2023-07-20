import Search from "antd/es/input/Search";
import { Content } from "antd/es/layout/layout";
import { keyframes, styled } from "styled-components";

const rise = keyframes`
    from {
        transform: translateY(0);
        // margin-top: 30%;
    }
    to{
        transform: translateY(-20%);
        // margin-top: 23%;
    }
`

export const TransparencyContent = styled(Content)`
    margin-top: 30%;
    text-align: center;
    margin-bottom: 50px;
    animation-fill-mode: forwards;
    .detailedSearchButton{
     margin-top: 50px;
    }
    height: fit-content;
`