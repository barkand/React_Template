import React from "react";
import { Divider, List } from "@mui/material";

import ListItems from "../../../../../Content/Header/Drawer/ListItems";
import Footer from "./Footer";

export default function MainDrawer({ closeDrawer }) {
  return (
    <>
      <Divider />
      <List sx={{ width: "100%" }}>
        <ListItems closeDrawer={closeDrawer} />
      </List>
      <Divider />
      <Footer />
    </>
  );
}
