import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useThemeStore } from "../../state/theme.store";
interface IconButtonProps {
  iconName: IconProp;
  onClick?: () => void;
}

const IconButton = ({ iconName, onClick }: IconButtonProps) => {
  return (
    <StyleButton onClick={onClick}>
      <FontAwesomeIcon icon={iconName} size="lg" />
    </StyleButton>
  );
};

const StyleButton = styled.button`
  padding: 8px;
  border-radius: 5px;
  margin-right: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: ${(props) => props.theme.hover};
    transform: 0.5s ease;
  }
  color: ${(props) => props.theme.text.title};
`;
export default IconButton;
