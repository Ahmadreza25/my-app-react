import styled from "styled-components";

interface CardContainerProps {

    marginleft?:string
}


const CardContainer = styled.div<CardContainerProps>`
    width: 300px;
    border-radius: 10px;
    margin-left: ${props => props.marginleft};
    margin-top: -8px;
    transition: margin-top 300ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
    margin-top: -8px;
    }
`

export default CardContainer