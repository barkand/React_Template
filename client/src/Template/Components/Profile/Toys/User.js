import React from "react";
import { Typography } from "@mui/material";

import { PublicContext } from "../../../Context/Public";

export default function User() {
  const { publicCtx } = React.useContext(PublicContext);
  const [connected, setConnected] = React.useState(false);
  const [account, setAccount] = React.useState("");

  React.useEffect(() => {
    if (process.env.REACT_APP_AUTH_TYPE !== "WEB3") {
      setConnected(publicCtx.auth.connected);
      setAccount(publicCtx.auth.user);
    } else if (process.env.REACT_APP_AUTH_TYPE === "WEB3") {
      setConnected(publicCtx.wallet.connected);
      if (publicCtx.wallet.connected) {
        var acc = publicCtx.wallet.account;
        setAccount(
          acc.substr(0, 8) + "..." + acc.substr(acc.length - 6, acc.length)
        );
      }
    }
  }, [publicCtx]);

  return (
    <>
      {connected ? (
        <span
          style={{
            padding: "1px 7px",
            borderRadius: "10px",
            marginRight: "25px",
            backgroundColor: publicCtx.theme.primary.main,
            color: "inherited",
            overflow: "hidden",
          }}
        >
          <Typography variant="subtitle2" color="inherited">
            {account}
          </Typography>
        </span>
      ) : (
        <></>
      )}
    </>
  );
}
