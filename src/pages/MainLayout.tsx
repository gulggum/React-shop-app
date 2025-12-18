import { Outlet } from "react-router";
import HeaderArea from "../components/Header";
import SideNavBar from "../components/SideNavBar";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <>
      <HeaderArea />
      <SideNavBar />
      <Outlet />
      <Container></Container>
    </>
  );
};
const Container = styled.div`
  height: 100vh;
`;

export default MainLayout;
