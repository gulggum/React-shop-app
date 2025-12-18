import { fetchProducts, Product } from "../api/fetchProducts";
import { useQuery } from "@tanstack/react-query";
import Slider from "../components/Slider";

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
      <Slider />
    </>
  );
};

export default Home;
