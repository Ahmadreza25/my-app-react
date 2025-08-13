import styled from "styled-components";
 interface BodyContainerprops {
    height:string;
    bg:string;
 }

const BodyContainer = styled.div<BodyContainerprops>`
    width: 1400px;
    height:${props => props.height};
    background-color:${props => props.bg};
    margin-top: 50px;
    display: flex;
    align-items: center;
`

export default BodyContainer