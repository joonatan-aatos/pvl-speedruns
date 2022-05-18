import ViewWrapper from "../ViewWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addCategory } from "../../../redux/categories/actions";
import { RootState } from "../../../redux/store";
import GeneralModal from "../../modals/GeneralModal";
import { BoxButton } from "../../util/Buttons";
import { Divider } from "../../util/Util";

const CategoriesWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
  overflow-y: auto;
`;

const HomeView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  const [createNewCategoryModalVisible, setCreateNewCategoryModalVisible] =
    useState<boolean>(false);

  return (
    <ViewWrapper>
      <CategoriesWrapper>
        {createNewCategoryModalVisible && (
          <GeneralModal
            onSubmit={(data: any, password: string) => {
              dispatch(
                addCategory(
                  { name: data.nimi || "", description: data.kuvaus || "" },
                  password
                )
              );
              setCreateNewCategoryModalVisible(false);
            }}
            onCancel={() => {
              setCreateNewCategoryModalVisible(false);
            }}
            fields={["nimi", "kuvaus"]}
          />
        )}
        <HeaderContainer>
          <BoxButton
            text="Luo uusi kategoria"
            onClick={() =>
              setCreateNewCategoryModalVisible(!createNewCategoryModalVisible)
            }
          />
        </HeaderContainer>
        <Divider />
        <CategoriesContainer>
          {categories?.map((category) => (
            <BoxButton
              text={category.name}
              onClick={() => navigate(`/category/${category.categoryId}`)}
            />
          ))}
        </CategoriesContainer>
      </CategoriesWrapper>
    </ViewWrapper>
  );
};

export default HomeView;
