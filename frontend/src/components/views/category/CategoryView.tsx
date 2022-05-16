import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../../redux/store";
import Box from "../../util/Box";
import ViewWrapper from "../ViewWrapper";

const Title = styled.h1`
  padding: 15px;
  margin: 0;
  font-size: var(--large-text);
  height: 40px;
`;

const RunsContainer = styled.div`
  mih-height: 0;
  overflow: auto;
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  gap: 10px;
`;

const RunWrapper = styled.div`
  padding: 10px;
`;

const CategoryViewWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CategoryView = () => {
  const { categoryId } = useParams() as { categoryId: string };
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  const category = categories.filter((cat) => cat.categoryId === categoryId)[0];

  const runs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <ViewWrapper>
      <CategoryViewWrapper>
        <Box height="fit-content">
          <Title>{category?.name}</Title>
        </Box>
        <RunsContainer>
          {runs.map((run) => (
            <Box height="fit-content">
              <RunWrapper>{run}</RunWrapper>
            </Box>
          ))}
        </RunsContainer>
      </CategoryViewWrapper>
    </ViewWrapper>
  );
};

export default CategoryView;
