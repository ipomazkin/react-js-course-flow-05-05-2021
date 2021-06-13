import { createContext } from "react";

export const theme = {
  color: {
    black: "#000",
    white: "#fff",
    text: {
      default: "#000",
      link: "blue"
    }
  },
  padding: {
    default: 10,
    small: 5,
    big: 20,
  },
  backgroundColor: "red",
};

export const themeMobile = {
  ...theme,
  padding: {
    ...theme.padding,
    default: 20,
    small: 15,
    big: 30,
  },
  backgroundColor: "blue",
};

export const ThemeContext = createContext(theme);
