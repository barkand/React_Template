import React from "react";
import { Button } from "@mui/material";
import { Login as LoginIcon, Logout as LogoutIcon } from "@mui/icons-material";

import { LoginAccount, LogoutAccount } from "../LoginWeb1";
import { PublicContext } from "../../../../Context/Public";

export default function LoginBtn() {
  const { publicCtx, setPublicCtx } = React.useContext(PublicContext);

  const loginClick = async () => {
    let _loginLogout = publicCtx.auth.connected
      ? await LogoutAccount()
      : await LoginAccount();

    setPublicCtx({
      ...publicCtx,
      auth: _loginLogout.auth,
      alertBar: _loginLogout.alert,
    });
  };

  return (
    <Button color="inherit" onClick={loginClick}>
      {publicCtx.auth.connected ? (
        <>
          <LogoutIcon sx={{ mr: 1 }} />
          {"Logout"}
        </>
      ) : (
        <>
          <LoginIcon sx={{ mr: 1 }} />
          {"Login"}
        </>
      )}
    </Button>
  );
}
