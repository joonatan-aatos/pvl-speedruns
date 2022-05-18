import { ReactChild } from "react";
import styled from "styled-components";

interface BoxProps {
  width?: string;
  height?: string;
  scrollable?: boolean;
  children: ReactChild;
}

const BoxContainer = styled.div<{
  width: string;
  height: string;
  scrollable: boolean;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: var(--highlight);
  overflow-y: ${({ scrollable }) => (scrollable ? "auto" : "hidden")};
  flex-shrink: 0;
`;

const TopBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: var(--highlight-dark);
`;

const Box = (props: BoxProps) => {
  return (
    <BoxContainer
      width={props.width || "fit-content"}
      height={props.height || "fit-content"}
      scrollable={props.scrollable || false}
    >
      <TopBar />
      {props.children}
    </BoxContainer>
  );
};

export default Box;
