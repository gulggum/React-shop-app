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
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, Product } from "../api/fetchProducts";
import getCategories, { normalizeCategory } from "../utils/getCategories";
import { useCartStore } from "../state/cartStore";

const HeaderArea = () => {
  const [keyword, setKeyword] = useState("");
  const items = useCartStore((state) => state.items); //카트리스트
  const navigate = useNavigate(); //이동함수
  const { toggleTheme, isDark } = useThemeStore();
  const { toggle } = useSideNavStore();
  const [showInput, setShowInput] = useState(false); //모바일전용 검색창
  const { data: products } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const searchKeyword = products?.filter((product) =>
    product.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const categories = products ? getCategories(products) : [];

  const onHandleInput = () => {
    setShowInput((prev) => !prev);
  };

  return (
    <HeaderContainer>
      <HeaderInner>
        {/* header 왼쪽지역 */}
        <NavLeftArea>
          <Mobile_NavButton>
            <IconButton onClick={toggle} iconName={faBars} />
          </Mobile_NavButton>
          <Link to={"/"}>
            <Logo>React Shop</Logo>
          </Link>
          <MenuNav>
            {categories.map((category) => (
              <Li key={category}>
                <StyleLink to={category}>{category}</StyleLink>
              </Li>
            ))}
          </MenuNav>
        </NavLeftArea>
        {/* header 중앙 위치맞추기용 */}
        <NavCenterArea></NavCenterArea>
        {/* header 오른쪽 지역 */}
        <NavRightArea>
          <IconButton
            iconName={isDark ? faMoon : faSun}
            onClick={toggleTheme}
          />
          <SearchArea>
            <SearchInput
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
              type="text"
              placeholder="검색"
            />
            {keyword && (
              <Search>
                {searchKeyword?.map((item) => (
                  <Mobile_SearchList
                    onClick={() => {
                      navigate(
                        `/${normalizeCategory(item.category)}/${item.id}`
                      );
                      setKeyword("");
                    }}
                  >
                    {item.title}
                  </Mobile_SearchList>
                ))}
              </Search>
            )}
            <Mobile_SearchButton>
              <IconButton
                iconName={faMagnifyingGlass}
                onClick={onHandleInput}
              />
            </Mobile_SearchButton>
            <SearchIcon aria-label="검색">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
            </SearchIcon>
          </SearchArea>
          <IconButton
            iconName={faBagShopping}
            onClick={() => {
              navigate("/cart");
            }}
            count={items.length}
          />
        </NavRightArea>
        {/* 모바일버전 검색창 */}
        {showInput && (
          <>
            <Mobile_SearchInput
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
              type="text"
              placeholder="검색"
              $showInput={showInput}
            />
            {keyword && (
              <Mobile_Search>
                {searchKeyword?.map((item) => (
                  <Mobile_SearchList
                    onClick={() => {
                      navigate(
                        `/${normalizeCategory(item.category)}/${item.id}`
                      );
                      setKeyword("");
                    }}
                  >
                    {item.title}
                  </Mobile_SearchList>
                ))}
              </Mobile_Search>
            )}
          </>
        )}
      </HeaderInner>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  padding: 0 5px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;
const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr auto 1fr;
  align-items: center;
  height: 56px;
`;
const NavLeftArea = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.3em;
  color: ${(props) => props.theme.text};
`;

const MenuNav = styled.ul`
  margin-left: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Li = styled.li`
  border-radius: 5px;
  padding: 5px 8px;
  font-weight: 700;
  font-size: 1rem;
  &:hover {
    background-color: ${(props) => props.theme.hover};
    cursor: pointer;
    transition: all 0.4s ease;
  }
`;

const StyleLink = styled(Link)`
  display: block;
  text-transform: capitalize;
  font-weight: 500;
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
const Mobile_SearchButton = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
const Mobile_SearchInput = styled.input<{ $showInput: boolean }>`
  display: none;
  position: absolute;
  width: 100%;
  left: 0;
  top: 56px;
  height: 40px;
  padding-left: 20px;
  border: none;
  background-color: ${(props) => props.theme.line};
  transition: transform 0.4s ease;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Search = styled.ul`
  position: absolute;
  margin-top: 35px;
  width: 100%;
  top: 0;
  background-color: ${(props) => props.theme.bg};
  display: block;
  flex-direction: column;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  max-height: 320px;
  overflow: auto;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Mobile_Search = styled.ul`
  display: none;
  position: absolute;
  margin-top: 98px;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.bg};
  flex-direction: column;
  max-height: 320px;
  overflow: auto;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  @media (max-width: 768px) {
    display: block;
  }
`;
const Mobile_SearchList = styled.li`
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:not(:first-child) {
    border-top: 1px dotted ${(props) => props.theme.line};
  }
  &:hover {
    background-color: ${(props) => props.theme.hover};
    transition: all 0.3s ease;
    cursor: pointer;
  }
`;

export default HeaderArea;
