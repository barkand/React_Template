import React from "react";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import MuiDrawer from "./Toys/MuiDrawer";
import MainDrawer from "./Main/MainDrawer";
import NestedDrawer from "./Nested/NestedDrawer";

export default function Drawer() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  let closeDrawer = () => setIsDrawerOpen(false);
  let openDrawer = () => setIsDrawerOpen(true);

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={openDrawer}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <MuiDrawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer}>
        <NestedDrawer />
        <MainDrawer closeDrawer={closeDrawer} />
      </MuiDrawer>
    </>
  );
}
