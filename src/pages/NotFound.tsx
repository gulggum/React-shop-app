import { Link } from "react-router";
import styled from "styled-components";

const NotFound = () => {
  return (
    <NotFoundBox>
      <Title404>404</Title404>
      <Text404>페이지를 찾을 수 없습니다.</Text404>
      <Button404>
        <Link to={"/"}>메인으로</Link>
      </Button404>
    </NotFoundBox>
  );
};

const NotFoundBox = styled.div`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  text-align: center;
`;

const Title404 = styled.h2`
  margin-top: 30px;
  font-size: 7em;
  font-weight: 700;
  margin-bottom: 1em;
  margin-bottom: 0;
  color: ${(props) => props.theme.text};
`;

const Text404 = styled.p`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const Button404 = styled.button`
  padding: 1em 1.5em;
  background-color: #570df8;
  border-radius: 5px;
  color: white;
  font-weight: 500;
  font-size: 1.2em;
  &:hover {
    background-color: #400bb4;
  }
`;
export default NotFound;
