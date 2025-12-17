//TS가 props.theme를 알 수 있도록 설정(styled-components타입 확장)
import "styled-components";
import { ThemeColorTypes } from "./theme/colors";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeColorTypes {}
}
