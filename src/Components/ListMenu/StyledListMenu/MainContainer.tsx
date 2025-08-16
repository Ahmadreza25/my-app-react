import styled from "styled-components";

interface DivBoxProps  {
    width?:string;
    height?:string;
}



const MainContainer = styled.div<DivBoxProps>`
    width:${props => props.width};
    height:${props => props.height};
    display: flex;
    flex-direction: column;
`


export default MainContainer