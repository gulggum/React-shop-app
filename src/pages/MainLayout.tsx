import { Outlet } from "react-router";
import HeaderArea from "../components/Header";
import SideNavBar from "../components/SideNavBar";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <>
      <HeaderArea />
      <SideNavBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

export default MainLayout;
