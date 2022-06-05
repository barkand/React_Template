import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";

import Drawer from "./Drawer/Drawer";
import Title from "./Toys/Title";
import DarkModeBtn from "../Theme/DarkModeBtn";

export default function Header() {
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ textAlign: "center" }}
          enableColorOnDark
        >
          <Toolbar variant="dense">
            <Drawer />
            <Title />
            <DarkModeBtn />
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}
