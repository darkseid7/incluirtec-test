import styled from "styled-components";

import { ReactComponent as MainLogo } from "../../assets/grouplogo-2.svg";
import { ReactComponent as BlueDot } from "../../assets/blue-dot.svg";
import { ReactComponent as OrangeDot } from "../../assets/orange-dot.svg";
import { ReactComponent as Contact } from "../../assets/contact.svg";

import Button from "../shared/Button";
import FloatingButton from "../shared/FloatingButton";

import {
  StyledHero,
  StyledMainLogo,
  StyledOrangeDot,
  FloatingButtonContainer,
  HeroInfo,
} from "./HeroStyles";

const Hero = () => {
  return (
    <StyledHero>
      <OrangeDot />
      <StyledOrangeDot>
        <BlueDot />
      </StyledOrangeDot>
      <StyledMainLogo>
        <MainLogo width="288px" />
      </StyledMainLogo>
      <HeroInfo>
        <Button>¡Simular mi crédito!</Button>
        <h1>¡Bienvenido al crédito digital de Interactuar!</h1>
        <p>
          Solicita tu crédito digital con Interactuar, rápido y fácil desde la
          comodidad de tu casa y <strong>¡haz crecer tu negocio!</strong>
        </p>
      </HeroInfo>
      <FloatingButtonContainer>
        <FloatingButton>
          <Contact />
        </FloatingButton>
      </FloatingButtonContainer>
    </StyledHero>
  );
};

export default Hero;
