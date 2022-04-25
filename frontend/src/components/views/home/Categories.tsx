import styled from "styled-components";
import Box from "../../util/Box";

const CategoriesWrapper = styled.div`
  width: 55%;
  height: 100%;
  margin-top: 50px;
  padding: 30px;
  background-color: var(--background-light);
`;

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
  const categories = [
    "Peltolenkki any %",
    "0,5 L Solaa any %",
    "Ylppärit any %",
    "Käntyn syönti any %",
    "Peltolenkki any %",
    "0,5 L Solaa any %",
    "Ylppärit any %",
    "Käntyn syönti any %",
    "Peltolenkki any %",
    "0,5 L Solaa any %",
    "Ylppärit any %",
    "Käntyn syönti any %",
  ];

  return (
    <CategoriesWrapper>
      <HeaderContainer>
        <CategoryContainer>
          <Box>
            <CategoryName>Luo uusi kategoria</CategoryName>
          </Box>
        </CategoryContainer>
      </HeaderContainer>
      <Devider />
      <CategoriesContainer>
        {categories.map((category) => (
          <CategoryContainer>
            <Box>
              <CategoryName>{category}</CategoryName>
            </Box>
          </CategoryContainer>
        ))}
      </CategoriesContainer>
    </CategoriesWrapper>
  );
};

export default Categories;
