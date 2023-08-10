import { Button, Space } from "antd"
import { mobileWidth } from "src/app/global/constants"
import styled from "styled-components"

export const ColoredButton = styled(Button)<{$color?: string, $textContrast?: boolean}>`
    background-color: ${props => props.$color ||  'default'};
`

export const StyledSpace = styled(Space)`
    display: flex;
    justify-content: center;
    width: 100%;
` 

export const ExportButtonsDiv = styled.div`
    padding: 10px 0;
    width: 100%;    
    .buttonWrapper{  
        float: right;
        display: flex;
        justify-content: flex-end; 
        gap: 10px;
    }

    @media only screen and (max-width: ${mobileWidth}px) {
        .buttonWrapper{  
            display: flex;
            width: 100%;
        }
        .buttonWrapper > button{  
            flex: 1;
        }
    }
`
