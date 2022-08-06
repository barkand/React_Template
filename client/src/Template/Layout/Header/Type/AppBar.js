import React from "react";
import { AppBar, Toolbar } from "@mui/material";

import Drawer from "../Drawer";
import Logo from "../Toys/Logo";
import Title from "../Toys/Title";
import Gap from "../Toys/Gap";
import DarkModeBtn from "../../Theme/DarkModeBtn";
import LoginBtn from "../../../Components/Auth/Web1/Toys/LoginBtn";
import OauthBtn from "../../../Components/Auth/Web2/Toys/OauthBtn";
import WalletBtn from "../../../Components/Auth/Web3/Toys/WalletBtn";

export default function AppBarComponent(props) {
  return (
    <AppBar
      elevation={props.elevation}
      position={props.position}
      sx={{
        textAlign: "center",
        height: "50px",
        backgroundColor: props.elevation === 0 ? "transparent" : "default",
      }}
      enableColorOnDark
    >
      <Toolbar variant="dense">
        <Drawer />
        <Logo />
        <Title />
        <Gap />
        {process.env.REACT_APP_AUTH_TYPE === "MOBILE" ||
        process.env.REACT_APP_AUTH_TYPE === "EMAIL" ? (
          <LoginBtn />
        ) : process.env.REACT_APP_AUTH_TYPE === "OAUTH" ? (
          <OauthBtn />
        ) : process.env.REACT_APP_AUTH_TYPE === "WEB3" ? (
          <WalletBtn />
        ) : (
          <></>
        )}
        <DarkModeBtn />
      </Toolbar>
    </AppBar>
  );
}
