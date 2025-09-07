import styled from "styled-components";

interface BtnPrivacyProps {
  width?: string;
}

const BtnPrivacy = styled.button<BtnPrivacyProps>`
  font-weight: 600;
  margin-top: 15px;
  color: #1e293b;
  width: ${props => props.width};
  transition: border 0.2s ease;

  &:hover {
    border-bottom: 2px solid #1e293b;
  }
`;

export default BtnPrivacy;
