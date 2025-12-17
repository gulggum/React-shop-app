export interface ThemeColorTypes {
  bg: string;
  text: {
    title: string;
    sub: string;
    base: string;
  };
  hover: string;
}

export const lightTheme = {
  bg: "#F9F8F6",
  text: {
    title: "#222",
    sub: "#555",
    base: "#999",
  },
  hover: "#c9b59c",
};
export const darkTheme = {
  bg: "#1B211A",
  text: {
    title: "#F9F8F6",
    sub: "#cfcfcf",
    base: "#999",
  },
  hover: "#c9b59c",
};
