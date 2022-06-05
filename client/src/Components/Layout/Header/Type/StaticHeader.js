import { Box } from "@mui/material";
import AppBarComponent from "./AppBar";

export default function StaticHeader() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBarComponent position="static" />
      </Box>
    </>
  );
}
