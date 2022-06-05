import { AppBar, Toolbar } from "@mui/material";

import Drawer from "../Drawer/Drawer";
import Title from "../Toys/Title";
import DarkModeBtn from "../../Theme/DarkModeBtn";

export default function AppBarComponent(props) {
  console.log(props.elevation);
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
        <Title />
        <DarkModeBtn />
      </Toolbar>
    </AppBar>
  );
}
