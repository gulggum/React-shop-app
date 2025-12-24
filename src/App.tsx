import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useThemeStore } from "./state/theme.store";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/router";

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
 html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {    

  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.text};
	line-height: 1.5;
   font-size:1rem;
    position: relative;
    margin: 0 auto;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
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
`;

export default App;
