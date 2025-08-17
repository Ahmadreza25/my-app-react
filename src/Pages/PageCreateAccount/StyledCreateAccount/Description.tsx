import styled from "styled-components";

interface DescriptionProps {
    margintop?:string;
}

const Description = styled.p<DescriptionProps>`
    font-weight: 700;
    font-size: 18px;
    color: #15803d;
    border-bottom: 2px solid #15803d;
    width: 300px;
    margin-top:${props => props.margintop};
`


export default Description