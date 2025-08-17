import styled from "styled-components";

interface TitleProps {
    width?:string
    height?:string
    font?:string
    text?:string
    color?:string
    marginleft?:string;
    margintop?:string;
    marginright?:string;
    marginbottom?:string;
}

const Title = styled.p<TitleProps>`
    width:${props => props.width};
    height:${props => props.height};
    font-size:${props => props.text};
    font-weight:${props => props.font};
    color:${props => props.color};
    margin-left: ${props => props.marginleft};
    margin-top: ${props => props.margintop};
    margin-right: ${props => props.marginright};
    margin-bottom: ${props => props.marginbottom};
`


export default Title