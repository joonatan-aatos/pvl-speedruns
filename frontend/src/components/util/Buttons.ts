import styled from "styled-components";

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
