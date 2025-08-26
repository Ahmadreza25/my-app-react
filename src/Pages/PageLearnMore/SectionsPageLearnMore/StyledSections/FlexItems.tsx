import styled from "styled-components";


interface FlexItemsProps{
    width?:string
    height?:string
    marginleft?:string;
    margintop?:string;
    marginright?:string;
    marginbottom?:string;
    
}

const FlexItems = styled.div<FlexItemsProps>`
    display: flex;
    align-items: center;
    width:${props => props.width};
    height:${props => props.height};
    margin-left: ${props => props.marginleft};
    margin-top: ${props => props.margintop};
    margin-right: ${props => props.marginright};
    margin-bottom: ${props => props.marginbottom};
`


export default FlexItems