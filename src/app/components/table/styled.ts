import { Table } from "antd";
import { styled } from "styled-components";

export const StyledResultsTableDiv = styled.div`
    width: 100%;
`

export const StyledMobileRowDividerLine = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.3);
`
export const StyledMobileRow = styled.tr`
  display: flex;
  // background-color: rgba(255, 0, 255, 0.2);

  td{
    flex: 2;
    padding: 2px 10px 2px 5px;
  }

  td:first-child{  
    // background-color: rgba(255, 0, 255, 0.2);
    flex: 1;
    padding: 0 10px;
    display: flex;
    justify-content: right;
    align-items: center;
  }
`

export const StyledTable = styled(Table)`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 10px 0;

  .ant-table{
      background: rgba(255, 255, 255, 0);
  }

  td.ant-table-column-sort {
      background-color: rgba(255, 255, 255, 0);
  }

  /* Normal styles for larger screens */
  .ant-table {
    /* Your regular table styles */
  }

  /* Mobile-specific styles */
  @media (max-width: 768px) {
    .ant-table {
      margin-top: 20px;

    .ant-table-thead {
        display: none; /* Hide the table header on mobile */
      }
      .ant-table-tbody > tr:nth-child(odd) {
        background-color: white; 
      }
      .ant-table-tbody > tr:nth-child(even) {
        background-color: #e2e2e2; /* light silver */
      }
      .ant-table-tbody > tr > td {
        border: none
      }
      .ant-table-tbody {
        display: block;

        .ant-table-row {
          display: flex; /* Display rows as flex containers */
          padding: 7px;

          .ant-table-cell {
            flex: 1; /* Distribute cell width equally */
            // border: none; /* Remove cell borders for a cleaner look */
            // padding: 8px; /* Add some padding for spacing */
            // background-color: rgba(255, 255, 55, 0.2);

            padding: 0;
          }
        }
      }
    }
  }

`