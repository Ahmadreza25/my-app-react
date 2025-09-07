import styled from "styled-components";

interface LainProps {
  width?: string;
  height?: string;
  marginleft?: string;
  margintop?: string;
  marginright?: string;
  marginbottom?: string;
  bg?: string;
}

const Line = styled.div<LainProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.bg};
  margin-left: ${props => props.marginleft};
  margin-top: ${props => props.margintop};
  margin-right: ${props => props.marginright};
  margin-bottom: ${props => props.marginbottom};
`;

export default Line;
