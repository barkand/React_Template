import React from "react";
import { Divider, IconButton, Drawer } from "@mui/material";
import { ChevronLeft as ChevronLeftIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function MuiDrawer({ children, isDrawerOpen, closeDrawer }) {
  return (
    <>
      <Drawer
        open={isDrawerOpen}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
          },
        }}
      >
        <Divider />
        <DrawerHeader>
          <IconButton onClick={closeDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        {children}
      </Drawer>
    </>
  );
}
