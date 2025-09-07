import styled from "styled-components";

interface TabItemProps {
    margintop?:string
}

const TabItem = styled.li<TabItemProps>`
    list-style: none;       
    border-bottom: 1.5px solid #1e293b;
    width: 55px;
    margin-top:${props => props.margintop};
    transition: border 0.3s ease;

    &:hover {
    border: none;
    }

`

export default TabItem