import fashionImg from "../assets/img/carousel/img_shop_fashion.jpeg";
import digitalImg from "../assets/img/carousel/img_shop_digital.jpeg";
import groceryImg from "../assets/img/carousel/img_shop_grocery.jpeg";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import getCategories from "../utils/getCategories";

const items = [
  {
    name: "clothing",
    title: "물빠진 청바지!",
    text: "이제 막 도착한 패션 청바지를 구경해 보세요.",
    img: fashionImg,
  },
  {
    name: "electronics",
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

interface SliderProps {
  $currentSlider: number;
}

const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlider((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlider((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlider((prev) => (prev - 1 + items.length) % items.length);
  };
  return (
    <SliderContainer>
      <SliderWrapper $currentSlider={currentSlider}>
        {items.map((item) => (
          <Slide key={item.title}>
            <Slide_image src={item.img} alt={item.title} />
            <Slide_info>
              <Slide_title>{item.title}</Slide_title>
              <Slide_text>{item.text}</Slide_text>
              <GoButton>
                <StyleLink to={`${item.name}`}>바로가기 ➔</StyleLink>
              </GoButton>
            </Slide_info>
          </Slide>
        ))}
      </SliderWrapper>
      <PrevButton onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </PrevButton>
      <NextButton onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
      </NextButton>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  margin-top: 56px;
  width: 100vw;
  position: absolute;
  overflow: hidden;
  height: 460px;
  left: 0;
  font-size: 2rem;
  @media (max-width: 1024px) {
    height: 200px;
    font-size: 1.8rem;
  }
`;
const SliderWrapper = styled.div<SliderProps>`
  width: 100%;
  height: 100%;
  display: flex;
  transform: translateX(${(props) => -props.$currentSlider * 100}%);
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div`
  font-size: 2rem;
  min-width: 100%;
  height: 100%;
  color: white;
`;
const Slide_image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Slide_info = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  padding: 100px;
  transform: translate(0, -50%);
  @media (max-width: 1024px) {
    transform: translate(0, -50%);
    font-size: 1rem;
    padding: 80px;
  }
`;

const Slide_title = styled.h2`
  letter-spacing: 1px;
  font-size: 1.5em;
  font-weight: 500;
`;
const Slide_text = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 0.9em;
`;
const GoButton = styled.button`
  padding: 0.8em 1.5em;
  border-radius: 5px;
  color: white;
  font-weight: 500;
  background-color: #3d4451;
  font-size: 0.5em;
  &:hover {
    background-color: ${($props) => $props.theme.hover};
  }
`;
const PrevButton = styled.button`
  color: white;
  position: absolute;
  top: 50%;
  left: 10px;
  font-size: 1em;
  &:hover {
    color: ${($props) => $props.theme.hover};
  }
  transform: translateY(-50%);
`;
//수정하기!!!! 전체선택이안됌
const StyleLink = styled(Link)`
  display: block;
  width: 100%;
`;
const NextButton = styled.button`
  color: white;
  position: absolute;
  top: 50%;
  right: 10px;
  font-size: 1em;
  &:hover {
    color: ${($props) => $props.theme.hover};
  }
  transform: translateY(-50%);
`;

export default Slider;
