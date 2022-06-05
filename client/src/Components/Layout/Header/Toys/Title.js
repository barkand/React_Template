import React from "react";
import { Typography } from "@mui/material";

export default function Title() {
  return (
    <>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {process.env.REACT_APP_COMPANY_NAME}
      </Typography>
    </>
  );
}
