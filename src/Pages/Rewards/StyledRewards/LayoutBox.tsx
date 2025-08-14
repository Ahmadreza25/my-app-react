import styled from "styled-components";

interface LayoutBoxProps {
    width?:string;
    height?:string
}

const LayoutBox = styled.div<LayoutBoxProps>`
    width:${props => props.width};
    height:${props => props.height};
`

export default LayoutBox