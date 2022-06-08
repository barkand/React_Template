import React from "react";
import { PublicContext } from "../../../Context/Public";
import { LoginWallet, LogoutWallet } from "./WalletWeb3";

function Auth() {
  const { publicCtx } = React.useContext(PublicContext);

  const walletClick = async () => {
    setWallet(
      publicCtx.wallet.connected ? await LogoutWallet() : await LoginWallet()
    );
  };

  return (
    <div>
      <button onClick={walletClick}>
        {publicCtx.wallet.connected ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Auth;
