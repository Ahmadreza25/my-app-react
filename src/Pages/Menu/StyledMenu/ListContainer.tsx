import styled from "styled-components";

interface ListContainerProps {
    width:string;
    height:string;
}

const ListContainer = styled.div<ListContainerProps>`
    width:${props => props.width};
    height:${props => props.height};
`


export default ListContainer