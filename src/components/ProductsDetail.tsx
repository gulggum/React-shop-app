import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
import styled from "styled-components";
import { fetchSingleProduct, Product } from "../api/fetchProducts";
import StartRating from "./StarRating";

interface ProductDetailProps {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

const ProductDetail = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  if (!id) return null;
  const { data: product } = useQuery<ProductDetailProps>({
    queryKey: [["product", id]],
    queryFn: () => fetchSingleProduct(id),
    initialData: (): ProductDetailProps | undefined => {
      const products = queryClient.getQueryData<ProductDetailProps[]>([
        "products",
      ]);
      return products?.find((item) => item.id === Number(id));
    },
  });

  return (
    <DetailContainer>
      <DetailWrapper>
        <DetailImageBox>
          <Detail_image src={product?.image} alt={product?.title} />
        </DetailImageBox>
        <DetailInfoBox>
          <DetailTitle>{product?.title}</DetailTitle>
          <DetailDes>{product?.description}</DetailDes>
          <RatingEl>
            <StartRating rating={product?.rating.rate} />
            {product?.rating.rate}
            <span>/ {product?.rating.count} 참여</span>
          </RatingEl>
          <DetailPrice>${product?.price}</DetailPrice>
          <CartNavButton>
            <AddCart>장바구니에 담기</AddCart>
            <GoToCart>장바구니로 이동</GoToCart>
          </CartNavButton>
        </DetailInfoBox>
      </DetailWrapper>
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
`;
const DetailWrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DetailImageBox = styled.div`
  width: 500px;
  height: 500px;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 5px;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const Detail_image = styled.img`
  width: 250px;
`;

const DetailInfoBox = styled.div`
  padding: 10px;
`;
const DetailTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    font-size: 1.5em;
  }
`;
const DetailDes = styled.p`
  margin-bottom: 20px;
`;
const RatingEl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const DetailPrice = styled.div`
  font-size: 2.5em;
  font-weight: 500;
`;
const CartNavButton = styled.div`
  margin-top: 20px;
  font-size: 1rem;
`;
const AddCart = styled.button`
  padding: 10px 15px;
  background-color: #570df8;
  color: white;
  font-weight: 500;
  border-radius: 5px;
  margin-right: 10px;
  &:hover {
    background-color: #400bb4;
    transition: all 0.4s ease;
  }
`;
const GoToCart = styled.button`
  padding: 10px 15px;
  border: 1px solid ${(props) => props.theme.text.title};
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text.title};
  font-weight: 500;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => props.theme.hover};
    color: ${(props) => props.theme.text.title};
    transition: all 0.4s ease;
  }
`;

export default ProductDetail;
