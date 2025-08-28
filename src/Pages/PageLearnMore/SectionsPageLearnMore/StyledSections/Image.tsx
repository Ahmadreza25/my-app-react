import styled from "styled-components";

interface ImageProps {
    width?:string
    height?:string
}

const Image = styled.img<ImageProps>`
    width:${props => props.width};
    height:${props => props.height};
`


export default Image