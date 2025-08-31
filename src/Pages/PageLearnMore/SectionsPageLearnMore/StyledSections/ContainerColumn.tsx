import styled from "styled-components";

interface ContainerColumnProps {
    width:string
    height:string
    marginleft?:string;
    margintop?:string;
    marginright?:string;
    marginbottom?:string;
}


const ContainerColumn = styled.div<ContainerColumnProps>`
    width:${props => props.width};
    height:${props => props.height};
    margin-left: ${props => props.marginleft};
    margin-top: ${props => props.margintop};
    margin-right: ${props => props.marginright};
    margin-bottom: ${props => props.marginbottom};
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default ContainerColumn