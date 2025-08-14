import styled from "styled-components";

interface TitleItemProps {

    font?:string
    margintop?:string
    size?:string
}


const TitleItem = styled.p<TitleItemProps>`
    font-weight:${props => props.font};
    margin-top:${props => props.margintop};
    font-size:${props => props.size};
`


export default TitleItem