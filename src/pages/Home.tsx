import { fetchProducts, Product } from "../api/fetchProducts";
import { useQuery } from "@tanstack/react-query";
import Slider from "../components/Slider";
import styled from "styled-components";
import ProductList from "../components/ProductList";
const Home = () => {
  return (
    <>
      <Container>
        <Slider />
        <MainContents>
          {/* 패션 구역 */}
          <CategoryArea>
            <Title>Clothing</Title>
            <ProductList limit={4} category="clothing" />
          </CategoryArea>
          {/* 악세서리 구역 */}
          <CategoryArea>
            <Title>Accessory</Title>
            <ProductList limit={4} category="jewelery" />
          </CategoryArea>
          {/* 디지털 구역 */}
          <CategoryArea>
            <Title>Digital</Title>
            <ProductList limit={4} category="electronics" />
          </CategoryArea>
        </MainContents>
      </Container>
    </>
  );
};
const Container = styled.div`
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
`;

const MainContents = styled.main`
  padding-top: 560px;
  padding-bottom: 50px;
  @media (max-width: 1024px) {
    padding-top: 280px;
  }
`;

const CategoryArea = styled.article`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  text-align: center;
`;

const Title = styled.h2`
  display: block;
  padding-bottom: 15px;
  width: 100%;
  font-size: 2.5em;
  font-weight: 500;
  margin-bottom: 1em;
  border-bottom: 1px solid ${(props) => props.theme.line};
`;

export default Home;
