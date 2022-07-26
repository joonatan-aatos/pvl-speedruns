import { ReactChild } from "react";
import styled from "styled-components";
import LeftSide from "../left-side/LeftSide";

interface ViewWrapperProps {
  children: ReactChild;
}

const ViewWrapperContainer = styled.div`
  height: calc(100% - 100px);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const RightSideWrapper = styled.div`
  width: 55%;
  height: calc(100% - 60px);
  margin-top: 50px;
  padding: 30px;
  background-color: var(--background-light);
`;

const ViewWrapper = (props: ViewWrapperProps) => (
  <ViewWrapperContainer>
    <LeftSide />
    <RightSideWrapper>{props.children}</RightSideWrapper>
  </ViewWrapperContainer>
);

export default ViewWrapper;
