import React from "react";
import { purple } from "@mui/material/colors";

const Default = {
  theme: {
    mode: "dark",
    color: "PURPLE",
    primary: {
      main: purple[400],
    },
    secondary: {
      main: purple[200],
    },
  },
};

export const PublicContext = React.createContext({
  publicCtx: "",
  setPublicCtx: () => {},
});

export const PublicProvider = ({ children }) => {
  const [publicCtx, setPublicCtx] = React.useState(Default);
  const value = React.useMemo(() => ({ publicCtx, setPublicCtx }), [publicCtx]);

  return (
    <PublicContext.Provider value={value}>{children}</PublicContext.Provider>
  );
};
