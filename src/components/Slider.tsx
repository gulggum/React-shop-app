import fashionImg from "../assets/img/casousel/img_shop_fashion.jpeg";
import digitalImg from "../assets/img/casousel/img_shop_digital.jpeg";
import groceryImg from "../assets/img/casousel/img_shop_grocery.jpeg";
import styled from "styled-components";

const Slider = () => {
  const items = [
    {
      name: "fashion",
      title: "물빠진 청바지!",
      text: "이제 막 도착한 패션 청바지를 구경해 보세요.",
      img: fashionImg,
    },
    {
      name: "digital",
      title: "신속한 업무처리!",
      text: "다양한 디지털 상품을 둘러보세요.",
      img: digitalImg,
    },
    {
      name: "grocery",
      title: "신선한 식품!",
      text: "농장 직배송으로 더욱 신선한 식료품을 만나보세요.",
      img: groceryImg,
    },
  ];

  return <Carousel></Carousel>;
};

const Carousel = styled.div``;

export default Slider;
