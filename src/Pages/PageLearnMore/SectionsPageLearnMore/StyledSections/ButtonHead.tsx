import styled from "styled-components";

interface ButtonHeadProps {
    width?:string
}

const ButtonHead = styled.button<ButtonHeadProps>`
    width:${props => props.width};
    height:35px;
    font-weight: 500;
    font-size: 18px;
    color: #f1f5f9;
    margin-right: 10px;
    border-radius: 50px;
    border: 2px solid transparent;
    transition: border-color 0.6s ease-in-out;

    &:hover {
    border-color: #f1f5f9; 
    }
`


export default ButtonHead