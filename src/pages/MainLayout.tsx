import { Outlet, useParams } from "react-router";
import HeaderArea from "../components/Header";
import SideNavBar from "../components/SideNavBar";
import styled from "styled-components";
import Breadcrumb from "../components/Breadcrumb";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleProduct } from "../api/fetchProducts";
import FooterArea from "../components/Footer";

const MainLayout = () => {
  const { id } = useParams();
  const { data: product } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchSingleProduct(id),
  });

  //홈에서는 표시 안함
  const showBreadcrumb = location.pathname !== "/";
  return (
    <>
      <HeaderArea />
      {showBreadcrumb && <Breadcrumb productTitle={product?.title} />}
      <SideNavBar />
      <Container>
        <Outlet />
      </Container>
      <FooterArea />
    </>
  );
};

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  height: auto;
`;

export default MainLayout;
