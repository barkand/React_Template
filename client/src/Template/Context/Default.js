export const DefaultPublic = {
  device: "web",
  theme: {
    mode: "light",
    color: "blue",
    primary: { main: "#00bcd4" },
    secondary: { main: "#00bcd4" },
    background: { default: "#fafafa" },
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
    refreshToken: "",
  },
  alertBar: {
    open: false,
    message: "",
    severity: "info",
  },
};
