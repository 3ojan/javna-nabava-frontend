import { Table } from "antd";
import { styled } from "styled-components";

export const ResultsTableDiv = styled.div`
    width: 100%;
`

export const StyledTable = styled(Table)`
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    padding: 10px;

    .ant-table{
        background: rgba(255, 255, 255, 0);
    }
    
    td.ant-table-column-sort {
        background-color: rgba(255, 255, 255, 0);
    }
`