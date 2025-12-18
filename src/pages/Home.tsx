import { useEffect } from "react";
import styled from "styled-components";
import { fetchProducts } from "../api/products";

const Home = () => {
  useEffect(() => {
    fetchProducts();
    console.log(fetchProducts());
  }, []);
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
};

export default Home;
