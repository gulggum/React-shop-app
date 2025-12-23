import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { fetchProducts, Product } from "../api/fetchProducts";
import { useCartStore } from "../state/cartStore";

const CartPage = () => {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const increase = useCartStore((State) => State.increase);
  const decrease = useCartStore((State) => State.decrease);

  return (
    <CartContainer>
      <PageTitle>Shopping Cart</PageTitle>
      <CartWrap>
        {items.length === 0 ? (
          <p>장바구니가 비어있습니다.</p>
        ) : (
          <ul>
            {items.map((item) => (
              <CartItem key={item.id}>
                {" "}
                <ItemImageWrapper>
                  <ItemImage src={item.image} alt="이미지" />
                </ItemImageWrapper>
                <ItemDetail>
                  <ItemName>{item.title} </ItemName>
                  <ItemPrice>${item.price}</ItemPrice>
                  <CountControl>
                    {" "}
                    <button onClick={() => decrease(item.id)}>-</button>
                    <QuantityButton>{item.quantity}</QuantityButton>
                    <button onClick={() => increase(item.id)}>+</button>
                  </CountControl>
                  <CountPrice>
                    $ {(item.price * item.quantity).toFixed(2)}
                  </CountPrice>
                </ItemDetail>
                <ControlButtons>
                  <button>바로구매</button>
                  <button onClick={() => removeItem(item.id)}>삭제</button>
                </ControlButtons>
              </CartItem>
            ))}
          </ul>
        )}
      </CartWrap>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  max-width: 1000px;
  box-sizing: border-box;
  padding: 1rem;
`;

const PageTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  border-bottom: 1px solid ${(props) => props.theme.text.base};
  padding-bottom: 20px;
`;
const CartWrap = styled.ul`
  width: 100%;
  margin-top: 40px;
`;
const CartItem = styled.li`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  height: 200px;
  align-items: center;
  background-color: ${(props) => props.theme.itemBg};
  margin-bottom: 10px;
`;

const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const ItemImageWrapper = styled.div`
  text-align: center;
`;

const ItemImage = styled.img`
  width: 150px;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ItemName = styled.span`
  font-weight: 500;
`;
const ItemPrice = styled.span``;
const CountControl = styled.div``;
const QuantityButton = styled.span``;
const CountPrice = styled.span`
  font-weight: 500;
  font-size: 20px;
  margin-top: 30px;
`;

const ControlButtons = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
`;

const DeleteBtn = styled.button;
const BuyNow = styled.button;
export default CartPage;
