import styled from "styled-components";

interface DivMarginProps{

    marginleft?:string;
    margintop?:string;
    marginright?:string;
    marginbottom?:string;
    
}


const DivMargin = styled.div<DivMarginProps>`
    margin-left: ${props => props.marginleft};
    margin-top: ${props => props.margintop};
    margin-right: ${props => props.marginright};
    margin-bottom: ${props => props.marginbottom};
`


export default DivMargin