import React from "react";
import { Typography } from "@mui/material";

import { PublicContext } from "../../../Context/Public";

export default function User() {
  const { publicCtx } = React.useContext(PublicContext);

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
          <Typography
            variant="subtitle2"
            color="inherited"
            sx={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {publicCtx.wallet.account}
          </Typography>
        </span>
      ) : (
        <></>
      )}
    </>
  );
}
