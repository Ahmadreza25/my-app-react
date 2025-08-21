import styled from "styled-components";

interface StyledImageProps {
    width?:string
    height?:string
}

const StyledImage = styled.img<StyledImageProps>`
    width:${props => props.width};
    height:${props => props.height};
`


export default StyledImage