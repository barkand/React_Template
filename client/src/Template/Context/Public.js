import React from "react";
import { purple } from "@mui/material/colors";

export const Default = {
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
  wallet: {
    library: null,
    network: null,
    networkId: 0,
    account: "0x",
    chainId: 0,
    connected: false,
    balance: {
      eth: 0,
      wei: 0,
    },
    gasLimit: "30000000",
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
