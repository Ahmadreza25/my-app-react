import styled from "styled-components";

interface FormBoxProps {
    width?:string
    height?:string
}


const FormBox = styled.div<FormBoxProps>`
    width:${props => props.width};
    height:${props => props.height};
`


export default FormBox