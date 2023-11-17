import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { mobileScreenWidth, searchBorderRadius } from "src/app/global/constants";
import { styled } from "styled-components";


const searchBarHeight = "32px";

export const StyledTransparencyLayout = styled(Layout)`
    background-color: transparent;
    @media only screen and (max-width: ${mobileScreenWidth}px) {
      padding-right: 10px;
    }
`
export const StyledTransparencyContent = styled(Content)`
    background-color: transparent;
    text-align: center;
`

export const StyledSelectWrapper = styled.div`
  div{
      width: 120px;
  }
  
  @media only screen and (max-width: ${mobileScreenWidth}px) {
    div{
    width: 90px;
    }
  }
`

export const StyledSearchBar = styled.div`
width: 100%;
display: flex;
align-items: center;

.search-input {
  // font-size: 1rem;
  // padding: 20px;

  flex: 1;
  height: ${searchBarHeight};
  border-radius: ${searchBorderRadius} 0 0 ${searchBorderRadius};
}

:where(.css-dev-only-do-not-override-1m62vyb).ant-select-single .ant-select-selector{
   height: ${searchBarHeight};
  //  border-radius: ${searchBorderRadius};
}
 select {
  background-color: transparent; 
  border-top: 1px silver solid;
  border-bottom: 1px silver solid; 
  border-left: none;
  border-right: none;
  padding: 0 10px;
  height: ${searchBarHeight};
 }

.ant-select-selector{
  // font-size: 1rem;
  border-radius: 0 ${searchBorderRadius} ${searchBorderRadius} 0;
}

.search-button {
  height: ${searchBarHeight};
  margin-right: 0;
  border-radius: 0 ${searchBorderRadius} ${searchBorderRadius} 0;
}

@media only screen and (max-width: ${mobileScreenWidth}px) {
  width: 100%;
  margin-bottom: 0;
  .customDropdown {
    width: 100px
  }  
}
`