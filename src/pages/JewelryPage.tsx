import styled from "styled-components";
import ProductList from "../components/ProductList";

const JewelryPage = () => {
  return (
    <>
      <JewelryPageContainer>
        {" "}
        <PageTitle>Jewelry Page</PageTitle>
        <ProductList category="jewelery" />
      </JewelryPageContainer>
    </>
  );
};
const JewelryPageContainer = styled.article`
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

export default JewelryPage;
