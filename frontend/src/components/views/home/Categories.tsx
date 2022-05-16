import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addCategory } from "../../../redux/categories/actions";
import { RootState } from "../../../redux/store";
import CreateNewCategoryModal from "../../modals/CreateNewCategoryModal";
import Box from "../../util/Box";

const HeaderContainer = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Devider = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--highlight-dark);
  margin-top: 25px;
  margin-bottom: 25px;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
`;

const CategoryContainer = styled.div`
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

const CategoryName = styled.p`
  font-size: var(--medium-text);
  margin: 0;
  padding: 10px;
`;

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  const [createNewCategoryModalVisible, setCreateNewCategoryModalVisible] =
    useState<boolean>(false);

  return (
    <>
      {createNewCategoryModalVisible && (
        <CreateNewCategoryModal
          onSubmit={(data: any) => {
            dispatch(addCategory(data.nimi || "", data.kuvaus || "", ""));
            setCreateNewCategoryModalVisible(false);
          }}
          onCancel={() => {
            setCreateNewCategoryModalVisible(false);
          }}
        />
      )}
      <HeaderContainer>
        <CategoryContainer>
          <Box>
            <CategoryName
              onClick={() =>
                setCreateNewCategoryModalVisible(!createNewCategoryModalVisible)
              }
            >
              Luo uusi kategoria
            </CategoryName>
          </Box>
        </CategoryContainer>
      </HeaderContainer>
      <Devider />
      <CategoriesContainer>
        {categories?.map((category) => (
          <CategoryContainer key={category.categoryId}>
            <Link
              to={`/category/${category.categoryId}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box>
                <CategoryName>{category.name}</CategoryName>
              </Box>
            </Link>
          </CategoryContainer>
        ))}
      </CategoriesContainer>
    </>
  );
};

export default Categories;
