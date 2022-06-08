import React from "react";

import StaticHeader from "./Type/StaticHeader";
import ElevateHeader from "./Type/ElevateHeader";
import FixedHeader from "./Type/FixedHeader";
import HideHeader from "./Type/HideHeader";

export default function Header() {
  return (
    <header>
      {process.env.REACT_APP_HEADER_TYPE === "STATIC" ? (
        <StaticHeader />
      ) : process.env.REACT_APP_HEADER_TYPE === "FIXED" ? (
        <FixedHeader />
      ) : process.env.REACT_APP_HEADER_TYPE === "HIDE" ? (
        <HideHeader />
      ) : process.env.REACT_APP_HEADER_TYPE === "ELEVATE" ? (
        <ElevateHeader />
      ) : (
        <></>
      )}
    </header>
  );
}
