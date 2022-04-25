import styled from "styled-components";
import Box from "../util/Box";

const BoxContainer = styled.div`
  width: 300px;
  height: 100%;
  margin: 50px;
`;

const LeftSide = () => {
  return (
    <BoxContainer>
      <Box>
        <p>PVL-speedruns</p>
      </Box>
    </BoxContainer>
  );
};

export default LeftSide;
