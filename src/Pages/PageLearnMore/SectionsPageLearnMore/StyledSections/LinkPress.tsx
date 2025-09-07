import styled from "styled-components";

interface LinkPressProps {
    width?:string,
    margintop?:string,

}

const LinkPress = styled.button<LinkPressProps>`
    font-weight:700;                    
    font-size:16px;                     
    color:#047857;                      
    margin-top:${props => props.margintop};                   
    border-bottom: 1px solid #047857;   
    width:${props => props.width};                              
    cursor: pointer; 
`


export default LinkPress