import styled from "styled-components";

const StyledButton = styled.button`
  padding: 4px 10px;
  background: #df512c;
  border: none;
  border-radius: 40px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
