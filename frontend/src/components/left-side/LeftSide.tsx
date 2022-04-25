import styled from "styled-components";
import Box from "../util/Box";
import Logo from "../../img/pvlspeedrunslogo.png"

const BoxContainer = styled.div`
  width: 300px;
  height: 100%;
  margin: 50px;
`;

const LogoImg = styled.img`
  align-self: center;
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
  overflow: auto;
`;

const Title = styled.h1`
  font-size: var(--small-text);
  margin-bottom: 0;
  margin-top: 10%;
`;

const Link = styled.a`
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
      <Box>
        <>
          <LogoContainer>
            <LogoImg src={Logo} width={"80%"}/>
          </LogoContainer>
          <TextContainer>
            <Title>Päivölä:</Title>
            <Link href="https://paivola.fi/">https://paivola.fi/</Link>
            <Title>PSIL:</Title>
            <Link href="https://psil.fi/">https://psil.fi/</Link>
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
