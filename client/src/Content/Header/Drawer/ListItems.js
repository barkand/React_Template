import React from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home as HomeIcon, Article as ArticleIcon } from "@mui/icons-material";

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

export default function ListItems({ closeDrawer }) {
  return (
    <>
      <CustomLink
        to={"/"}
        name="Home"
        icon={<HomeIcon />}
        onclick={closeDrawer}
      />
      <CustomLink
        to={"/Page1"}
        name="Page1"
        icon={<ArticleIcon />}
        onclick={closeDrawer}
      />
    </>
  );
}
