import styled from "styled-components";
import Box from "../util/Box";
import Logo from "../../img/pvlspeedrunslogo.png";
import { Link } from "react-router-dom";

const BoxContainer = styled.div`
  width: 25%;
  height: calc(100%);
  margin-top: 50px;
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
`;

const TextContainer = styled.div`
  padding-left: 10%;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: var(--small-text);
  margin-bottom: 0;
  margin-top: 10%;
`;

const StyledLink = styled.a`
  font-size: var(--very-small-text);
`;

const NameList = styled.ul`
  margin-top: 5%;
`;

const Name = styled.li`
  font-size: var(--very-small-text);
`;

const Description = styled.p`
  font-size: var(--very-small-text);
`;

const LeftSide = () => {
  return (
    <BoxContainer>
      <Box scrollable>
        <>
          <LogoContainer>
            <Link to={"/home"} style={{ alignSelf: "center", width: "80%" }}>
              <img src={Logo} width={"100%"} alt="" />
            </Link>
          </LogoContainer>
          <TextContainer>
            <Title>Päivölä:</Title>
            <StyledLink href="https://paivola.fi/">
              https://paivola.fi/
            </StyledLink>
            <Title>PSIL:</Title>
            <StyledLink href="https://psil.fi/">https://psil.fi/</StyledLink>
            <Title>Tekijät:</Title>
            <NameList>
              <Name>Joonatan (Zetat)</Name>
              <Name>Zendium (Zetat)</Name>
              <Name>Motsgar (Zetat)</Name>
            </NameList>
            <Description>
              Tämä sivusto luotiin 25.4 2022 PSILin aikana täysin luvallisesti.
            </Description>
          </TextContainer>
        </>
      </Box>
    </BoxContainer>
  );
};

export default LeftSide;
