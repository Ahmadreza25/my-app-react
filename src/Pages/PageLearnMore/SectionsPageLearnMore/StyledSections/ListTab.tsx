import styled from "styled-components";

interface ListTabProps {
    marginleft?:string;
    margintop?:string;
    marginright?:string;
    marginbottom?:string;
}

const ListTab = styled.ul<ListTabProps>`
    margin-left: ${props => props.marginleft};
    margin-top: ${props => props.margintop};
    margin-right: ${props => props.marginright};
    margin-bottom: ${props => props.marginbottom};
`

export default ListTab