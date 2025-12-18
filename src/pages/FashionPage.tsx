import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/fetchProducts";

const FashionPage = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  console.log(products);

  return <h1>Fashion Page</h1>;
};

export default FashionPage;
