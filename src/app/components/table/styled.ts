import { Checkbox } from "antd";
import { mobileScreenWidth } from "src/app/global/constants";
import { styled } from "styled-components";


export const StyledResultsTableDiv = styled.div`
    width: 100%;
`

export const StyledMobileTdDividerLine = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`
// export const StyledMobileRowDividerLine = styled.div`
//   width: 100%;
//   margin: 0 auto;
//   height: 1px;
//   background-color: rgba(0, 0, 0, 0.3);
// `
export const StyledMobileRow = styled.tr`
  display: flex;
  // height: 3rem; /* ROW HEIGHT */

  td{
    flex: 2;
    padding: 2px 10px 2px 5px;
  }

  td:first-child{  
    flex: 1;
    padding: 0 10px;
    display: flex;
    justify-content: right;
    align-items: center;
  }
`

export const StyledCellHeightSpan = styled.span`
    height: 3rem; /* ROW HEIGHT */
    // min-height: 3rem;
    line-height: 1.4rem;
     
    display: flex;
    align-items: center;
    
    div{
      // ONLY FOR NEW BROWSERS, puts elipsis on overflow in multiple lines
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
`

export const StyledTableDivWrapper = styled.div`
  border-radius: 10px;
  margin-bottom: 20px;

  /* FIXES COLUMN WIDTH */
  .table-wrapper table {
    table-layout: fixed !important; /* rewrite inline styles */
  }

  .ant-table-thead > tr > th {
    background-color: #4d4d4d; 
    color: white;
    text-transform: uppercase;
    font-weight: 400;
  }
  
  table{
    font-size: 1rem;
  }

  th.ant-table-cell {
    padding: 10px 16px !important;
    
  }
  td.ant-table-cell {
    padding: 5px 16px !important;
  }

  @media (min-width: ${mobileScreenWidth}px) {
      .ant-table-tbody > tr:nth-child(3n) {
        background-color: #e6faff; 
      }
  }

  td.ant-table-column-sort {
      // background-color: rgba(255, 255, 255, 0);
  }
  
  .anticon.anticon-filter svg path{
    fill: white;
    opacity: 0.7;
  }


  /* Mobile-specific styles */
  @media (max-width: ${mobileScreenWidth}px) {
    margin-bottom: 30px;

    .ant-table-tbody > tr:nth-child(2n) {
      background-color: #e6faff; 
    }

    .ant-table {
      margin-top: 20px;

    .ant-table-thead {
      display: none; /* Hide the table header on mobile */
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
            padding: 0;
          }
        }
      }
    }
  }
`

export const StyledFiltersCheckboxGroup = styled(Checkbox.Group)`
  // margin-bottom: 10px;
  max-height: 200px;
  min-width: 120px;
  display: block;
  overflow-y: auto;
  .ant-dropdown-menu-item{
    background-color: transparent !important;
  }
`

export const StyledMobileFiltersContainerDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  button span{ 
    // font-size: 1rem;
  }
`