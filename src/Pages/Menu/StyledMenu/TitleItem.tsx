import styled from "styled-components";

interface TitleItemProps {
    margintop: string;
}

const TitleItem = styled.h2<TitleItemProps>`
    font-weight: 700;
    font-size: 30px;
    margin-top:${props => props.margintop};
`


export default TitleItem