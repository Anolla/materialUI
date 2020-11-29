import React from "react";
import { render } from "react-dom";
import App from "./App";
// import "typeface-roboto";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";

const theme = createMuiTheme({ palette: { primary: yellow } });

render(
  <MuiThemeProvider theme={theme}>
    <App />,
  </MuiThemeProvider>,
  document.getElementById("root")
);
