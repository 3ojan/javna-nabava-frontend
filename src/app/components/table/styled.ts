import { Table } from "antd";
import { styled } from "styled-components";

export const ResultsTableDiv = styled.div`
    width: 100%;
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
    // display: block; /* Change the display mode to stack cells vertically */

    .ant-table-thead {
        display: none; /* Hide the table header on mobile */
      }
  
      .ant-table-tbody {
        display: block;
  
        .ant-table-row {
          display: flex; /* Display rows as flex containers */
  
          .ant-table-cell {
            flex: 1; /* Distribute cell width equally */
            border: none; /* Remove cell borders for a cleaner look */
            padding: 8px; /* Add some padding for spacing */
          }
        }
      }
    }
}

`