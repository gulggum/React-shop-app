import styled from "styled-components";
import ProductList from "../components/ProductList";
import Breadcrumb from "../components/Breadcrumb";

const ClothingPage = () => {
  return (
    <>
      <ClothingPageContainer>
        <Breadcrumb />
        <PageTitle>Clothing</PageTitle>
        <ProductList category="clothing" />
      </ClothingPageContainer>
    </>
  );
};
const ClothingPageContainer = styled.article`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  text-align: center;
`;

const PageTitle = styled.h2`
  margin-top: 30px;
  font-size: 2.5em;
  font-weight: 500;
  margin-bottom: 1em;
`;

export default ClothingPage;
