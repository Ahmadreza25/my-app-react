import styled from "styled-components";

interface TitleProps {
    font?:string
    text?:string
}

const Title = styled.p<TitleProps>`
    font-weight:${props => props.font};
    font-size:${props => props.text};
`


export default Title