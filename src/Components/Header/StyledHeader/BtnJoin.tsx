import styled from "styled-components";

const BtnJoin = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid #0f172a;
  border-radius: 50px;
  font-weight: 500;
  font-size: 14px;
  margin-right: 20px;
  color: #f1f5f9; 
  background-color: #0f172a;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #334155;
  }
`;

export default BtnJoin;
