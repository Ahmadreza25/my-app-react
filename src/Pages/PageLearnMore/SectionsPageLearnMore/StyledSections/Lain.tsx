import styled from "styled-components";

interface LainProps{

    marginleft?:string;
    margintop?:string;
    marginright?:string;
    marginbottom?:string;
    
}

const Lain = styled.div<LainProps>`
    width: 1px;
    height: 100%;
    background-color: #cbd5e1;
    margin-left: ${props => props.marginleft};
    margin-top: ${props => props.margintop};
    margin-right: ${props => props.marginright};
    margin-bottom: ${props => props.marginbottom};
`


export default Lain