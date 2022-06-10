import React from "react";
import { IconButton, Stack } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

import MuiDrawer from "../Toys/MuiDrawer";
import User from "../Toys/User";
import Setting from "../../../Setting/Setting";

export default function NestedDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  let closeDrawer = () => setIsDrawerOpen(false);
  let openDrawer = () => setIsDrawerOpen(true);

  return (
    <div style={{ paddingLeft: "10px" }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <IconButton onClick={openDrawer}>
          <SettingsIcon />
        </IconButton>
        <User />
      </Stack>
      <MuiDrawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer}>
        <Setting />
      </MuiDrawer>
    </div>
  );
}
