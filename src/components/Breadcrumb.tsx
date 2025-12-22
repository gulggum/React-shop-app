import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router";
import styled from "styled-components";

interface BreadcrumbProps {
  productTitle?: string;
}

const Breadcrumb = ({ productTitle }: BreadcrumbProps) => {
  console.log("productTitle=" + productTitle);
  const location = useLocation();
  const pathNames = location.pathname
    .split("/")
    .filter(Boolean) //빈 문자열 제거
    .filter((segment) => isNaN(Number(segment))); //id 숫자 제거
  console.log("pathNames=" + pathNames);

  const displayNames = pathNames
    .map((p) => {
      //   if (p === "category") return; : 카테고리가 있는경우만 한면될듯
      return p.charAt(0).toUpperCase() + p.slice(1);
    })
    .filter(Boolean);

  if (productTitle) displayNames.push(productTitle);

  console.log("😍location=", location);
  return (
    <Nav>
      <LinkStyle to={"/"}>Home</LinkStyle>
      {displayNames.map((name, index) => (
        <span>
          <FontAwesomeIcon
            style={{ color: "gray", opacity: 0.4 }}
            icon={faChevronRight}
          />{" "}
          {""}
          {index === displayNames.length - 1 ? (
            <span>{name}</span>
          ) : (
            <LinkStyle to={`/${pathNames.slice(0, index + 1).join("/")}`}>
              {name}
            </LinkStyle>
          )}
        </span>
      ))}
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  height: 40px;
  text-align: left;
  line-height: 40px;
  padding-left: 1rem;
  box-sizing: border-box;
  font-size: 13px;
`;
const LinkStyle = styled(Link)`
  &:hover {
    font-weight: 600;
  }
`;

export default Breadcrumb;
