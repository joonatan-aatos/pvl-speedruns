import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import CategoryView from "./components/views/category/CategoryView";
import HomeView from "./components/views/home/HomeView";
import { setCategories } from "./redux/categories";
import { getCategories } from "./redux/categories/actions";
import { getRuns } from "./redux/runs/actions";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #111618;
    --background-light: #1F2425;
    --highlight: #FFC287;
    --highlight-dark: #EE9845;

    --dark-text: #000000;
    --light-text: #ffffff;

    --very-large-text: 50px;
    --large-text: 35px;
    --medium-text: 25px;
    --small-text: 20px;
    --very-small-text: 15px;

    padding: 0;
    overflow: hidden;
    background-color: var(--background);

    color: var(--dark-text);
    font-size: var(--medium-text);

    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */

  }
`;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getRuns());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <AppWrapper>
        <GlobalStyles />
        <Routes>
          <Route path="/home" element={<HomeView />} />
          <Route path="/category/:categoryId" element={<CategoryView />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
