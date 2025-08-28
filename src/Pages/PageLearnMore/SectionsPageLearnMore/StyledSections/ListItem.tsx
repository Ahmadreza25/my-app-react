import styled from "styled-components";

interface ListItemProps {
    marginleft?:string;
    margintop?:string;
    marginright?:string;
    marginbottom?:string;
}

const ListItem = styled.li<ListItemProps>`
    font-weight: 600;
    font-size: 17px;
    margin-left: ${props => props.marginleft};
    margin-top: ${props => props.margintop};
    margin-right: ${props => props.marginright};
    margin-bottom: ${props => props.marginbottom};
`


export default ListItem