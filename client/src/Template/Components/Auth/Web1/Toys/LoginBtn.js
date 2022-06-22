import React from "react";
import { Button } from "@mui/material";
import { Login as LoginIcon, Logout as LogoutIcon } from "@mui/icons-material";

import { LogoutAccount } from "../api/Rest";
import LoginDialog from "../LoginDialog";
import { PublicContext } from "../../../../Context/Public";

export default function LoginBtn() {
  const { publicCtx, setPublicCtx } = React.useContext(PublicContext);
  const [openModal, setOpenModal] = React.useState(false);

  const loginClick = async () => {
    if (publicCtx.auth.connected) {
      localStorage.removeItem("auth");

      let _logout = await LogoutAccount();
      setPublicCtx({
        ...publicCtx,
        auth: _logout.auth,
        alertBar: _logout.alert,
      });
    } else {
      setOpenModal(true);
    }
  };

  return (
    <>
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
      <LoginDialog openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
}
