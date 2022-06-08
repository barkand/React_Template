import React from "react";
import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

import MuiDrawer from "../Toys/MuiDrawer";
import Setting from "../../../Setting/Setting";

export default function NestedDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  let closeDrawer = () => setIsDrawerOpen(false);
  let openDrawer = () => setIsDrawerOpen(true);

  return (
    <div style={{ paddingLeft: "10px" }}>
      <IconButton onClick={openDrawer}>
        <SettingsIcon />
      </IconButton>

      <MuiDrawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer}>
        <Setting />
      </MuiDrawer>
    </div>
  );
}
