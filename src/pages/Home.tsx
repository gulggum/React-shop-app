import { fetchProducts, Product } from "../api/fetchProducts";
import { useQuery } from "@tanstack/react-query";
import Slider from "../components/Slider";
import styled from "styled-components";
import ProductList from "../components/ProductList";

const Home = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Product[]>({ queryKey: ["products"], queryFn: fetchProducts });

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>에러 발생 :{error.message}</div>;
  return (
    <>
      <Container>
        <Slider />
        <MainContents>
          {/* 패션 구역 */}
          <CategoryArea>
            <Title>Fashion</Title>
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
  height: 100vh;
  margin: 0 auto;
`;

const MainContents = styled.main`
  padding-top: 550px;
  padding-bottom: 50px;
  @media (max-width: 1024px) {
    padding-top: 250px;
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
  border-bottom: 1px solid ${(props) => props.theme.hover};
`;

export default Home;
