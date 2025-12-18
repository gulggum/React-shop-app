import { useState } from "react";
import styled from "styled-components";
import { useSideNavStore } from "../state/sidebar.store";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/fetchProducts";
import getCategories from "../utils/getCategories";
import { Link } from "react-router";

const productData = ["패션", "악세사리", "디지털"];

const SideNavBar = () => {
  const { isOpen, close } = useSideNavStore();
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const categories = products ? getCategories(products) : [];

  return (
    <>
      {isOpen && <Overlay onClick={close} $isOpen={isOpen} />}
      <SideBar $isOpen={isOpen}>
        <ul onClick={(e) => e.stopPropagation()}>
          {categories.map((category) => (
            <Li key={category}>
              <StyleLink to={category} onClick={() => close()}>
                {category}
              </StyleLink>
            </Li>
          ))}
        </ul>
      </SideBar>
    </>
  );
};

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  z-index: 1000;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transition: transform 0.3s ease;
`;
const SideBar = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;

  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.bg};
  transform: ${(props) =>
    props.$isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.4s ease;
  z-index: 2000;
`;
const Li = styled.li`
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => props.theme.hover};
    cursor: pointer;
    transition: all 0.4s ease;
  }
`;

const StyleLink = styled(Link)`
  display: block;
  padding: 1rem;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.2rem;
`;

export default SideNavBar;
