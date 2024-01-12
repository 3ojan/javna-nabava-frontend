import { colorBorder, formBorderRadius } from "src/app/global/constants";
import { styled } from "styled-components";

export const StyledImageFormWrapperDiv = styled.div`
width: 400px;


.image{
    // width: 200px;
    display: flex;
    flex-direction: column;
    height: 100%;
}

form{
    border: 1px solid ${colorBorder};
    border-radius: ${formBorderRadius};
    padding: 10px 40px;
}

input[type="file"] {
    padding
}
`

export const StyledButtonsContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`
export const StyledImageWrapper = styled.div`
  text-align: center;
  overflow: hidden;
  max-height: 200px;
  img {
    width: 100%;
  }
  margin-bottom: 20px;
`;