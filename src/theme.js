// src/theme/theme.js
import { extendTheme } from "@chakra-ui/theme-utils";

const theme = extendTheme({
  colors: {
    primary: {
      100: "#EBF8FF",
      500: "#3182CE",
      900: "#1A365D",
    },
    secondary: {
      500: "#E53E3E",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.800",
      },
    },
  },
});

export default theme;
