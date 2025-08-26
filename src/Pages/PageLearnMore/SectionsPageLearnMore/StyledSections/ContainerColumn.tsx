import styled from "styled-components";

interface ContainerColumnProps {
    width:string
    height:string
}


const ContainerColumn = styled.div<ContainerColumnProps>`
    width:${props => props.width};
    height:${props => props.height};
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default ContainerColumn