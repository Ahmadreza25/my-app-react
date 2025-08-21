import styled from "styled-components";


interface FlexItemsProps{

    marginleft?:string;
    margintop?:string;
    marginright?:string;
    marginbottom?:string;
    
}

const FlexItems = styled.div<FlexItemsProps>`
    display: flex;
    align-items: center;
    margin-left: ${props => props.marginleft};
    margin-top: ${props => props.margintop};
    margin-right: ${props => props.marginright};
    margin-bottom: ${props => props.marginbottom};
`


export default FlexItems