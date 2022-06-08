import React, { useState } from "react";
import { Divider, Drawer as MuiDrawer, List, IconButton } from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import { PublicContext } from "../../../Context/Public";

import ListItems from "../../../../Content/Header/Drawer/ListItems";
import FooterItems from "./FooterItems";
import Setting from "../../Setting/Setting";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Drawer() {
  const { publicCtx } = React.useContext(PublicContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  let closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => setIsDrawerOpen(true)}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <MuiDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sx={{
          width: 240,
          minHeight: "50px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor:
              publicCtx.theme.mode === "dark" ? "#0c0c0c" : "#e1e1e1",
          },
        }}
      >
        <List sx={{ width: "100%" }}>
          <Divider />
          <DrawerHeader>
            <IconButton onClick={() => setIsDrawerOpen(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <ListItems closeDrawer={closeDrawer} mode={publicCtx.theme.mode} />
          <Divider />
        </List>
        <Setting />
        <FooterItems />
      </MuiDrawer>
    </>
  );
}
