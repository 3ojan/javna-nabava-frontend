import { Row } from "antd";
import { styled } from "styled-components";
import { mobileScreenWidth } from "../global/constants";

export const StyledRow = styled(Row)`
  height: fit-content;
  margin-bottom: 20px;
  .ant-col {
    height: fit-content;
  }
`

export const StyledMainPageContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`

export const StyledResultsInfoDiv = styled.div`
  padding: 10px 25px;
  width: fit-content;
  height: fit-content;
  display: flex;
  border: 1px solid silver;
  background-color: white;
  border-radius: 15px;
  flex-direction: column;

  // line-height: 1rem;

  p{
    margin: 10px 0;
  }
  @media (max-width: ${mobileScreenWidth}px) {
    // margin-top: 20px;
    // flex-direction: column;
    // border: 0;
    // background-color: transparent;
    padding: 10px 20px;
    // width: 87%;
  }
`

export const StyledAppDescDiv = styled.div`
    background-color: transparent;
    text-align: start;
    color: white;
    p{
      margin-top: 5px;
      margin-bottom: 0;
    }

  @media (max-width: ${mobileScreenWidth}px) {
    .ant-collapse-header-text, .ant-collapse-expand-icon {
        color: white; /* Set your desired background color */
    }
    
    padding: 10px 0;
  }
`

export const LoginFormConatainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;

  form{
    width: 400px;
  }

  .login-form-button{
    width: 100%;
  }
`