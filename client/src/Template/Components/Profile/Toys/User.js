import React from "react";
import { Typography } from "@mui/material";

import { PublicContext } from "../../../Context/Public";

export default function User() {
  const { publicCtx } = React.useContext(PublicContext);
  let account = publicCtx.wallet.account;
  return (
    <>
      {publicCtx.wallet.connected ? (
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
            {account.substr(0, 8) +
              "..." +
              account.substr(account.length - 6, account.length)}
          </Typography>
        </span>
      ) : (
        <></>
      )}
    </>
  );
}
