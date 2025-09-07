import styled from "styled-components";

interface ShortcutKeyProps {
    width?:string
    height?:string
}

const ShortcutKey = styled.button<ShortcutKeyProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    font-weight: 500;
    font-size: 23px;
    color: #1e293b;
    border-radius: 50px;
    margin: 5px;
    transition: all 0.6s ease-in-out;
    border: 1px solid transparent;

    &:hover {
    border-color: #1e293b;
    }
`


export default ShortcutKey