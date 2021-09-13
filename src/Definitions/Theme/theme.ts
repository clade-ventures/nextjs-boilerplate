import { red } from "@mui/material/colors";
import { createTheme, Theme } from "@mui/material/styles";

// Create a theme instance.
const theme: Theme = createTheme({
  typography: {
    fontFamily: "Roboto, arial, calibri",
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
