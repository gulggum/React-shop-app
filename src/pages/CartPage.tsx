import styled from "styled-components";
import { useCartStore } from "../state/cartStore";
import { Link } from "react-router";
import { formatUSD } from "../utils/formatPrice";
import { normalizeCategory } from "../utils/getCategories";

const CartPage = () => {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const increase = useCartStore((State) => State.increase);
  const decrease = useCartStore((State) => State.decrease);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const onBuying = () => {
    alert("땡큐~😍");
  };

  return (
    <CartContainer>
      <PageTitle>Shopping Cart</PageTitle>
      {items.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        <CartWrap>
          {items.map((item) => (
            <CartItem key={item.id}>
              {" "}
              <ItemImageWrapper>
                <ItemImage src={item.image} alt="이미지" />
              </ItemImageWrapper>
              <ItemDetail>
                <ItemName>
                  <LinkStyle
                    key={item.id}
                    to={`/${normalizeCategory(item.category)}/${item.id}`}
                  >
                    {item.title}
                  </LinkStyle>{" "}
                </ItemName>
                <ItemPrice>{formatUSD(item.price)}</ItemPrice>
                <CountControl>
                  {" "}
                  <button onClick={() => decrease(item.id)}>－</button>
                  <QuantityValue>{item.quantity}</QuantityValue>
                  <button onClick={() => increase(item.id)}>＋</button>
                </CountControl>
                <CountPrice>
                  $ {(item.price * item.quantity).toFixed(2)}
                </CountPrice>
              </ItemDetail>
              <ControlButtons>
                <button>Buy Now</button>
                <button onClick={() => removeItem(item.id)}>Delete</button>
              </ControlButtons>
            </CartItem>
          ))}
          <TotalPrice>
            Total Price : <span> {formatUSD(totalPrice)}</span>
            <BuyingButton onClick={onBuying}>Buying</BuyingButton>
          </TotalPrice>
        </CartWrap>
      )}
    </CartContainer>
  );
};

const CartContainer = styled.div`
  max-width: 1200px;
  box-sizing: border-box;
  padding: 1rem;
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    img {
      width: 50px;
    }
  }
`;

const PageTitle = styled.h2`
  font-size: 2em;
  font-weight: 500;
  border-bottom: 1px solid ${(props) => props.theme.text};
  padding-bottom: 20px;
`;
const CartWrap = styled.ul`
  margin-top: 40px;
  width: 100%;
`;
const CartItem = styled.li`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme.itemBg};
  margin-bottom: 10px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    height: 140px;
  }
`;

const ItemImageWrapper = styled.div`
  width: 300px;
  flex-shrink: 0; //줄어들지 않게
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100px;
  }
`;

const ItemImage = styled.img`
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemDetail = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
  flex: 1;
  padding: 10px;
`;

const ItemName = styled.span`
  width: 100%;
  display: inline-block;
  font-weight: 500;
  font-size: 1.2em;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    color: ${(props) => props.theme.hover};
  }
`;

const LinkStyle = styled(Link)`
  width: 100%;
`;
const ItemPrice = styled.span`
  font-size: 1.1em;
  margin-bottom: 2px;
`;
const CountControl = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 8px;
  button {
    background-color: ${(props) => props.theme.line};
    border-radius: 5px;
    padding: 5px 8px;
    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.hover};
    }
  }
`;
const QuantityValue = styled.span`
  padding: 5px 8px;
  font-size: 15px;
`;

const CountPrice = styled.span`
  font-weight: 500;
  font-size: 1.5em;
  margin-top: 30px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const ControlButtons = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  button {
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.text};
    &:hover {
      background-color: ${(props) => props.theme.hover};
    }
    @media (max-width: 768px) {
      margin: 0;
    }
  }
`;

const TotalPrice = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.line};
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 2em;
  font-weight: 500;
  padding-right: 20px;
  span {
    color: #a02727;
    margin-left: 20px;
  }
`;

const BuyingButton = styled.button`
  padding: 10px 15px;
  background-color: #570df8;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 40px;
  font-size: 0.7em;
  &:hover {
    background-color: #400bb4;
    transition: all 0.4s ease;
  }
`;
export default CartPage;
