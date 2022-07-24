import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { PublicContext } from "../../Context/Public";

export default function Theme({ children }) {
  const { publicCtx } = React.useContext(PublicContext);
  const muiTheme = createTheme({
    palette: {
      mode: publicCtx.theme.mode.toLowerCase(),
      primary: {
        main: publicCtx.theme.primary.main,
      },
      secondary: {
        main: publicCtx.theme.secondary.main,
      },
      background: {
        default: publicCtx.theme.background.default,
      },
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
