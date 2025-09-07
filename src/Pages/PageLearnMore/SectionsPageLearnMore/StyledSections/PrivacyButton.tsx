import styled from "styled-components";

interface PrivacyButtonProps {
    width?:string
}

const PrivacyButton = styled.button<PrivacyButtonProps>`
  width:${props => props.width};
  font-weight: 700;
  border: none;
  border-bottom: 2px solid #1e293b;
  margin: 10px;
  cursor: pointer;
  transition: border 0.2s ease;

  &:hover {
    border: none;
  }
`;

export default PrivacyButton;
