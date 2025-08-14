import styled from "styled-components";

interface ImageItemProps {

        width?:string,
        height?:string,
        marginleft?:string;
        margintop?:string;
        marginright?:string;
        marginbottom?:string;
}


const ImageItem = styled.img<ImageItemProps>`
    width:${props => props.width};
    height:${props => props.height}
    margin-left: ${props => props.marginleft};
    margin-top: ${props => props.margintop};
    margin-right: ${props => props.marginright};
    margin-bottom: ${props => props.marginbottom};
`


export default ImageItem