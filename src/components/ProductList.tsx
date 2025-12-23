import styled from "styled-components";
import { fetchProducts } from "../api/fetchProducts";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { normalizeCategory } from "../utils/normalizeCategory";
import { formatUSD } from "../utils/formatPrice";

interface ProductListProps {
  limit?: number;
  category?: string;
}

const ProductList = ({ category, limit }: ProductListProps) => {
  const { data: products } = useQuery({
    queryKey: ["products", category],
    queryFn: fetchProducts,
  });

  const filteredProducts = category
    ? products?.filter((product) => product.category.includes(category))
    : products;

  const displayProducts = limit
    ? filteredProducts?.slice(0, limit)
    : filteredProducts;

  return (
    <ProductsWrapper>
      {displayProducts?.map((product) => (
        <ProductBox key={product.id}>
          <Link to={`/${normalizeCategory(product.category)}/${product.id}`}>
            <ImgWrap>
              <Img src={product.image} alt={product.title} />
            </ImgWrap>
            <Info>
              <Title>{product.title}</Title>
              <Price>{formatUSD(product.price)}</Price>
            </Info>
          </Link>
        </ProductBox>
      ))}
    </ProductsWrapper>
  );
};

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: center;
  font-size: 1rem;
  gap: 20px;
  margin-bottom: 50px;
`;

const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 350px;
  background-color: ${(props) => props.theme.itemBg};
  padding: 15px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    img {
      scale: 1.1;
      transition: scale 0.3s ease;
    }
  }
`;
const ImgWrap = styled.div`
  height: 300px;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  height: 240px;
`;
const Img = styled.img`
  width: 100%;
  max-width: 100px;
  display: block;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;
  height: 100px;
`;
const Title = styled.div`
  padding: 5px 10px;
  font-weight: 500;
  line-height: 1.2;
  color: ${(props) => props.theme.text};
`;
const Price = styled.div`
  font-weight: 600;
  text-align: center;
  margin-top: 10px;
`;

export default ProductList;
