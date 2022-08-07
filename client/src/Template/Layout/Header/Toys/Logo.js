import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../../Content/Media/Logo.png";

export default function Logo() {
  return (
    <Link to="/">
      <img
        alt="Logo"
        src={logo}
        style={{ width: "30px", marginRight: "20px" }}
      />
    </Link>
  );
}
