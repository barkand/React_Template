import React from "react";
import { Button } from "@mui/material";
import {
  Google as GoogleIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";

import { LogoutAccount } from "../../Web1/api/Auth";
import OauthDialog from "../OauthDialog";
import { PublicContext } from "../../../../Context/Public";

export default function OauthBtn() {
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
            <GoogleIcon sx={{ mr: 1 }} />
            {"Login"}
          </>
        )}
      </Button>
      <OauthDialog openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
}
