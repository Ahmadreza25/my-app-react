import styled from "styled-components";


interface DivImageProps {
    height:string;
}


const DivImage = styled.div<DivImageProps>`
    width: 700px;
    height:${props => props.height};
`


export default DivImage