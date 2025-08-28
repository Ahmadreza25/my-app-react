import styled from 'styled-components';

interface CenteredBoxProps {
    width?:string
    height?:string
}

const CenteredBox = styled.div<CenteredBoxProps>`
  width:${props => props.width};
  height:${props => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CenteredBox;