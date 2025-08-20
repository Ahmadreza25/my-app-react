import styled from "styled-components";


interface FlexItemsProps{

    width?:string
    height?:string
    marginleft?:string;
    margintop?:string;
    marginright?:string;
    marginbottom?:string;
    justify?:string;
}
const FlexItems = styled.div<FlexItemsProps>`
    display: flex;
    align-items: center;
    width:${props => props.width};
    height:${props => props.height};
    justify-content:${props => props.justify};
    margin-left: ${props => props.marginleft};
    margin-top: ${props => props.margintop};
    margin-right: ${props => props.marginright};
    margin-bottom: ${props => props.marginbottom};
`

export default FlexItems