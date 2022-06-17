import React from "react";
import {
  Typography,
  Button,
  Grid,
  TextField,
  Box,
  Dialog,
} from "@mui/material";
import { Email as EmailIcon, VpnKey as VpnKeyIcon } from "@mui/icons-material";

import { PublicContext } from "../../../../Context/Public";
import { LoginAccount } from "../LoginWeb1";

export default function LoginModal({ openModal, setOpenModal }) {
  const { publicCtx, setPublicCtx } = React.useContext(PublicContext);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleCloseModal = () => setOpenModal(false);

  const handleLogin = () => {
    if (username && password) {
      async function signing() {
        let _login = await LoginAccount(username, password);
        setPublicCtx({
          ...publicCtx,
          auth: _login.auth,
          alertBar: _login.alert,
        });

        handleCloseModal();
      }
      signing();
    }
  };

  return (
    <>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <Grid
          container
          direction="column"
          alignItems="center"
          spacing={2}
          sx={{ padding: "60px" }}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>
          </Grid>

          <Grid item>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="Phone"
                label="Phone"
                variant="standard"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </Box>
          </Grid>

          <Grid item>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <VpnKeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="Password"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </Box>
          </Grid>

          <Grid item sx={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ minWidth: "120px" }}
              onMouseDown={handleLogin}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}
