import styled from "styled-components";
import IconButton from "./Button/IconButton";
import {
  faBars,
  faSun,
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr auto 1fr;
  align-items: center;
  height: 65px;
  background-color: gainsboro;
  padding: 0px 10px;
`;
const NavLeftArea = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
`;
const NavCenterArea = styled.div``;
const NavRightArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavLeftArea>
        <IconButton iconName={faBars} />
        <Logo>React Shop</Logo>
      </NavLeftArea>
      <NavCenterArea></NavCenterArea>
      <NavRightArea>
        <IconButton iconName={faSun} />
        <IconButton iconName={faMagnifyingGlass} />
        <IconButton iconName={faBagShopping} />
      </NavRightArea>
    </HeaderContainer>
  );
};

export default Header;
