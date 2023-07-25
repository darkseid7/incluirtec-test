import styled from "styled-components";

export const StyledHero = styled.section`
  height: 825px;
  background-color: #021442;
  position: relative;
`;

export const StyledOrangeDot = styled.div`
  position: absolute;
  right: 0;
  top: 332px;
`;

export const StyledMainLogo = styled.div`
  position: absolute;
  top: 225px;
  left: 40px;
`;

export const FloatingButtonContainer = styled.div`
  position: fixed;
  top: 630px;
  right: 12px;
`;

export const HeroInfo = styled.div`
  max-width: 374px;
  padding: 0 20px;
  position: absolute;
  top: 460px;

  button {
    padding: 9px 20px;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    letter-spacing: 0.2px;
  }

  h1 {
    margin-bottom: 8px;
    color: #fff;
    font-size: 32px;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: 0.32px;
  }

  p {
    max-width: 320px;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: 0.16px;
  }
`;
