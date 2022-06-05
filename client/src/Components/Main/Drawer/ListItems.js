import React from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home as HomeIcon, Login as LoginIcon } from "@mui/icons-material";

function CustomLink({ to, name, icon, onclick }) {
  return (
    <>
      <ListItem button component={Link} to={to} onClick={onclick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </>
  );
}

export default function ListItems({ closeDrawer, mode }) {
  return (
    <div
      style={{
        backgroundColor: mode === "dark" ? "#222222" : "#d1d1d1",
      }}
    >
      <CustomLink
        to={"/"}
        name="Page1"
        icon={<HomeIcon />}
        onclick={closeDrawer}
      />
      <CustomLink
        to={"/Page2"}
        name="Page2"
        icon={<LoginIcon />}
        onclick={closeDrawer}
      />
    </div>
  );
}
