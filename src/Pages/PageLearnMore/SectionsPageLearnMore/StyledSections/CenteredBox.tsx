import styled from 'styled-components';

interface CenteredBoxProps {
    width?:string
    height?:string
    bgColor?:string
    marginleft?:string;
    margintop?:string;
    marginright?:string;
    marginbottom?:string;
}

const CenteredBox = styled.div<CenteredBoxProps>`
  width:${props => props.width};
  height:${props => props.height};
  background-color: ${props => props.bgColor};
  margin-left: ${props => props.marginleft};
  margin-top: ${props => props.margintop};
  margin-right: ${props => props.marginright};
  margin-bottom: ${props => props.marginbottom};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CenteredBox;