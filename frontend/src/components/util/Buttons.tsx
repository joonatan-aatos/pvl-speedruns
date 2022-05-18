import styled from "styled-components";
import Box from "./Box";

export const GhostButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;
  :hover {
    background-color: #ffffff11;
  }
`;

const BoxButtonContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 10px;
  transition: margin 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    margin-top: 7px;
    margin-bottom: 13px;
  }
`;

const ButtonText = styled.p`
  font-size: var(--medium-text);
  margin: 0;
  padding: 10px;
`;

export const BoxButton = (props: { text: string; onClick: () => void }) => {
  return (
    <BoxButtonContainer>
      <Box>
        <ButtonText onClick={props.onClick}>{props.text}</ButtonText>
      </Box>
    </BoxButtonContainer>
  );
};
