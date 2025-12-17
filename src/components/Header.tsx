import styled from "styled-components";
import IconButton from "./Button/IconButton";
import {
  faBars,
  faSun,
  faMagnifyingGlass,
  faBagShopping,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { useThemeStore } from "../state/theme.store";
import { useSideNavStore } from "../state/sidebar.store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderArea = () => {
  const { toggleTheme, isDark } = useThemeStore();
  const { toggle } = useSideNavStore();
  const [showInput, setShowInput] = useState(true);

  const onHandleInput = () => {
    setShowInput((prev) => !prev);
  };

  return (
    <HeaderContainer>
      <NavLeftArea>
        <Mobile_NavButton>
          <IconButton onClick={toggle} iconName={faBars} />
        </Mobile_NavButton>
        <Link to={"/"}>
          <Logo>React Shop</Logo>
        </Link>
        <MenuNav>
          <Li>패션</Li>
          <Li>악세사리</Li>
          <Li>디지털</Li>
        </MenuNav>
      </NavLeftArea>
      <NavCenterArea></NavCenterArea>
      <NavRightArea>
        <IconButton iconName={isDark ? faSun : faMoon} onClick={toggleTheme} />
        <SearchArea>
          <SearchInput type="text" placeholder="검색" />
          <Mobile_SearchButton>
            <IconButton iconName={faMagnifyingGlass} onClick={onHandleInput} />
          </Mobile_SearchButton>
          <SearchIcon aria-label="검색">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </SearchIcon>
        </SearchArea>
        <IconButton iconName={faBagShopping} />
      </NavRightArea>
      {showInput && (
        <Mobile_SearchInput
          type="text"
          placeholder="검색"
          showInput={showInput}
        />
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 2fr auto 1fr;
  align-items: center;
  height: 56px;
  z-index: 100;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text.title};
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
  color: ${(props) => props.theme.text.title};
`;

const MenuNav = styled.ul`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Li = styled.li`
  padding: 5px;
  font-weight: 700;
  font-size: 1rem;
`;

const NavCenterArea = styled.div``;
const NavRightArea = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
`;

const SearchArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const SearchIcon = styled.div`
  position: absolute;
  font-size: 0.8rem;
  left: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const SearchInput = styled.input`
  padding-left: 28px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Mobile_NavButton = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
const Mobile_SearchButton = styled.button`
  @media (min-width: 768px) {
    display: none;
  }
`;
const Mobile_SearchInput = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== "showInput",
})<{ showInput: boolean }>`
  display: none;
  position: absolute;
  width: 100%;
  left: 0;
  top: 56px;
  height: 40px;
  padding-left: 20px;
  border: none;
  background-color: orange;
  transition: transform 0.4s ease;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export default HeaderArea;
