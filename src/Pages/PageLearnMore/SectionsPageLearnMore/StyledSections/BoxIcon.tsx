import styled from "styled-components";
interface BoxIconProps {
    marginleft?:string
}
const BoxIcon = styled.div<BoxIconProps>`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  border: 1px solid #064e03;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:${props => props.marginleft};
`;

export default BoxIcon;
