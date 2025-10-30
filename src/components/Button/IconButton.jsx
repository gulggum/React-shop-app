import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyleButton = styled.button`
  padding: 10px 5px;
  border-radius: 5px;
  &:hover {
    background-color: orange;
  }
  color: ${(props) => props.theme.text};
`;

const IconButton = ({ iconName, onClick }) => {
  return (
    <StyleButton onClick={onClick}>
      <FontAwesomeIcon icon={iconName} size="lg" />
    </StyleButton>
  );
};
export default IconButton;
