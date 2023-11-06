import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { mobileWidth } from "src/app/global/constants";
import { styled } from "styled-components";


const searchBarHeight = "32px";
const searchBorderRadius = "6px";

export const StyledTransparencyLayout = styled(Layout)`
    background-color: transparent;
`
export const StyledTransparencyContent = styled(Content)`
    background-color: transparent;
    text-align: center;
    
    @media only screen and (min-width: ${mobileWidth}px) {
        // padding: 0 60% 0 0;
        .detailedSearchButton{
            margin-top: 50px;
        }
    }
`

export const StyledSearchBar = styled.div`
display: flex;
align-items: center;

.search-input {
  flex: 1;
  height: ${searchBarHeight};
  border-radius: ${searchBorderRadius} 0 0 ${searchBorderRadius};
}

// :where(.css-dev-only-do-not-override-1m62vyb).ant-select-single:not(.ant-select-customize-input) .ant-select-selector{
//   height: ${searchBarHeight};
// }

:where(.css-dev-only-do-not-override-1m62vyb).ant-select-single .ant-select-selector{
   height: ${searchBarHeight};
  //  border-radius: ${searchBorderRadius};
   
}
 select{
  background-color: transparent; 
  border-top: 1px silver solid;
  border-bottom: 1px silver solid; 
  border-left: none;
  border-right: none;
  padding: 0 10px;
  height: ${searchBarHeight};
 }

.ant-select-selector{
  border-radius: 0 ${searchBorderRadius} ${searchBorderRadius} 0;
}

.dropdown {
  width: 120px;
}

.search-button {
  height: ${searchBarHeight};
  margin-right: 0;
  border-radius: 0 ${searchBorderRadius} ${searchBorderRadius} 0;
}
`