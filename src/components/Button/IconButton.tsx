import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useThemeStore } from "../../state/theme.store";
interface IconButtonProps {
  iconName: IconProp;
  onClick?: () => void;
  count?: number;
}

const IconButton = ({ iconName, onClick, count }: IconButtonProps) => {
  return (
    <StyleButton onClick={onClick}>
      <FontAwesomeIcon
        icon={iconName}
        size="lg"
        style={{ position: "relative" }}
      />
      {count && count > 0 ? (
        <span
          style={{
            position: "absolute",
            top: "-3px",
            right: "11px",
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 7px",
            fontSize: "12px",
          }}
        >
          {count}
        </span>
      ) : null}
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
