export interface ThemeColorTypes {
  bg: string;
  itemBg: string;
  text: {
    title: string;
    sub: string;
    base: string;
  };
  hover: string;
}

export const lightTheme = {
  bg: "#F9F8F6",
  itemBg: "#F2F2F2",
  text: {
    title: "#222",
    sub: "#555",
    base: "#999",
  },
  hover: "#c9b59c",
};
export const darkTheme = {
  bg: "#1B211A",
  itemBg: "#555",
  text: {
    title: "#F9F8F6",
    sub: "#cfcfcf",
    base: "#999",
  },
  hover: "#c9b59c",
};
