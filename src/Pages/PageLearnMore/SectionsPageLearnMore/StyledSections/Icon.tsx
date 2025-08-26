import styled from "styled-components";

interface IconProps {

    width?:string
    marginleft?:string;
    margintop?:string;
    marginright?:string;
    marginbottom?:string;
}

const Icon = styled.img<IconProps>`
    width:${props => props.width};
    margin-left: ${props => props.marginleft};
    margin-top: ${props => props.margintop};
    margin-right: ${props => props.marginright};
    margin-bottom: ${props => props.marginbottom};
`


export default Icon