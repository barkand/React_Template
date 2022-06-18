import React from "react";
import SetColor from "../Layout/Theme/SetColor";

function deviceType() {
  return "ontouchstart" in window || "onmsgesturechange" in window
    ? "mobile"
    : "web";
}

export const Default = {
  device: deviceType(),
  theme: {
    mode: process.env.REACT_APP_THEM_MODE,
    color: process.env.REACT_APP_THEM_COLOR,
    primary: {
      main: SetColor(
        process.env.REACT_APP_THEM_MODE,
        process.env.REACT_APP_THEM_COLOR,
        "Primary"
      ),
    },
    secondary: {
      main: SetColor(
        process.env.REACT_APP_THEM_MODE,
        process.env.REACT_APP_THEM_COLOR,
        "Secondary"
      ),
    },
  },
  wallet: {
    connected: false,
    library: null,
    network: null,
    networkId: 0,
    account: "0x",
    chainId: 0,
    balance: {
      eth: 0,
      wei: 0,
    },
    gasLimit: "30000000",
  },
  auth: {
    connected: false,
    user: "",
    token: "",
  },
  alertBar: {
    open: false,
    message: "",
    severity: "info",
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
