import Home from "./pages/Home";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useThemeStore } from "./state/theme.store";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/router";
import MainLayout from "./pages/MainLayout";

function App() {
  const { theme } = useThemeStore();

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppRouter />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
 /* 기본 박스 사이징 */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* 기본 마진/패딩 제거 */
  body, h1, h2, h3, h4, h5, h6, p, ul, ol, li, figure, blockquote {
    margin: 0;
    padding: 0;
  }

  

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.text.title};
    line-height:1.5;
    height  : 100%;
    position: relative;
    font-size:1rem


  }
  #root{
    width: 100%; /* 모바일 기준크기 */
    max-width: 1200px; /* PC 최대크기 */
    margin: 0 auto;
    padding: 0 1px;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  input, button, textarea, select {
    font: inherit;
  }

  /* flex/grid 중앙 정렬 helper */
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default App;
