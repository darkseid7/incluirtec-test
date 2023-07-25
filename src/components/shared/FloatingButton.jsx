import styled from "styled-components";

const StyledFloatingButton = styled.div`
  width: 56px;
  height: 56px;
  background-color: #279ccd;
  border-radius: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e0eefc;
  cursor: pointer;
`;

const FloatingButton = ({ children }) => {
  return <StyledFloatingButton>{children}</StyledFloatingButton>;
};

export default FloatingButton;
