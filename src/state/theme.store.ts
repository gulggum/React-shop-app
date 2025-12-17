import { create } from "zustand";
import { darkTheme, lightTheme, ThemeColorTypes } from "../theme/colors";

//ThemeColors객체 관리

interface ThemeState {
  theme: ThemeColorTypes;
  isDark: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: lightTheme, //초기값
  isDark: false,
  toggleTheme: () =>
    set((state) => ({
      isDark: !state.isDark,
      theme: state.isDark ? lightTheme : darkTheme,
    })),
}));
