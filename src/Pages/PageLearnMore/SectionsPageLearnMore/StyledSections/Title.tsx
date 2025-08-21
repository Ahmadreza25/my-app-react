import styled from "styled-components";

interface TitleProps {
    marginleft?:string;
    margintop?:string;
    marginright?:string;
    marginbottom?:string;
    color?:string;
    size?:string;
    font?:string
    width?:string
}

const Title = styled.p<TitleProps>`
    width:${props => props.width};
    font-weight:${props => props.font};
    font-size:${props => props.size};
    color:${props => props.color};
    margin-left: ${props => props.marginleft};
    margin-top: ${props => props.margintop};
    margin-right: ${props => props.marginright};
    margin-bottom: ${props => props.marginbottom};
`

export default Title