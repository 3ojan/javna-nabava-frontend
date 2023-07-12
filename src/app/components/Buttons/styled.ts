import { Button } from "antd"
import styled from "styled-components"

export const  GreenButton = styled(Button)`
background: ${props => props.disabled ? '#ccc' : 'green'};
`
