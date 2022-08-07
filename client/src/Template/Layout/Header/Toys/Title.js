import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export default function Title() {
  return (
    <Link to="/">
      <Typography variant="subtitle1" component="div">
        {process.env.REACT_APP_COMPANY_NAME}
      </Typography>
    </Link>
  );
}
