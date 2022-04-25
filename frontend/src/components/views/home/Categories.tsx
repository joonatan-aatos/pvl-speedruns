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
  width: 200px;
  overflow: hidden;
`;

const Header = styled.p`
  font-size: var(--large-text);
  margin: 0;
  padding: 10px;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
  margin-top: 50px;
`;

const CategoryContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 10px;
  transition: margin-top 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    margin-top: 7px;
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
        <Box>
          <Header>Kategoriat</Header>
        </Box>
      </HeaderContainer>
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
