import styled from "styled-components";
import LeftSide from "../../left-side/LeftSide";
import Categories from "./Categories";

const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const HomeView = () => {
  return (
    <HomeWrapper>
      <LeftSide />
      <Categories />
    </HomeWrapper>
  );
};

export default HomeView;
