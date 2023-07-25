import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import Button from "../shared/Button";

const StyledHeader = styled.header`
  width: 100%;
  max-width: 425px;
  padding: 16px 20px;
  position: fixed;
  background-color: #fff;
  border-bottom-right-radius: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Button>¡Solicita tu crédito!</Button>
    </StyledHeader>
  );
};

export default Header;
