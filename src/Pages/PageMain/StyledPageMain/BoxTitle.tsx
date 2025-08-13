import styled from "styled-components";

interface BoxTitleProps {
    height:string;
}

const BoxTitle = styled.div<BoxTitleProps>`
    width: 700px;
    height:${props => props.height};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export default BoxTitle