import { Button, Space } from "antd"
import { mobileScreenWidth } from "src/app/global/constants"
import styled from "styled-components"

export const StyledColoredButton = styled(Button)<{$color?: string, $textContrast?: boolean}>`
    background-color: ${props => props.$color ||  'default'};
`

export const StyledSpace = styled(Space)`
    display: flex;
    justify-content: center;
    width: 100%;
` 

export const StyledExportButtonsDiv = styled.div`

    .buttonWrapper{  
        float: right;
        display: flex;
        justify-content: flex-end; 
        gap: 10px;
    }

    @media only screen and (max-width: ${mobileScreenWidth}px) {
        .buttonWrapper{  
            display: flex;
            width: 100%;
        }
        .buttonWrapper > button{  
            flex: 1;
            font-size: 0.8rem;
        }
    }
`
