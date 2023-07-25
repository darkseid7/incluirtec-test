import Header from "../../Header/Header";
import Hero from "../../Hero/Hero";

import styled from "styled-components";

const StyledHome = styled.div`
  max-width: 425px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Hero />
    </StyledHome>
  );
};

export default Home;
