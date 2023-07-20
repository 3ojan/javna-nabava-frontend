import { Button } from "antd"
import styled from "styled-components"

export const  ColoredButton = styled(Button)<{$color?: string, $textContrast?: boolean}>`
    background-color: ${props => props.$color ||  'default'};
`
export const ExportButtonsDiv = styled.div`
    width: 100%;    
    padding: 10px 0;
    .buttonWrapper{
        float: right;
    }
`
