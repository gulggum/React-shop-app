import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyleButton = styled.button`
  padding: 10px 5px;
  border-radius: 5px;
  &:hover {
    background-color: aliceblue;
  }
`;

const IconButton = ({ iconName }) => {
  return (
    <StyleButton>
      <FontAwesomeIcon icon={iconName} size="lg" />
    </StyleButton>
  );
};
export default IconButton;
