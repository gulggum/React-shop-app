import { fetchProducts, Product } from "../api/fetchProducts";
import { useQuery } from "@tanstack/react-query";
import Slider from "../components/Slider";
import styled from "styled-components";

interface CategoryTypes {
  category: string;
}

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
      </Container>
    </>
  );
};
const Container = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
`;

export default Home;
