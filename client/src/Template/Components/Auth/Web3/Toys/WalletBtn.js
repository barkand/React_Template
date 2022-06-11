import React from "react";
import { Button } from "@mui/material";
import { AccountBalanceWallet as AccountBalanceWalletIcon } from "@mui/icons-material";

import { LoginWallet, LogoutWallet, FillWallet } from "../WalletWeb3";
import { PublicContext } from "../../../../Context/Public";

export default function WalletBtn() {
  const { publicCtx, setPublicCtx } = React.useContext(PublicContext);

  React.useEffect(() => {
    if (publicCtx.device === "mobile") {
      FillWallet();
    }
  }, [publicCtx.device]);

  const walletClick = async () => {
    let _loginLogout = publicCtx.wallet.connected
      ? await LogoutWallet()
      : await LoginWallet(publicCtx.device);

    setPublicCtx({
      ...publicCtx,
      wallet: _loginLogout.wallet,
      alertBar: _loginLogout.alert,
    });
  };

  return (
    <Button color="inherit" onClick={walletClick}>
      <AccountBalanceWalletIcon sx={{ mr: 1 }} />
      {publicCtx.wallet.connected ? "Logout" : "Login"}
    </Button>
  );
}
