import { ReactChild } from "react";
import styled from "styled-components";

interface BoxProps {
  width?: string;
  height?: string;
  children: ReactChild;
}

const BoxContainer = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: var(--highlight);
`;

const TopBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: var(--highlight-dark);
`;

const Box = (props: BoxProps) => {
  return (
    <BoxContainer width={props.width || "100%"} height={props.height || "100%"}>
      <TopBar />
      {props.children}
    </BoxContainer>
  );
};

export default Box;
