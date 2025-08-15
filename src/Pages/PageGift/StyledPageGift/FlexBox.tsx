import styled from "styled-components";

interface FlexBoxProps {
    width?:string,
    height?:string
}

const FlexBox = styled.div<FlexBoxProps>`
    width:${props => props.width};
    height:${props => props.height};
    display: flex;
    align-items: center;
    justify-content: center;
`

export default FlexBox